import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextComponent,
  Dimensions,
} from 'react-native';
import CardComponent from '../components/Card';
import RecentCard from '../components/RecentCard';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import OnBoard from './OnBoard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarProfile from '../components/Avatar';
// import Avatar from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Drawer = createDrawerNavigator();

const DashBoard = ({navigation}) => {
  const [token, SetToken] = useState(null);
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const lisingDataOpen = () => {
    navigation.navigate('ListItem');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* <View style={{backgroundColor: '#FFF', height: 50}} /> */}
        <View style={styles.card1}>
          <TouchableOpacity onPress={toggleDrawer} style={styles.image}>
            <Image source={require('../assets/menu.png')} />
          </TouchableOpacity>

          <Text style={styles.text} onPress={lisingDataOpen}>
            duolingo
          </Text>
          <Image
            source={require('../assets/notification.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.card1}>
          <Text style={styles.text1}>Helloo..duolingo!</Text>
          <AvatarProfile />
        </View>
        <Text style={{color: '#b1c0d8', bottom: 20}}>Send To.....</Text>
        <View style={{marginBottom: 20}}>
          <SearchBar />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f7f7fa',
          height: windowHeight,
          marginTop: 30,
        }}>
        <View style={styles.subContainer}>
          <View style={styles.card}>
            <CardComponent name="Traking" />
            <CardComponent name="Rates" />
            <CardComponent name="Nearby" />
          </View>
          <View style={{marginTop: 30, marginLeft: -20}}>
            <Text>
              <Slider />
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <RecentCard />
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
    marginBottom: 50,
  },
  image: {
    height: 20,
    width: 20,
    top: 30,
  },

  text: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  text1: {
    bottom: 20,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -70,
  },
  card1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default DashBoard;
