import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../routes/app';

 const App = (props) => {

    return( 
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    )
}

export default App;