import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {get} from '../api/Api';
import {getData} from '../api/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account({navigation}) {
  const [userData, setUserData] = useState({});

  const [token, setToken] = useState('');

  useEffect(() => {
    // Call the API when the component mounts
    getToken();
    getUserData();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('Token');
    setToken(token);
  };

  const getUserData = async () => {
    try {
      // Make an API call using the get function
      const result = await get('/getuser');
      setUserData(result);
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  const logout = async () => {
    try {
      // Clear the user token from AsyncStorage or any other relevant authentication information
      await AsyncStorage.removeItem('Token');
      ToastAndroid.showWithGravity(
        'Successfully Logout',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('Login');

      // Navigate to the login or onboarding screen
      // You can use navigation.navigate('Login') or any other navigation logic here
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLogout = () => {
    // Show a confirmation alert
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Call the logout function when the user clicks "Yes"
            logout();
          },
          style: 'destructive', // This makes the text color red (can be adjusted)
        },
      ],
      {cancelable: false},
    );
  };

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

        {token ? (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('UpdateProfile')}>
            <View
              style={{
                width: '91%',
                height: '55%',
                backgroundColor: 'black',
                marginVertical: 18,
                marginHorizontal: 20,
                borderRadius: 10,
                elevation: 4,
                flexDirection: 'row',
                paddingHorizontal: 10,
              }}>
              <Image
                source={require('../../assets/images/account.png')}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: '#6E77F6',
                  marginTop: 30,
                  paddingHorizontal: 10,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '500',
                    marginTop: 32,
                    paddingHorizontal: 8,
                  }}>
                  Abdur rahim
                </Text>
                <Text
                  style={{
                    //    color: 'white',
                    fontSize: 10,
                    color: 'grey',
                    fontWeight: '500',
                    //  marginTop: 35,
                    paddingHorizontal: 8,
                  }}>
                  Edit Your Profile
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
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
        )}
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
        {/* <Text
          onPress={() => navigation.navigate('Blog')}
          style={styles.wrapperText}>
          Blog
        </Text> */}

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
        <Text onPress={() => handleLogout()} style={styles.wrapperText}>
          Logout
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
