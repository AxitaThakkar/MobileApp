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
    id: '58694a0f-3da1-471f-bd96',
    title: 'XXS',
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    title: 'XS',
  },
  {
    id: '586a0f-3da1-471f-bd96',
    title: 'S',
  },
  {
    id: '58694a0f-3da1-471f-',
    title: 'M',
  },
  {
    id: '58694a0f-3da1-471f-',
    title: 'L',
  },
  {
    id: '58694a0f-3da1-471f-',
    title: 'XL',
  },
];
const NiharSizes = () => {
  const [selectedId, setSelectedId] = useState(0);
  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#E7B944' : '';
    const color = item.id === selectedId ? 'white' : 'grey';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
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
          top: -12,
        }}>
        Sizes
      </Text>
      <View style={{bottom: 5}}>
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
    height: 50,
    width: 50,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: 'black',
  },
});
export default NiharSizes;
