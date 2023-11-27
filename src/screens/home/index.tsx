// HomeScreen.js
import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, ActivityIndicator} from 'react-native';
import TextInputField from '../../components/textInput';
import {faSearch, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DeliveryDetail from '../../components/deliveryDetail';
import AdCarousel from '../../components/adCarousel';
import ItemsList from '../../components/itemsList';
import {getAllProducts} from '../../services/getProducts';
import Header from './header';
import {Product} from '../../utils/types';

const HomeScreen = ({navigation}) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [skipIndex, setSkipIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    if (totalProducts > allProducts.length || totalProducts === 0) {
      setIsLoading(true);
      const {products, total}: {products: Array<Product>; total: number} =
        await getAllProducts({
          limit: 20,
          skip: skipIndex,
        });
      if (products.length) {
        setAllProducts([...allProducts, ...products]);
      }
      if (total !== totalProducts) {
        setTotalProducts(total);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skipIndex]);

  const onScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;

    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      setSkipIndex(skipIndex => skipIndex + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        scrollEnabled={true}
        onScroll={onScroll}
        scrollEventThrottle={400}>
        <View style={{flex: 1}}>
          <Header />
          <AdCarousel />
          <ItemsList data={allProducts} />
          {isLoading && (
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
