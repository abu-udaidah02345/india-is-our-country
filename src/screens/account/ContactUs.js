import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {post} from '../../api/Api';

function ContactUs({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [messege, setMessege] = useState('');

  const callContactus = async () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      country.trim() === '' ||
      messege.trim() === ''
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
        country: country,
        messege: messege,
      };
      await handlePostRequest(params);
    }
  };

  const handlePostRequest = params => {
    // Example of POST request

    post('/messages', params)
      .then(result => {
        ToastAndroid.showWithGravity(
          'Message Received',
          'Thank you for reaching out! Your message has been received. We will get back to you soon.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        navigation.navigate('MenuScreen');
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#232426',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/back.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              marginLeft: 15,
              marginVertical: 14,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            tintColor: 'white',
            marginTop: 20,
            letterSpacing: 1,
            marginLeft: 55,
          }}>
          ContactUs
        </Text>
      </View>
      <View style={{paddingHorizontal: 24, marginTop: 45}}>
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
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Country"
          value={country}
          onChangeText={text => setCountry(text)}
          style={styles.textInput}
        />
        <CustomTextInput
          placeholder="Messege"
          value={messege}
          onChangeText={text => setMessege(text)}
          style={styles.textInput}
          maxLength={25}
          multiLine={true}
        />

        <CustomButton
          title="SEND"
          color="#6E77F6"
          width={'100%'}
          height={48}
          marginTop={20} // Add marginTop here
          onPress={() => callContactus()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginTop: 10,
    height: 48, // Set the width as needed
    marginBottom: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ContactUs;
