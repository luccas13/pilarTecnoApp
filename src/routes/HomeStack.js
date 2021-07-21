import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title: 'Home',
                headerTintColor: 'rgb(118, 177, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTransparent: true,
                headerBackground: () => 
                    <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            }}
            />
        </HomeStack.Navigator>
    )
}