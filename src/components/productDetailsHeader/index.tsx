import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import CartIcon from '../cartIcon';

const ProductDetailsHeader = ({title, desc, rating}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cartView}>
        <Pressable
          style={styles.backNavBtn}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Pressable>
        <CartIcon bagColor="black" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
          startingValue={rating}
          style={{width: '30%', marginVertical: 20}}
        />
      </View>
    </View>
  );
};

export default ProductDetailsHeader;
