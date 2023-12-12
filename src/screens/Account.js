import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#6E77F6',
          height: '25%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')}
            style={{
              width: 35,
              height: 35,
              marginTop: 15,
              tintColor: 'white',
              marginLeft: 2,
            }}
          />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              width: '91%',
              height: '55%',
              backgroundColor: 'black',
              marginVertical: 15,
              marginHorizontal: 20,
              borderRadius: 10,
              elevation: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/account.png')}
              style={{width: 40, height: 40, tintColor: '#6E77F6'}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
                marginTop: 2,
              }}>
              Login or Register
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
