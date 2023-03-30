import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import NiharColor from '../components/NiharColor';
import NiharSizes from '../components/NiharSizes';
import Icon from 'react-native-vector-icons/FontAwesome';
import NiharReviews from '../components/NiharReview';
import {Rating, AirbnbRating} from 'react-native-ratings';
import NiharAddToCard from '../components/NiharAddToCard';
import ImageSlider from '../components/ImageSlider';
const Nihar = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View>
          <ImageSlider />
        </View>

        <View style={styles.subCon}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <AirbnbRating count={5} size={10} showRating={false} />
              <Text style={{left: 10}}>8 reviews</Text>
            </View>
            <Text style={{color: 'green'}}>In Stoke</Text>
          </View>
          <Text></Text>
          <Text style={{fontFamily: 'Roboto-medium', fontSize: 19}}>
            Astylish Women Open Front Long Sleeve Chunky Knit Cardigan.
          </Text>
          <Text style={{fontFamily: 'Roboto-Bold', fontSize: 25}}>$89.99</Text>
        </View>
        <View sty={{bottom: 2}}>
          <NiharColor />
          <NiharSizes />
          <View style={styles.subCon}>
            <Text
              style={{fontFamily: 'Roboto-Bold', color: 'black', fontSize: 20}}>
              Product details
            </Text>
            <Text>
              Women's Casual V-Neck Pullover Sweater Long Sleeved Sweater Top
              with High Low Hemline is going to be the newest staple in your
              wardrobe! Living up to its namesake, this sweater is unbelievably
              soft, li...
            </Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Icon name="chevron-down" size={15} />
            </TouchableOpacity>
          </View>
        </View>
        <NiharReviews />
        <View style={{bottom: 0}}>
          <NiharAddToCard />
        </View>
      </View>
    </ScrollView>
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
export default Nihar;
