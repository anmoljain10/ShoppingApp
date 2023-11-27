import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

const styles = StyleSheet.create({
  summaryContainer: {
    marginHorizontal: 30,
    marginTop: 50,
  },
  checkoutSummary: {
    backgroundColor: theme.light,
    padding: 20,
    borderRadius: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headings: {
    fontFamily: 'Manrope-Light',
    color: '#616A7D',
  },
  values: {
    fontFamily: 'Manrope-SemiBold',
    color: '#1E222B',
  },
});

export default styles;
