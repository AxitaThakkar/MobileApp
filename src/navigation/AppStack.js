import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from '../screen/OnBoard';
import Login from '../screen/Login';
import DashBoard from '../screen/DashBoard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrower from '../components/CustomDrower';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../screen/ListItem';
import Setting from '../screen/Setting';
import ShopCard from '../screen/ShopCard';
import EditProfile from '../screen/EditProfile';
import FileSelect from '../components/FileSelect';
import Nihar from '../screen/Nihar';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrower {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#091a2f',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
      initialRouteName="DashBoard">
      <Drawer.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          drawerIcon: () => <Icon name="dashboard" size={22} color="#9a98b1" />,
        }}
      />
      <Drawer.Screen
        name="List Item"
        component={ListItem}
        options={{
          drawerIcon: () => <Icon name="list" size={22} color="#9a98b1" />,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: () => <Icon name="cog" size={22} />,
        }}
      />
      <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          drawerIcon: () => <Icon name="user" size={22} />,
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="Nihar"
        component={Nihar}
        options={{
          drawerIcon: () => <Icon name="user" size={22} />,
        }}
      />
      {/* <Drawer.Screen
        name="FileSelect"
        component={FileSelect}
        options={{
          drawerIcon: () => <Icon name="user" size={22} />,
        }}
      /> */}
    </Drawer.Navigator>
  );
};
export default AppStack;
