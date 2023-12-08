import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Video() {
  return (
    <View style={styles.container}>
      <Text>Video</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
