import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';
import { actions } from '../store';

GoogleSignin.configure({
    webClientId: '696191771941-k73fbhk2k9sbbmlf7d7jrlkcn8p42n96.apps.googleusercontent.com',
});

const { height, width } = Dimensions.get('window');

const Login = (props) => {

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
                style={{ height, paddingLeft: width / 4, justifyContent: 'center' }}
                source={require('../assets/images/background.jpg')}
            >
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

const mapDispatchToProps = dispatch => ({
    setUser: (data) =>
        dispatch(actions.user.setUser(data)),
});

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, mapDispatchToProps)((Login));