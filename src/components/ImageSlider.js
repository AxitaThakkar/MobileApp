import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const ImageSlider = () => {
  const [images, setImages] = React.useState([
    require('../assets/girl.jpeg'),
    require('../assets/hello.gif'),
    require('../assets/Axita.jpeg'),
  ]);

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        sliderBoxHeight={300}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
        ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        dotStyle={{
          width: 5,
          height: 4,
          borderRadius: 15,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
        }}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: '10%',

    alignContent: 'center',
  },
});

export default ImageSlider;
