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

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const send = () => {
        ///VALIDACIONES
        props.createPost({ title, body }).then(() => {
            props.navigation.goBack();
        });
    }
        return (
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground
                    style={[styles.content, { height, width }]}
                    source={require('../assets/images/background.jpg')}
                >
                    <Input
                        placeholder='Titulo'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                    <Input
                        placeholder='Descripcion'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={body}
                        onChangeText={(value) => setBody(value)}
                        multiline
                        numberOfLines={2}
                    />
                    <Button title='Postear' onPress={() => send()}
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
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
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