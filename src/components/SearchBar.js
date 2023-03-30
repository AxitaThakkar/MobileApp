import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.inputView}>
      {/* <Image style={styles.image1} source={require('../assets/duolingo.png')} /> */}

      <TextInput
        style={styles.TextInput}
        placeholder="Search for a location"
        placeholderTextColor="white"
        //   onChangeText={() => setPassword(password)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#091a2f',
  },

  image: {
    height: 20,
    width: 20,
    top: 55,
  },
  image1: {
    height: 20,
    width: 20,
    display: 'flex',
  },
  text: {
    left: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 400,
    // textAlign: 'center',
  },
  text1: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 400,
  },
  inputView: {
    top: 30,
    backgroundColor: '#3a4859',
    borderRadius: 10,
    // height: 45,
    // width: 320,
  },
  TextInput: {
    color: 'white',
    // height: 50,
    marginLeft: 20,
  },
});
export default SearchBar;
