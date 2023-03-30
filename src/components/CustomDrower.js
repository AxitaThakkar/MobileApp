import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from './AuthContext';

const CustomDrower = props => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#091a2f'}}>
        <ImageBackground
          source={require('../assets/Sliderbanner.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/axita.png')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Axita</Text>
          <Text style={styles.userName}>200 Coins</Text>
        </ImageBackground>
        <View style={styles.drawerList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopColor: '#ccc', borderTopWidth: 1}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignContent: 'center'}}>
            <Icon name="share" size={22} color="#9a98b1" />
            <Text style={{marginLeft: 5}}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignContent: 'center'}}>
            <Icon name="deleteuser" size={22} color="#9a98b1" />
            <Text style={{marginLeft: 5}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  drawerList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
export default CustomDrower;
