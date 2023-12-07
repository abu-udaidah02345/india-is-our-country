// CustomTextInput.js
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#444141',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default CustomTextInput;