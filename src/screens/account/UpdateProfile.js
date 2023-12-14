import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const UpdateProfile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <View style={styles.container}>
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
          Update Profile
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.wrapperHeadingText}>Personal Information</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  wrapperHeadingText: {
    marginTop: 30,

    color: 'white',
    fontSize: 26,
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
export default UpdateProfile;
