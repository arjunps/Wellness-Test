
// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Welcome'
import MovieTurbo from '../screens/MovieTurbo'
import Login from '../screens/Login'


const Stack = createNativeStackNavigator();

const Router =()=>{
   return <NavigationContainer

   >
    <Stack.Navigator
screenOptions={{
    headerShown:false
}}
    >
        <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MovieTurbo" component={MovieTurbo} />
    </Stack.Navigator>
  </NavigationContainer>
}


export default Router