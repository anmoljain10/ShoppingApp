import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.blue,
    marginTop: 30,
  },
  deliveryTo: {
    fontSize: 11,
    color: theme.light,
    fontFamily: 'Manrope-Regular',
  },
  deliveryAdd: {
    fontSize: 14,
    color: theme.light,
    fontFamily: 'Manrope-Regular',
  },
});

export default styles;
