import React, { useState } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store';

const { height, width } = Dimensions.get('window');

const PostCreate = (props) =>  {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [url, setUrl] = useState('');

    const send = () => {
        ///VALIDATIONS
        props.createPost({ name, address, latitude, longitude, url }).then(() => {
            props.navigation.goBack();
        });
    }
        return (
            <SafeAreaView>
                <ImageBackground
                    style={styles.content}
                    source={require('../assets/images/background.jpg')}
                >
                    <Input
                        placeholder='Nombre'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={name}
                        onChangeText={(value) => setName(value)}
                    />
                    <Input
                        placeholder='Dirección'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={address}
                        onChangeText={(value) => setAddress(value)}
                    />
                    <Input
                        keyboardType='number-pad'
                        placeholder='Latitud'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={latitude}
                        onChangeText={(value) => setLatitude(value)}
                    />
                    <Input
                        keyboardType='number-pad'
                        placeholder='Longitud'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={longitude}
                        onChangeText={(value) => setLongitude(value)}
                    />
                    <Input
                        placeholder='URL de la Imagen'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={url}
                        onChangeText={(value) => setUrl(value)}
                    />
                    <Button title='Post' onPress={() => send()}
                        style={{ width: width * 0.8 }} />
                </ImageBackground>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        height,
        width,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch => ({
    createPost: (data) =>
        dispatch(actions.posts.createPost(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)((PostCreate));