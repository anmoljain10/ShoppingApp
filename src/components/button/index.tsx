import {TouchableOpacity, View, Text} from 'react-native';
import styles from './style';
import {theme} from '../../utils/theme';

const Button = ({
  onPress,
  theme = 'primary',
  text = 'Button',
  btnColor = theme.blue,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.btnStyle,
          theme === 'outline'
            ? {backgroundColor: 'white', borderWidth: 1, borderColor: btnColor}
            : {backgroundColor: btnColor},
        ]}>
        <Text
          style={[
            styles.btnText,
            theme === 'outline' ? {color: btnColor} : {color: 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
