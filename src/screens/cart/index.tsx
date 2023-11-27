import {View, ScrollView, Text} from 'react-native';
import CartHeader from './cartHeader';
import {useCartProducts} from '../../store/cart/useCartSelector';
import CartDetails from './cartDetails';
import CartSummary from './cartSummary';
import styles from './style';

const Cart = () => {
  const cartItems = useCartProducts();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CartHeader />
        <CartDetails cartItems={cartItems} />
        <CartSummary cartItems={cartItems} />
        {cartItems.length === 0 && (
          <View style={styles.noItemsView}>
            <Text style={styles.noItemsText}>No Items. Add Items to Cart!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
