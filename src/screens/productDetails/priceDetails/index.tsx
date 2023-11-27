import {View, Text} from 'react-native';
import styles from './style';
import {theme} from '../../../utils/theme';
import Button from '../../../components/button';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../store/cart/cartSlice';
import {useCartProducts} from '../../../store/cart/useCartSelector';
import {useNavigation} from '@react-navigation/native';

interface PriceDetailsProps {
  price: number;
  details: string;
  discount: number;
  id: number | string;
  thumbnail: string;
  title: string;
}

const PriceDetails = ({
  price,
  details,
  discount,
  id,
  thumbnail,
  title,
}: PriceDetailsProps) => {
  const dispatch = useDispatch();
  const cartProducts = useCartProducts();
  const navigation = useNavigation();

  const isAlreadyInCart = cartProducts.findIndex(product => product.id === id);

  function addProductsToCart() {
    if (isAlreadyInCart === -1) {
      dispatch(addToCart({productId: id, price: price, title, thumbnail}));
    } else {
      navigation.navigate('Cart');
    }
  }

  return (
    <View style={styles.detailsContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.discountPill}>
          <Text style={styles.discountText}>${discount} OFF</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={{width: '45%'}}>
          <Button
            text={isAlreadyInCart === -1 ? 'Add To Cart' : 'Go To Cart'}
            onPress={() => addProductsToCart()}
            theme="outline"
            btnColor={theme.blue}
          />
        </View>
        <View style={{width: '45%'}}>
          <Button text="Buy Now" onPress={() => {}} btnColor={theme.blue} />
        </View>
      </View>
      <Text style={styles.detailsHeading}>Details</Text>
      <Text style={styles.productDet}>{details}</Text>
    </View>
  );
};

export default PriceDetails;
