import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                title: 'Perfil',
                headerTintColor: 'rgb(118, 177, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTransparent: true,
                headerBackground: () => 
                    <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            }}
            />
        </ProfileStack.Navigator>
    )
}