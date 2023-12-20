import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

import {post, del, put, get} from '../api/Api';

export default function Signup({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = country => {
    setSelectedCountry(country);
  };

  const callSignUpAction = async () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      phoneNo.trim() === '' ||
      country.trim() === ''
    ) {
      // If any field is empty, show an alert
      ToastAndroid.showWithGravity(
        'Please fill in all the fields',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      const params = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNo,
        country: country,
      };
      await handlePostRequest(params);
    }
  };

  const handlePostRequest = params => {
    // Example of POST request

    post('/register', params)
      .then(result => {
        ToastAndroid.showWithGravity(
          'Successfully Registered',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wrapperHeadingText}>Let’s Register Account</Text>

      <View style={{marginTop: 18}}>
        <CustomTextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Phone No"
          value={phoneNo}
          onChangeText={text => setPhoneNo(text)}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Country"
          value={country}
          onChangeText={text => setCountry(text)}
          style={styles.textInput}
        />

        <CustomButton
          onPress={() => callSignUpAction()}
          title="Sign Up"
          color="#6E77F6"
          width={'100%'}
          height={48}
          marginTop={20} // Add marginTop here
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 2,
          }}>
          <Text style={{marginTop: 15, fontSize: 16, color: 'white'}}>
            Already have an account?
          </Text>
          <Text
            onPress={() => navigation.push('Login')}
            style={{
              marginTop: 15,
              fontSize: 16,
              color: '#6E77F6',
              marginLeft: 4,
            }}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  wrapperHeadingText: {
    marginTop: 30,

    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  wrapperText: {
    color: '#2E2A2A',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 5,
  },
  textInput: {
    width: '100%',
    marginTop: 10,
    height: 48, // Set the width as needed
    marginBottom: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
