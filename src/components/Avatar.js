import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const AvatarProfile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 5,
          borderColor: '#5e5891',
          borderRadius: 34,
        }}>
        <Avatar.Image size={60} source={require('../assets/axita.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AvatarProfile;
