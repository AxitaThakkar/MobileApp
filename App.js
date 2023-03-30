import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from './src/screen/OnBoard';
import Login from './src/screen/Login';
import ListItem from './src/screen/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import AnimatedSplash from 'react-native-animated-splash-screen';
import DashBoard from './src/screen/DashBoard';
import {Button, View} from 'react-native';
import CustomDrower from './src/components/CustomDrower';
import AppStack from './src/navigation/AppStack';
import {AuthContext} from './src/components/AuthContext';
import AuthStack from './src/navigation/AuthStack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [token, SetToken] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        await AsyncStorage.setItem('token', 'Axita123');
        SetToken('Axita123');
      },
      signOut: async () => {
        SetToken(null);
        await AsyncStorage.removeItem('token');
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    handleGetToken();
  }, []);

  const handleGetToken = async () => {
    const tokenAsyn = await AsyncStorage.getItem('token');
    console.log('test....', tokenAsyn);
    SetToken(tokenAsyn);
  };
  return (
    <>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require('./src/assets/rn.png')}
        backgroundColor={'rgba(9,26,47, 0.5)'}
        logoHeight={150}
        logoWidth={150}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            {token != null ? <AppStack /> : <AuthStack />}
          </NavigationContainer>
        </AuthContext.Provider>
      </AnimatedSplash>
    </>
  );
};

export default App;
