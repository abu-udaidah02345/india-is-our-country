// CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({onPress, title, color, width, height, marginTop}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {backgroundColor: color, width, height, marginTop},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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
    fontWeight: 'bold',
  },
});

export default CustomButton;
