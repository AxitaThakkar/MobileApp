import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonFace = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonGoogle}>
        <Icon style={{fontSize: 15, color: 'white'}} name="google">
          <Text style={{color: 'white'}}> Google</Text>
        </Icon>
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity style={styles.ButtonFace}>
        <Icon style={{fontSize: 15, color: 'white'}} name="facebook">
          <Text style={{color: 'white'}}> Facebook</Text>
        </Icon>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ButtonGoogle: {
    width: '45%',
    color: 'white',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a4859',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  ButtonFace: {
    width: '45%',
    color: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a4859',
  },
});
export default ButtonFace;
