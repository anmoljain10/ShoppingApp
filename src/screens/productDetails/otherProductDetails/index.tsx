import {View, Text} from 'react-native';
import styles from '../style';

const OtherProductDetails = ({price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default OtherProductDetails;
