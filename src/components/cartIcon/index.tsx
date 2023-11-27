import {View, Text, TouchableOpacity} from 'react-native';
import {useAllCartItemsQty} from '../../store/cart/useCartSelector';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const CartIcon = ({bagColor = 'white'}) => {
  const cartQty = useAllCartItemsQty();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <View style={{position: 'relative'}}>
        {cartQty > 0 && (
          <View style={{position: 'absolute', top: -10, right: -14}}>
            <View
              style={{
                backgroundColor: 'orange',
                height: 24,
                width: 24,
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', fontSize: 14}}>{cartQty}</Text>
            </View>
          </View>
        )}
        <FontAwesomeIcon icon={faShoppingBag} color={bagColor} size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
