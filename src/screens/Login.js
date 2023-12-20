import React, {useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {storeData, getData, removeData} from '../api/AsyncStorage';
import {post} from '../api/Api';
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const callSigninAction = async () => {
    if (email.trim() === '' || password.trim() === '') {
      // If any field is empty, show an alert
      ToastAndroid.showWithGravity(
        'Please fill in all the fields',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      const params = {
        email: email,
        password: password,
      };
      await signIn(params);
    }
  };

  const signIn = async params => {
    post('/login', params)
      .then(result => {
        ToastAndroid.showWithGravity(
          'Successfully Login',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        storeData('Token', result.token);
        navigation.navigate('MenuScreen');
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wrapperHeadingText}>Let’s sign you in</Text>

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
          <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
            forget password?
          </Text>
        </View>

        <CustomButton
          title="Sign In"
          color="#6E77F6"
          width={'100%'}
          height={48}
          marginTop={20} // Add marginTop here
          onPress={() => callSigninAction()}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{marginTop: 5, fontSize: 16, color: 'white'}}>
            Don't have an account?
          </Text>
          <Text
            onPress={() => navigation.push('Signup')}
            style={{
              marginTop: 5,

              fontSize: 16,
              color: '#6E77F6',
              marginLeft: 4,
            }}>
            Register Now
          </Text>
        </View>
      </View>
      <Text
        onPress={() => navigation.navigate('MenuScreen')}
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: 'white',
          fontWeight: '500',
          marginTop: 45,
          //  borderWidth: 1,
          // borderColor: '#6E77F6',
          // textDecorationColor: '#6E77F6',
          // textDecorationLine: 'underline',
        }}>
        Enter as a guest
      </Text>
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
