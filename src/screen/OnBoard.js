import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoard = ({navigation}) => {
  const [Token, SetToken] = useState();

  const onLogin = () => {
    navigation.navigate('Login');
  };
  // const removeToken = userToken => {
  //   AsyncStorage.removeItem('token');
  //   SetToken(null);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#091a2f"
        translucent={true}
      />
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/splashBg.jpg')}>
        <View style={styles.formCss}>
          <Text style={styles.text}>duolingo</Text>
          <Text style={styles.text1}>
            Learn Languages{'\n'} from Contect you{'\n'} Love
          </Text>
          <View style={styles.border} />
          <Text style={styles.text2}>
            The Fast,Fun and effective{'\n'} way to Learn
          </Text>
          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
              <Text style={styles.login}>Get started for free!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.accButton}>
              <Text style={styles.accText}>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // shadowColor: '#0000FF',
    // shadowOffset: {height: 3, width: 3},
    // shadowOpacity: 10,
    // shadowRadius: 10,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    flex: 1,
    marginTop: 80,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 400,
    textAlign: 'center',
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
  },
  accText: {
    color: 'black',
  },
  text1: {
    fontFamily: 'Roboto-Bold',
    padding: 10,
    display: 'flex',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    bottom: 10,
  },
  text2: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: 50,
    color: '#b1c0d8',
    fontSize: 15,
    textAlign: 'center',
    bottom: 20,
  },
  border: {
    marginLeft: 30,
    borderWidth: 1,
    borderColor: '#4f6990',
    width: 300,
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },

  loginBtn: {
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbb718',
  },
  accButton: {
    marginBottom: 30,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  formCss: {
    backgroundColor: 'rgba(9,26,47, 0.5)',
    height: '100%',
  },
});
export default OnBoard;
