import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

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
  return (
    <View style={styles.container}>
      <Text style={styles.wrapperHeadingText}>Let’s Register Account</Text>
      {/* <Text style={styles.wrapperText}>Hello user, you have</Text>
      <Text style={styles.wrapperText}>a great full journey</Text> */}

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
          title="Sign Up"
          color="#6E77F6"
          width={'100%'}
          height={48}
          marginTop={40} // Add marginTop here
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{marginTop: 15, fontSize: 16, color: '#555353'}}>
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
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  wrapperHeadingText: {
    marginTop: 30,

    color: '#2E2A2A',
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
  },
});