// CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({onPress, title, color, width}) => (
  <TouchableOpacity
    style={[styles.buttonContainer, {backgroundColor: color, width}]}
    onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default CustomButton;
