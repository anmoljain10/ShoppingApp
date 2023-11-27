import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: theme.darkBlue,
    color: theme.light,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: theme.light,
    fontFamily: 'Manrope-Regular',
  },
});

export default styles;
