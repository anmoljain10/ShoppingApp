import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  cartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backNavBtn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: theme.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontFamily: 'Manrope-Bold',
  },
  desc: {
    fontSize: 20,
  },
});

export default styles;
