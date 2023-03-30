import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {StatusBar, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const ShopCard = () => (
  <View style={styles.container}>
    <Card>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    </Card>
    <Card.Actions>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'white',
          borderRadius: 100,
          marginTop: -30,
        }}>
        <Icon
          name="home"
          color="black"
          size={20}
          style={{borderRadius: 100, padding: 10}}
        />
      </View>
    </Card.Actions>
  </View>
);
const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginTop: '10%',

    alignContent: 'center',
  },
});

export default ShopCard;
