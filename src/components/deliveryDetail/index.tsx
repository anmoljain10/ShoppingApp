import {View, Text} from 'react-native';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const DeliveryDetail = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.deliveryTo}>Delivery To</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.deliveryAdd}>Green Way 3000, Sydney </Text>
          <FontAwesomeIcon
            icon={faChevronDown}
            color={'white'}
            size={12}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </View>
      </View>
      <View>
        <Text style={styles.deliveryTo}>Within</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.deliveryAdd}>1 hour </Text>
          <FontAwesomeIcon
            icon={faChevronDown}
            color="white"
            size={10}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default DeliveryDetail;
