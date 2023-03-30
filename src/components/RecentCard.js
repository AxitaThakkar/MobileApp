import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const RecentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.reccent}>
        <Text style={styles.reccentText}>Recenetly Rates</Text>
        <Text style={styles.reccentText}>See All</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require('../assets/duolingo-logo.png')}
          />
          <Text style={styles.Text}>Duolingo.</Text>
          <Text style={styles.Text1}>Duolingo.</Text>
          <Text style={styles.moreButton}>
            <Icon name="ellipsis-v" size={30} color="#9a98b1" />
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: '#ebebf2',
    height: 150,
    // width: 340,
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  Text: {
    bottom: 35,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  moreButton: {
    bottom: 110,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 25,
    textAlign: 'right',
  },
  Text1: {
    bottom: 35,
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 500,
  },
  image: {
    height: 50,
    width: 50,
    top: 20,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  reccent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reccentText: {
    marginBottom: 10,
    fontWeight: 600,
    color: 'black',
  },
});
export default RecentCard;
