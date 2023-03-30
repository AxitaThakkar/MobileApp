import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '3ac68afc-c605-48d3--fbd91aa97f63',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '58694a0f--471f-bd96-145571e29d72',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '586a0f-3da1-471f-bd96',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '58694a0f-3da1-471f-',
    image: require('../assets/girl.jpeg'),
  },
  {
    id: '58694a0f-3da1--bd96',
    image: require('../assets/girl.jpeg'),
  },
];
const NiharColor = () => {
  const [selectedId, setSelectedId] = useState(0);
  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#E7B944' : '';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          fontSize: 15,
          color: '#9B9B9B',
          left: 15,
          bottom: 10,
        }}>
        Colors
      </Text>
      <View style={{bottom: 10}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
});
export default NiharColor;
