// HomeScreen.js
import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import styles from './style';
import ProductDetailsHeader from '../../components/productDetailsHeader';
import {get} from 'lodash';
import ImageCarousel from './imageCarousel';
import {useFavProducts} from '../../store/cart/useCartSelector';
import {useDispatch} from 'react-redux';
import {addFav, removeFav} from '../../store/cart/cartSlice';
import PriceDetails from './priceDetails';

const ProductDetails = ({navigation, route}) => {
  const itemData = get(route, 'params.data');
  const title = get(itemData, 'title', '');
  const desc = get(itemData, 'description', '');
  const rating = get(itemData, 'rating', 0);
  const images = get(itemData, 'images', []);
  const price = get(itemData, 'price', 0);
  const thumbnail = get(itemData, 'thumbnail', '');
  const id = get(itemData, 'id', '');
  const discountPer = get(itemData, 'discountPercentage', 0);
  const discount = price * (discountPer / 100);

  const favProducts = useFavProducts();
  const dispatch = useDispatch();

  function toggleFav(productId: string) {
    const isAlreadyFav = favProducts.find(id => id === productId);

    if (!isAlreadyFav || isAlreadyFav === -1) {
      dispatch(addFav(productId));
    } else {
      dispatch(removeFav(productId));
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ProductDetailsHeader title={title} desc={desc} rating={rating} />
        <ImageCarousel
          images={images}
          isFav={favProducts.includes(id)}
          onFavClick={id => toggleFav(id)}
          id={id}
        />
        <PriceDetails
          price={price}
          discount={discount.toFixed(2)}
          details={desc}
          id={id}
          title={title}
          thumbnail={thumbnail}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
