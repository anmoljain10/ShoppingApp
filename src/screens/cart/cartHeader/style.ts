import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 60,
  },
  cartView: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  backNavBtn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: theme.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  heading: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
  },
});

export default styles;
