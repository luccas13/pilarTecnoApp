import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../screens/Map';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
    return (
        <MapStack.Navigator>
            <MapStack.Screen 
            name="Map" 
            component={Map} 
            options={{
                title: 'Mapa',
                headerTintColor: 'rgb(118, 177, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTransparent: true,
                headerBackground: () => 
                    <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            }}
            />
        </MapStack.Navigator>
    )
}