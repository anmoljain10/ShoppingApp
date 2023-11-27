import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {theme} from '../../utils/theme';
import PlaceholderImage from '../../assets/images/placeholder-image-white.png';

const deviceWidth = Dimensions.get('screen').width;

const MyCarousel = () => {
  const data = [
    {title: 'Slide 1', offPrice: 50, orders: 3, background: theme.darkYellow},
    {title: 'Slide 2', offPrice: 50, orders: 2, background: theme.greyLight},
    {title: 'Slide 3', offPrice: 40, orders: 4, background: theme.blue},
  ];

  const renderItem = ({item}) => (
    <View style={[styles.slide, {backgroundColor: item.background}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={PlaceholderImage} style={{height: 70, width: 70}} />
        <View>
          <Text style={styles.text}>Get</Text>
          <Text style={styles.discount}>{item.offPrice}% Off</Text>
          <Text style={styles.orders}>on first 0{item.orders} orders</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{marginTop: 30}}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth / 1.2}
        inactiveSlideScale={1} // Set inactiveSlideScale to 1 to disable scaling
        inactiveSlideOpacity={1} // Set inactiveSlideOpacity to 1 to disable opacity change
        scrollEnabled={true} // Enable scrolling
        snapToAlignment="start" // Snap to the start of each item
        decelerationRate="fast" // Set decelerationRate for a faster swipe
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,

    padding: 30,
    marginRight: 30,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Manrope-Regular',
  },
  discount: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Manrope-Bold',
  },
  orders: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Manrope-Regular',
  },
});

export default MyCarousel;
