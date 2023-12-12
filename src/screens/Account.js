import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#6E77F6',
          height: '20%',
        }}>
        <View
          style={{
            width: '100%',
            height: 20,
          }}></View>
      </View>

      <View
        style={{
          paddingHorizontal: 18,
        }}>
        <Text style={styles.wrapperText}>Donate</Text>
        <Text
          onPress={() => navigation.navigate('TransActionHistory')}
          style={styles.wrapperText}>
          Transaction History
        </Text>
        <Text
          onPress={() => navigation.navigate('Notification')}
          style={styles.wrapperText}>
          Notifications
        </Text>
        <Text
          onPress={() => navigation.navigate('Blog')}
          style={styles.wrapperText}>
          Blog
        </Text>

        <Text
          onPress={() => navigation.navigate('ContactUs')}
          style={styles.wrapperText}>
          Contact Us
        </Text>
        <Text
          onPress={() => navigation.navigate('AboutUs')}
          style={styles.wrapperText}>
          About
        </Text>
        <Text
          onPress={() => navigation.navigate('Settings')}
          style={styles.wrapperText}>
          Settings
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapperText: {
    color: 'white',
    fontSize: 18,
    marginTop: 45,
    fontWeight: '500',
  },
});
