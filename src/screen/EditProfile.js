import React, {useState, useRef} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarProfile from '../components/Avatar';
import {Avatar} from 'react-native-paper';
import FileSelect from '../components/FileSelect';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const windowHeight = Dimensions.get('window').height;

const EditProfile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cameraPhoto, setCameraPhoto] = useState();
  const [gallaryPhoto, setGallaryPhoto] = useState();
  const [isShow, SetIsshow] = useState(false);
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  const openGallary = async () => {
    const result = await launchImageLibrary(options);
    setGallaryPhoto(result.assets[0].uri);
  };
  const removePhoto = () => {
    setCameraPhoto('');
    setGallaryPhoto('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 15,
          }}>
          <Icon
            name="angle-left"
            color="white"
            size={22}
            style={{top: 20}}
            onPress={() => {
              navigation.navigate('Setting');
            }}
          />
          <Text style={styles.text}>Edit Profile</Text>
          <Text
            style={{
              color: 'white',
              top: 20,
              fontFamily: 'Roboto-Bold',
            }}>
            Save
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 5,
            borderColor: '#5e5891',
            borderRadius: 55,
            top: 45,
          }}>
          <Avatar.Image
            size={100}
            source={{uri: cameraPhoto || gallaryPhoto}}
            // source={require('../assets/axita.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#091a2f',
            height: 45,
            width: 45,
            borderRadius: 100,
            marginLeft: 90,
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={() => SetIsshow(!isShow)}>
            <View
              style={{
                height: 38,
                width: 38,
                backgroundColor: 'white',
                borderRadius: 100,
                marginTop: 3,
                opacity: 0.7,
                alignSelf: 'center',
              }}>
              <Icon
                name="camera"
                color="black"
                size={17}
                style={{borderRadius: 100, padding: 10}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f7f7fa',
          height: windowHeight,
          marginTop: 10,
        }}>
        <View style={styles.subContainer}>
          <View style={styles.inputView}>
            <Text>Usename</Text>
            <TextInput
              value="Axita Thakkar"
              label="Username"
              mode="outlined"
              placeholder="Enter Username"
              style={styles.TextInput}
            />
            <Text></Text>
            <Text>Email</Text>
            <TextInput
              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
              style={styles.TextInput}
              value={'axita@coindelta.io'}
            />
            <Text></Text>
            <Text>Password</Text>
            <TextInput
              value={'axita123'}
              style={styles.TextInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
            <Text></Text>
            <Text>Contact No:</Text>
            <TextInput
              value="1234567890"
              style={styles.TextInput}
              placeholder="ContactNo"
            />
            <Text></Text>
            <Text>Gender:</Text>
            <TextInput
              value="male"
              style={styles.TextInput}
              placeholder="Gender"
            />
          </View>
        </View>
      </View>
      {isShow ? (
        <BottomSheet>
          <TouchableOpacity
            onPress={openCamera}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 0.5,
              height: 50,
              width: '100%',
            }}>
            <Text>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openGallary}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 0.5,
              height: 50,
              width: '100%',
            }}>
            <Text>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={removePhoto}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: '100%',
              // borderBottomWidth: 0.8,
            }}>
            <Text>Remove Profile Photo</Text>
          </TouchableOpacity>
        </BottomSheet>
      ) : (
        ''
      )}
    </View>
  );
};
export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091a2f',
  },
  subContainer: {
    padding: 20,
  },
  subContainer1: {
    padding: 20,
    height: 240,
  },
  text: {
    top: 10,
    // textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    lineHeight: 40,
    fontWeight: 'bold',
  },

  card: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personalInfo: {
    height: 60,
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  TextInput: {
    color: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
