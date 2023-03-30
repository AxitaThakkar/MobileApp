import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from '../screen/OnBoard';
import Login from '../screen/Login';
import DashBoard from '../screen/DashBoard';
import ListItem from '../screen/ListItem';
import EditProfile from '../screen/EditProfile';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
