import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Posts = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                style={{ height, paddingLeft: width/4, paddingTop: height/4 }}
                source={require('../assets/images/background.jpg')}
            >
                <View style={styles.box} >
                    <Text style={styles.text} >
                        Posts
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Posts;

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