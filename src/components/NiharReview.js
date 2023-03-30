import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Rating, AirbnbRating} from 'react-native-ratings';

const NiharReviews = () => {
  return (
    <View style={styles.subCon}>
      <View style={styles.row}>
        <Text style={{fontFamily: 'Roboto-Bold', color: 'black', fontSize: 20}}>
          Reviews
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', top: 5}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              color: 'black',
              fontSize: 14,
              left: -5,
            }}>
            See All
          </Text>
          <Icon name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: 'black',
          fontSize: 17,
          top: 10,
        }}>
        Olha Chabanova
      </Text>
      <Text></Text>
      <View style={styles.row}>
        <AirbnbRating count={5} size={10} showRating={false} />
        <Text>June 5,2021</Text>
      </View>
      <Text style={{top: 10}}>
        I’m old (rolling through my 50’s). But, this is my daughter in law’s
        favorite color right now.❤️ So I wear it whenever we hang out! She’s my
        fashion consultant who keeps me on trend🤣
      </Text>
      <Text></Text>
      <Text style={{marginTop: 4}}>835 people found this helpful</Text>
      <Text></Text>
      <View style={styles.row}>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: 'black',
            fontSize: 17,
            borderBottomWidth: 0.5,
            width: 80,
          }}>
          Comment
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{right: 6}}>Helpful</Text>
          <Icon name="thumbs-up" size={18} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subCon: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    borderRadius: 15,
    height: 100,
    width: 100,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
});
export default NiharReviews;
