import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store';

const { height, width } = Dimensions.get('window');

const PostEdit = (props) => {

    const { item } = props.route.params;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name);
            setAddress(item.address);
            setLatitude(item.latitude);
            setLongitude(item.longitude);
            setUrl(item.url);
        }
    }, [item]);

    const update = () => {
        const { _id } = item;
        props.updatePost({ name, address, latitude, longitude, url, _id }).then(() => {
            props.navigation.popToTop();
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
                    <Button title='Actualziar' onPress={() => update()}
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
    updatePost: (data) =>
        dispatch(actions.posts.updatePost(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit));