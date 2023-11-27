import {StyleSheet} from 'react-native';

const tabStyles = StyleSheet.create({
  tabbarWrapper: {
    height: 70,
    borderRadius: 40,
    position: 'absolute',
    zIndex: 10,
    bottom: 5,
    width: '100%',
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  iconWrapper: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  justifyCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default tabStyles;
