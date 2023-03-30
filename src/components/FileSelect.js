import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'react-native-simple-bottom-sheet';

const FileSelect = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [gallaryPhoto, setGallaryPhoto] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  //   const bottomSheetRef = useRef < BottomSheet > null;
  const [isVisible, setVisible] = useState(false);
  const panelRef = useRef(null);

  const openModal = () => {
    setModalVisible(!isModalVisible);
  };
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
  return (
    <View style={{flex: 1, top: 100}}>
      <Text style={{textAlign: 'center'}}>Select</Text>
      <BottomSheet
        bottomSheetTitle={'Notifications'}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: 'red',
          maxHeight: '20%',
          minHeight: '15%',
        }}
        bottomSheetTitleStyle={{color: 'black'}}
        onRequestClose={() => setVisible(!isVisible)}
        bottomSheetVisible={isVisible}>
        <ScrollView>
          <Text>Hi</Text>
          <Text>I'm, kedar09</Text>
        </ScrollView>
      </BottomSheet>
      {/* <Modal isVisible={isModalVisible} style={styles.modalContent}>
        <View
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            top: 20,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={openCamera}
            style={{
              alignItems: 'center',
            }}>
            <Icon name="camera" size={22} />
            <Text>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openGallary}
            style={{
              alignItems: 'center',
            }}>
            <Icon name="photo" size={22} />

            <Text>Gallery</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
      <TouchableOpacity
        style={{alignItems: 'center', top: 20}}
        onPress={openCamera}>
        <Text>Open camera</Text>
      </TouchableOpacity>
      <Image
        source={{uri: cameraPhoto}}
        style={{height: 200, width: 200, top: 20}}
      />
      <TouchableOpacity
        style={{top: 70, alignItems: 'center'}}
        onPress={openGallary}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
      <Image
        source={{uri: gallaryPhoto}}
        style={{height: 200, width: 200, top: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    top: 600,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
export default FileSelect;

// import React, {useState} from 'react';
// import {
//   Text,
//   Pressable,
//   View,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import BottomSheet from 'react-native-simple-bottom-sheet';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const FileSelect = () => {
//   const [modalVisible, setModalVisible] = useState(true);
//   const [cameraPhoto, setCameraPhoto] = useState();
//   const [gallaryPhoto, setGallaryPhoto] = useState();

//   let options = {
//     saveToPhotos: true,
//     mediaType: 'photo',
//   };
//   const openCamera = async () => {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//     );
//     if (granted == PermissionsAndroid.RESULTS.GRANTED) {
//       const result = await launchCamera(options);
//       setCameraPhoto(result.assets[0].uri);
//     }
//   };

//   const openGallary = async () => {
//     const result = await launchImageLibrary(options);
//     setGallaryPhoto(result.assets[0].uri);
//   };
//   return (
//     <View style={styles.centeredView}>
//       <BottomSheet
//         bottomSheetIconColor="white"
//         bottomSheetStyle={{
//           backgroundColor: 'white',
//           maxHeight: '30%',
//           minHeight: '25%',
//         }}
//         bottomSheetVisible={!modalVisible}>
//         <ScrollView style={{top: -20}}>
//           <TouchableOpacity
//             onPress={openCamera}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderBottomWidth: 0.5,
//               height: 50,
//               width: '100%',
//             }}>
//             <Text>Camera</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={openGallary}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderBottomWidth: 0.5,
//               height: 50,
//               width: '100%',
//             }}>
//             <Text>Gallery</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={openGallary}
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: 50,
//               width: '100%',
//               borderBottomWidth: 0.8,
//             }}>
//             <Text>Remove Profile Photo</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#3E92CC',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default FileSelect;
