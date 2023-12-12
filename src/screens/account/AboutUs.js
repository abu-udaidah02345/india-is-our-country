import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#232426',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          About
        </Text>
      </View>
      <Text style={{color: 'white'}}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default AboutUs;
