import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({
  value,
  placeholder,
  onChangeText,
  defaultValue,
  securityPassword,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeHolder}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        secureTextEntry={securityPassword}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;
