import {StyleSheet} from 'react-native';
import {theme, typography} from '../../utils/theme';

const styles = StyleSheet.create({
  card: {
    maxHeight: 250,
    width: '46%',
    backgroundColor: theme.light,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  price: {
    fontSize: typography.body2.semiBold,
    color: '#1E222B',
    fontFamily: 'Manrope-SemiBold',
  },
  title: {
    fontSize: typography.label.regular,
    color: '#616A7D',
    fontFamily: 'Manrope-Regular',
  },
  cartBtn: {
    height: 24,
    width: 24,
    borderRadius: 30,
    backgroundColor: theme.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartBtnWrapper: {
    position: 'absolute',
    right: 5,
    zIndex: 3,
  },
  plus: {
    fontSize: 12,
    color: theme.light,
  },
});

export default styles;
