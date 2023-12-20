import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton';

const TransActionHistory = ({navigation}) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Call the API when the component mounts
    getToken();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('Token');
    setToken(token);
  };

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
          TransActionHistory
        </Text>
      </View>
      {token ? (
        <Text>TransActionHistory</Text>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: '500',
            }}>
            Login or Register
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'white',
              marginTop: 12,
            }}>
            You need to login or register to access
          </Text>
          <Text style={{textAlign: 'center', fontSize: 12, color: 'white'}}>
            your Transaction history
          </Text>
          <CustomButton
            onPress={() => navigation.navigate('Login')}
            title="LOG IN / REGISTER"
            color="#6E77F6"
            width={'90%'}
            height={48}
            marginTop={40} // Add marginTop here
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default TransActionHistory;
