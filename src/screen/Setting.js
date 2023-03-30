import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AvatarProfile from '../components/Avatar';
import CardComponent from '../components/Card';
import SettingCard from '../components/SettingCard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Setting = ({navigation}) => {
  const onShop = () => {
    console.log('jhjh');
    navigation.navigate('EditProfile');
  };
  const onBack = () => {
    console.log('aaaaaaaa');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Setting</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onShop}>
              <AvatarProfile />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                left: 20,
              }}>
              <Text style={{color: 'white'}}>Helloo</Text>
              <Text style={{color: 'white', fontFamily: 'Roboto-Bold'}}>
                Axita Thakkar
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Icon name="edit" color="white" size={22} onPress={onShop} />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f7f7fa',
          height: windowHeight,
          marginTop: 10,
        }}>
        <View style={styles.subContainer}>
          <View style={styles.card}>
            <SettingCard iconName="power-off" name="Off Energy" />
            <SettingCard iconName="lock" name="Left Home" />
            <SettingCard iconName="key" name="Come Home" />
          </View>
        </View>
        <View style={{backgroundColor: '#D3D3D3', height: 7}} />

        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>My Home</Text>
            <Icon name="angle-right" size={22} />
          </View>
        </View>
        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>Messages</Text>
            <Icon name="angle-right" size={22} />
          </View>
        </View>
        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>Family Access</Text>
            <Icon name="angle-right" size={22} />
          </View>
        </View>
        <View style={{backgroundColor: '#D3D3D3', height: 7}} />

        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>Chage Password</Text>
            <Icon name="angle-right" size={22} />
          </View>
        </View>
        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>Support</Text>
            <Icon name="angle-right" size={22} />
          </View>
        </View>
        <View style={{backgroundColor: '#D3D3D3', height: 7}} />
        <View style={styles.personalInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={onShop} style={styles.image}>
              <Text style={{fontFamily: 'Roboto-Bold', color: 'red'}}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091a2f',
  },
  subContainer: {
    padding: 20,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
  },

  card: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personalInfo: {
    height: 60,
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
});
export default Setting;
