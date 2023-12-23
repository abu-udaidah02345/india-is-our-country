import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useRoute, CommonActions} from '@react-navigation/native';
import {put} from '../../api/Api';

const UpdateProfile = ({navigation}) => {
  const route = useRoute();

  const userData = route.params?.userData;

  console.log(userData, 'userData is there....');

  const [firstName, setFirstName] = useState(userData?.firstName || '');
  const [lastName, setLastName] = useState(userData?.lastName || '');
  const [email, setEmail] = useState(userData?.email || '');

  const [phoneNo, setPhoneNo] = useState(userData?.phoneNumber || '');
  const [country, setCountry] = useState(userData?.country || '');
  const [isSaveButtonEnabled, setSaveButtonEnabled] = useState(false);

  useEffect(() => {
    // Set the initial state based on user data
    setFirstName(userData?.firstName || '');
    setLastName(userData?.lastName || '');
    setEmail(userData?.email || '');
    setPhoneNo(userData?.phoneNumber || '');
    setCountry(userData?.country || '');
  }, [userData]); // Run this effect whenever userData changes

  // useEffect to check whether any field has been updated
  useEffect(() => {
    const isAnyFieldUpdated =
      firstName !== userData.firstName ||
      lastName !== userData.lastName ||
      email !== userData.email ||
      phoneNo !== userData.phoneNumber ||
      country !== userData.country;

    setSaveButtonEnabled(isAnyFieldUpdated);
  }, [firstName, lastName, email, phoneNo, country, userData]);

  const updateProfile = () => {
    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNo,
      country: country,
    };
    put('/update', params)
      .then(result => {
        ToastAndroid.showWithGravity(
          'Update Profile Successfully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.navigate('Account');
      })
      .catch(error => {});
  };

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
        <View style={{paddingHorizontal: 15}}>
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
              onPress={() => updateProfile()}
              title="Save"
              color="#6E77F6"
              width={'100%'}
              height={48}
              marginTop={40}
              disabled={!isSaveButtonEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //  paddingHorizontal: 15,
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
