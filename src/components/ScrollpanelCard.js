import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ScrollpanelCard = () => {
  return (
    <View style={styles.item}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.Text}>I am less happy{'\n'} than before.</Text>
          <Text>
            <Image style={styles.image} source={require('../assets/map.png')} />
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#091a2f',
    height: 130,
    width: 300,
    padding: 18,
    textAlign: 'center',
    borderRadius: 10,
  },
  item: {
    marginHorizontal: 4,
  },
  Text: {
    top: 15,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ScrollpanelCard;
