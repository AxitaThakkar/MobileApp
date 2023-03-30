import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {SvgXml} from 'react-native-svg';
import NiharColor from './NiharColor';
import NiharSizes from './NiharSizes';

const NiharAddToCard = () => {
  const [isShow, SetIsshow] = useState(false);

  return (
    <>
      <View style={styles.subCon}>
        <View style={styles.row}>
          <Icon name="arrow-left" size={22} top={5} />
          <TouchableOpacity
            style={styles.icontouch}
            onPress={() => SetIsshow(!isShow)}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Add to Card
            </Text>
          </TouchableOpacity>
          <Icon name="heart-o" size={22} top={5} />
        </View>
      </View>
      {isShow ? (
        <BottomSheet>
          <View style={{bottom: 15}}>
            <View style={styles.row}>
              <Image
                source={require('../assets/girl.jpeg')}
                style={styles.image}
              />
              <View>
                <Text style={{fontFamily: 'Roboto-medium', fontSize: 14}}>
                  Astylish Women Open{'\n'} Front Long Sleeve {'\n'} Chunky Knit
                  Cardigan
                </Text>
                <Text style={{fontFamily: 'Roboto-Bold', fontSize: 20, top: 2}}>
                  $89.99
                </Text>
              </View>
              <View>
                <Icon name="plus-circle" size={22} />
                <Text style={{textAlign: 'center'}}>1</Text>
                <Icon name="minus-circle" size={22} />
              </View>
            </View>
          </View>
          {/* <View style={{bottom: 15}}>
            <NiharColor />
          </View>
          <View style={{bottom: 20}}>
            <NiharSizes />
          </View> */}
          <Text></Text>
          <View style={{bottom: 10}}>
            <View style={styles.row}>
              <Icon name="arrow-left" size={22} top={5} />
              <TouchableOpacity
                style={styles.icontouch}
                onPress={() => SetIsshow(!isShow)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Add to Card
                </Text>
              </TouchableOpacity>
              <Icon name="heart-o" size={22} top={5} />
            </View>
          </View>
        </BottomSheet>
      ) : (
        ''
      )}
    </>
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
  icontouch: {
    backgroundColor: '#E7B944',
    color: 'white',
    width: '50%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  image1: {
    height: 40,
    width: 40,
  },
});
export default NiharAddToCard;
