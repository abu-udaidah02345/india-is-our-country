// CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({
  onPress,
  title,
  color,
  width,
  height,
  marginTop,
  disabled,
}) => {
  // Define the styles for the button based on its disabled/enabled status
  const buttonStyles = disabled
    ? [styles.button, {backgroundColor: 'gray'}] // Change the color for disabled state
    : [styles.button, {backgroundColor: color}];
  return (
    <TouchableOpacity
      style={[
        buttonStyles,
        styles.buttonContainer,
        {backgroundColor: color, width, height, marginTop},
      ]}
      disabled={disabled}
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
