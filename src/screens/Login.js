import React, { useState } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';
import { actions } from '../store';
import { Alert } from 'react-native';

GoogleSignin.configure({
    webClientId: '696191771941-k73fbhk2k9sbbmlf7d7jrlkcn8p42n96.apps.googleusercontent.com',
});

const { height, width } = Dimensions.get('window');

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    return (
        <SafeAreaView>
            <ImageBackground
                style={{ 
                    // flex: 1,
                    height, 
                    paddingLeft: width / 6, 
                    paddingRight: width / 6, 
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={require('../assets/images/background.jpg')}
            >
                <TextInput
                    style={style.input}
                    value={email}
                    placeholder='Insert Email'
                    placeholderTextColor='rgba(255, 255, 255, .35)'
                    onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                    style={style.input}
                    value={password}
                    placeholder='Insert Password'
                    placeholderTextColor='rgba(255, 255, 255, .35)'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={() => { 
                        email & password ?
                            auth().signInWithEmailAndPassword(email, password)
                            .then(async data => {
                            console.log('Signed in with e-mail!');                    
                            if (data) {
                                console.log('res login: ' + JSON.stringify(data.user));
                                try {
                                await AsyncStorage.setItem(
                                    'isloged',
                                    JSON.stringify(data.user),
                                );
                                } catch (e) {
                                console.log('There was a error:' + e);
                                }
                                props.setUser(data.user);
                            }
                            }).catch (err => {console.log(err)})
                        : 
                            Alert.alert('Complete all fields');
                    }}
                >
                    <Text style={style.text} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => props.navigation.navigate('NewAccount')}
                >
                    <Text style={style.text} >New Account</Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => onGoogleButtonPress()
                        .then(async (data) => {
                            console.log('Signed in with Google!');
                            if (data) {
                                console.log('res login: ' + JSON.stringify(data.user));
                                try {
                                    await AsyncStorage.setItem('isloged', JSON.stringify(data.user));
                                } catch (e) {
                                    console.log('There was a error:' + e);
                                }
                                props.setUser(data.user);
                            }
                        })
                        .catch(err => console.log(`catch ${err}`))
                    }
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    input: {
        fontSize: 20,
        width: width / 1.2,
        height: 48,
        backgroundColor: 'rgba(28, 89, 96, .7)',
        color: 'rgba(255, 255, 255, .9)',
        borderWidth: 1,
        borderColor: '#fff', 
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 5,
    },
    button: {
        backgroundColor: 'rgb(60, 136, 255)',
        paddingHorizontal: 25,
        marginVertical: 5,
        width: width / 1.955,
        height: 40,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

const mapDispatchToProps = dispatch => ({
    setUser: (data) =>
        dispatch(actions.user.setUser(data)),
});

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, mapDispatchToProps)((Login));