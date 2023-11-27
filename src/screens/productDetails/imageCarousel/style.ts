import {StyleSheet} from 'react-native';
import {theme, typography} from '../../../utils/theme';

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 2,
  },
  heartWrapper: {
    height: 30,
    width: 30,
    backgroundColor: theme.light,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
