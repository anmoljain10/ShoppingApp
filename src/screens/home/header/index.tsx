import {View, Text} from 'react-native';
import {useState} from 'react';
import styles from '../style';
import CartIcon from '../../../components/cartIcon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DeliveryDetail from '../../../components/deliveryDetail';
import {faShoppingBasket, faSearch} from '@fortawesome/free-solid-svg-icons';
import TextInputField from '../../../components/textInput';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.homeHeading}>
      <View style={styles.userDetails}>
        <Text style={styles.name}>Hey, Rahul</Text>

        <CartIcon />
      </View>
      <TextInputField
        placeholder={'Search Products or Store'}
        icon={faSearch}
        onChangeText={setSearchText}
        value={searchText}
      />
      <DeliveryDetail />
    </View>
  );
};

export default Header;
