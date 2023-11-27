import {StyleSheet} from 'react-native';
import {theme, typography} from '../../../utils/theme';

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  price: {
    color: theme.blue,
    marginRight: 10,
    fontSize: typography.body.regular,
    fontFamily: 'Manrope-Regular',
  },

  discountText: {
    color: 'white',
    fontSize: typography.label.regular,
    fontFamily: 'Manrope-Regular',
  },
  discountPill: {
    backgroundColor: theme.blue,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  detailsHeading: {
    fontSize: typography.body.regular,
    color: '#1E222B',
    marginTop: 30,
    fontFamily: 'Manrope-Regular',
  },
  productDet: {
    fontSize: typography.body.regular,
    color: '#8891A5',
    marginTop: 5,
    fontFamily: 'Manrope-Regular',
  },
});

export default styles;
