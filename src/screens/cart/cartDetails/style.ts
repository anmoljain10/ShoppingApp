import {StyleSheet} from 'react-native';
import {theme, typography} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 60,
  },
  cartItemWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.light,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnailImage: {
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  imageWrapper: {
    marginRight: 20,
  },
  titleText: {
    fontSize: 14,
    color: '#1e2228',
    fontFamily: 'Manrope-Regular',
  },
  priceText: {
    fontSize: typography.body2.regular,
    color: '#1e2228',
    fontFamily: 'Manrope-Regular',
  },
  minusBtn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: theme.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  calcText: {
    fontSize: 20,
    fontFamily: 'Manrope-Regular',
  },
  plusBtn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: theme.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  actionBtns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  det: {
    flexDirection: 'row',
  },
});

export default styles;
