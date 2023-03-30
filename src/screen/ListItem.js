import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3--fbd91aa97f63',
    title: 'Instagram',
  },
  {
    id: '58694a0f--471f-bd96-145571e29d72',
    title: 'Facebook',
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    title: 'Twitter',
  },
];

const cardData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'The Loch Ness monster is drinking whiskey.',
    date: 'Jan 1,2012',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
  {
    id: '3ac68afc-c605-48d3--fbd91aa97f63',
    title: 'The Loch Ness monster is drinking whiskey',
    date: 'Jan 16,2012',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
  {
    id: '58694a0f--471f-bd96-145571e29d72',
    title: 'The Loch Ness monster is drinking whiskey.',
    date: 'Jan 19,2013',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    title: 'The Loch Ness monster is drinking whiskey. ',
    date: 'Jan 9,2013',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    title: 'The Loch Ness monster is drinking whiskey. ',
    date: 'Jan 9,2013',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
  {
    id: '58694a0f-3da1-471f-bd96',
    title: 'The Loch Ness monster is drinking whiskey. ',
    date: 'Jan 9,2013',
    image: require('../assets/girl.jpeg'),
    seen: '33,333',
    messages: 3000,
    likes: '20k',
  },
];

const ListItem = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(0);

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#091a2f' : '#ffff';
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
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBack}
        style={{
          top: 60,
          flexDirection: 'row',
        }}>
        <Icon name="home" color="black" style={{fontSize: 15}}>
          {'  '}
          <Text>Back</Text>
        </Icon>
      </TouchableOpacity>

      <Text style={styles.text}>Most Recant Post</Text>
      <Text style={styles.text1}>Check update from the platforms</Text>
      <View
        style={{
          marginLeft: -30,
          marginRight: -30,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal
        />
      </View>
      <FlatList
        data={cardData}
        renderItem={({item}) => (
          <CardItem
            title={item.title}
            date={item.date}
            image={item.image}
            seen={item.seen}
            messages={item.messages}
            likes={item.likes}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const CardItem = ({title, date, image, seen, messages, likes}) => (
  <View style={styles.item1}>
    <View style={styles.row}>
      <Image source={image} style={styles.image} />
      <View style={{marginLeft: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text>{date}</Text>
        <View
          style={{
            marginLeft: -25,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <Icon name="eye" color="#091a2f">
            {' '}
            <Text style={{color: 'grey'}}>{seen}</Text>
          </Icon>
          <Icon name="envelope" color="#091a2f">
            {' '}
            <Text style={{color: 'grey'}}>{messages}</Text>
          </Icon>
          <Icon name="thumbs-up" color="#091a2f">
            {' '}
            <Text style={{color: 'grey'}}>{likes}</Text>
          </Icon>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    borderRadius: 15,
    height: 40,
    width: 100,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
  item1: {
    backgroundColor: '#ffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    top: 50,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
  },
  text1: {
    fontFamily: 'Roboto-medium',
    color: 'black',
    fontSize: 15,
    lineHeight: 84,
  },
  card: {
    backgroundColor: '#ffff',
    height: 130,
    width: 300,
    padding: 18,
    textAlign: 'center',
    borderRadius: 10,
  },
  card1: {
    marginTop: 30,
    backgroundColor: '#ffff',
    width: 300,
    padding: 5,
    textAlign: 'center',
    borderRadius: 30,
  },
  image: {
    height: 70,
    width: 50,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: 'black',
  },
});

export default ListItem;
