// ReusableTextInput.js

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';

const TextInputField = ({icon, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} size={18} color="white" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={'#8891A5'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputField;
