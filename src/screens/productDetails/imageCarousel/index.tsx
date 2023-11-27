import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import {theme} from '../../../utils/theme';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faEmptyHeart} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';

const ImageCarousel = ({images, isFav, id, onFavClick}) => {
  console.log(images);
  return (
    <View style={{position: 'relative'}}>
      <Pressable
        onPress={event => {
          event.stopPropagation();
          onFavClick(id);
        }}
        style={styles.heartContainer}>
        <View style={styles.heartWrapper}>
          <FontAwesomeIcon
            icon={isFav ? faHeart : faEmptyHeart}
            color={!isFav ? 'black' : '#FF8181'}
            size={20}
          />
        </View>
      </Pressable>

      <Swiper
        loop={false}
        containerStyle={{height: 250}}
        dot={
          <View
            style={{
              height: 2,
              width: 15,
              backgroundColor: theme.light,
              margin: 4,
            }}></View>
        }
        activeDot={
          <View
            style={{
              height: 2,
              width: 15,
              backgroundColor: theme.lightYellow,
              margin: 4,
            }}></View>
        }
        paginationStyle={{
          marginLeft: 10,
          paddingLeft: 10,
          justifyContent: 'flex-start',
        }}>
        {images.map(image => (
          <View style={{width: '100%', maxHeight: 250}}>
            <Image
              source={{uri: image}}
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageCarousel;
