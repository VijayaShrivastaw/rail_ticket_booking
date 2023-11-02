// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/authScreens/Login';
import Signup from '../screens/authScreens/Singup';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false

        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation