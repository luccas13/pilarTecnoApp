import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';

const PostsStack = createStackNavigator();

export const PostsStackScreen = () => {
    return (
        <PostsStack.Navigator>
            <PostsStack.Screen 
                name="Posts"
                component={Posts} 
                options={{
                    title: 'Puestos',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTransparent: true,
                    headerBackground: () => 
                        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
                }}
            />
            <PostsStack.Screen 
                name="PostDetail" 
                component={PostDetail}
                options={{
                    title: 'Detalles',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTransparent: true,
                    headerBackground: () => 
                        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
                }}
            />
            <PostsStack.Screen 
                name="PostEdit" 
                component={PostEdit}
                options={{
                    title: 'Editar Puesto',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTransparent: true,
                    headerBackground: () => 
                        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
                }} 
            />
            <PostsStack.Screen 
                name="PostCreate" 
                component={PostCreate} 
                options={{
                    title: 'Crear Puesto',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTransparent: true,
                    headerBackground: () => 
                        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
                }}
            />
        </PostsStack.Navigator>
    )
}