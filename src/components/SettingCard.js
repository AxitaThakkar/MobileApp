import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingCard = props => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log('sss');
    setActive(!active);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handleClick}
        style={{
          backgroundColor: active ? 'red' : 'white',
        }}>
        <View
          style={[styles.card, {backgroundColor: active ? 'red' : 'white'}]}>
          <Icon
            name={props.iconName}
            size={25}
            style={{color: active ? 'white' : 'black'}}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    height: 90,
    width: 90,
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
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 600,
    color: 'black',
  },
});

export default SettingCard;
