import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

const styles = StyleSheet.create({
  homeHeading: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: theme.blue,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {color: theme.light, fontFamily: 'Manrope-Regular', fontSize: 22},
});

export default styles;
