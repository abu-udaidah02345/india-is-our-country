import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notification = () => {
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
          Notification
        </Text>
      </View>
      <Text>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default Notification;
