import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Login = (props) => {

    console.log(props);

    return (
        <SafeAreaView>
            <ImageBackground
                style={{ height, paddingLeft: width / 4, justifyContent: 'center' }}
                source={require('../assets/images/background.jpg')}
            >
                <TouchableOpacity 
                style={styles.box} 
                >
                    <Text style={styles.text} >
                        Sign in
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    box: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(28, 89, 96, .7)',
        zIndex: 1
    }
})