import {View, Text} from 'react-native';
import styles from './style';
import {useMemo} from 'react';
import Button from '../../../components/button';
import {theme} from '../../../utils/theme';
import {CartItemDetail} from '../../../store/cart/cartSlice';

const CartSummary = ({cartItems}: {cartItems: Array<CartItemDetail>}) => {
  const subTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
  }, [cartItems]);
  const deliveryCharge = 2.0;
  const total = subTotal + deliveryCharge;

  return (
    <View style={styles.summaryContainer}>
      {subTotal > 0 && (
        <View style={styles.checkoutSummary}>
          <View style={styles.flexRow}>
            <Text style={styles.headings}>Subtotal</Text>
            <Text style={styles.values}>${subTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.headings}>Delivery</Text>
            <Text style={styles.values}>${deliveryCharge.toFixed(2)}</Text>
          </View>
          <View style={[styles.flexRow, {marginBottom: 50}]}>
            <Text style={styles.headings}>Total</Text>
            <Text style={styles.values}>${total.toFixed(2)}</Text>
          </View>
          <Button
            text="Proceed To checkout"
            btnColor={theme.blue}
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
};

export default CartSummary;
