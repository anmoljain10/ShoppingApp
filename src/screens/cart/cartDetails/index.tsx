import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../../store/cart/cartSlice';

const CartDetails = ({cartItems = []}) => {
  const dispatch = useDispatch();

  const CartItem = ({item}) => {
    function addProductsToCart() {
      dispatch(
        addToCart({
          productId: item.id,
          price: item.price,
          title: item.title,
          thumbnail: item.thumbnail,
        }),
      );
    }

    function removeProductFromCart() {
      dispatch(removeFromCart(item.id));
    }

    return (
      <View style={styles.cartItemWrapper}>
        <View style={styles.det}>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: item.thumbnail}}
              style={styles.thumbnailImage}></Image>
          </View>
          <View>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>

        <View style={styles.actionBtns}>
          <TouchableOpacity onPress={() => removeProductFromCart()}>
            <View style={styles.minusBtn}>
              <Text style={styles.calcText}>-</Text>
            </View>
          </TouchableOpacity>
          <Text>{item.qty}</Text>
          <TouchableOpacity onPress={() => addProductsToCart()}>
            <View style={styles.plusBtn}>
              <Text style={styles.calcText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.map(item => (
        <CartItem item={item} />
      ))}
    </View>
  );
};

export default CartDetails;
