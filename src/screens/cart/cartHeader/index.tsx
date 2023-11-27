import {View, Pressable, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import styles from './style';
import {useAllCartItemsQty} from '../../../store/cart/useCartSelector';
import {useNavigation} from '@react-navigation/native';

const CartHeader = () => {
  const qty = useAllCartItemsQty();
  const qtyInBrackets = `(${qty})`;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cartView}>
        <Pressable
          style={styles.backNavBtn}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Pressable>
        <Text style={styles.heading}>Shopping Cart {qtyInBrackets}</Text>
      </View>
    </View>
  );
};

export default CartHeader;
