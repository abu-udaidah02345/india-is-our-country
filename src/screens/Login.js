import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.wrapperHeadingText}>Let’s sign you in</Text>
      {/* <Text style={styles.wrapperText}>Welcome Back,</Text>
      <Text style={styles.wrapperText}>You have been missed,</Text> */}

      <View style={{marginTop: 18}}>
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
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{color: '#2C2929', fontSize: 14, fontWeight: '500'}}>
            forget password?
          </Text>
        </View>

        <CustomButton
          title="Sign In"
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
            Don't have an account?
          </Text>
          <Text
            onPress={() => navigation.push('Signup')}
            style={{
              marginTop: 15,
              fontSize: 16,
              color: '#6E77F6',
              marginLeft: 4,
            }}>
            Register Now
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