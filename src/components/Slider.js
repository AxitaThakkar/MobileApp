// import React from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import CardComponent from './Card';
// import ScrollpanelCard from './ScrollpanelCard';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '5869xzxzxz',
//     title: 'hird Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-1e29d72',
//     title: 'Third It',
//   },
//   {
//     id: 'xzxzxz4a0f-3da1-471f-bd96-145571e29d72',
//     title: 'ThirItem',
//   },
//   {
//     id: '58694a0f-3da1-471f-11e29d72',
//     title: 'Thid Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-11e29d72',
//     title: 'Item',
//   },
//   {
//     id: '58694a01-471f-bd96-145571e29d72',
//     title: 'Third ',
//   },
// ];
// const Item = ({title}) => {
//   return (
//     <View>
//       <Text>{title}</Text>
//     </View>
//   );
// };
// const Slider = () => {
//   const renderItem = ({item}) => <Item title={item.title} />;
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         horizontal
//         contentContainerStyle={styles.innerContainer}
//         showsHorizontalScrollIndicator={true}
//       />
//       {/* <ScrollView
//         horizontal
//         disableIntervalMomentum={true}
//         snapToInterval={windowWidth}
//         showsHorizontalScrollIndicator={true}
//         showsVerticalScrollIndicator={true}>
//         <View>
//           <ScrollpanelCard />
//         </View>
//         <View>
//           <ScrollpanelCard />
//         </View>
//         <View>
//           <ScrollpanelCard />
//         </View>
//         <View>
//           <ScrollpanelCard />
//         </View>
//       </ScrollView> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     // borderWidth: 1,
//     height: '100%',
//     width: '100%',
//     flex: 1,
//     // paddingBottom: normalize(10),
//   },
// });
// export default Slider;

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import ScrollpanelCard from './ScrollpanelCard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'I am less happy than before.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'I am less happy than before.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'I am less happy than before.',
  },
];

const Slider = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ScrollpanelCard />}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },

  title: {
    fontSize: 32,
  },
});

export default Slider;
