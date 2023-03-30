import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const CardComponent = props => {
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../assets/map.png')} />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  card: {
    backgroundColor: '#FFF',
    height: 100,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  text: {
    marginTop: 10,
    fontWeight: 600,
    color: 'black',
  },
});

export default CardComponent;
