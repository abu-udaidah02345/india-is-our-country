import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TextInput,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slider from './Slider';
import CustomButton from '../components/CustomButton';
import BottomSlider from './BottomSlider';
import {get} from '../api/Api';

const MenuScreen = ({navigation}) => {
  const [dashboardData, setDashBoardData] = useState([]);
  const [BottomdashboardData, setBottomDashboardData] = useState([]);

  const data = [
    {key: '1', image: require('../../assets/images/save.png')},
    {key: '2', image: require('../../assets/images/save.png')},
    // Add more items as needed
  ];

  const bottomData = [
    {key: '1', description: 'HI THERE, Assalamu alaikum'},
    {key: '2', description: 'Hi THERE, means what'},
    // Add more items as needed
  ];

  useEffect(() => {
    getDashBoardData();
    getBottomDashBoardData();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    // Clean up the event listener when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    // Exit the app when the back button is pressed
    BackHandler.exitApp();
    return true; // Returning true prevents the default behavior (going back)
  };
  const getDashBoardData = async () => {
    try {
      // Make an API call using the get function
      const result = await get('/menuItems');
      setDashBoardData(result);
      console.log(result, 'resul is there....');
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  const getBottomDashBoardData = async () => {
    try {
      // Make an API call using the get function
      const result = await get('/get-content');
      setBottomDashboardData(result);
      console.log(result, 'resul is there....');
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/images/handshake.png')}
              style={{
                tintColor: '#6E77F6',
                width: 25,
                height: 22,
                marginTop: 15,
                //marginLeft: 25,
                // marginRight: 55,
              }}
            />

            <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../../assets/images/notification.png')}
                  style={{
                    tintColor: '#6E77F6',
                    width: 25,
                    height: 22,
                    marginTop: 15,
                    left: 120,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Image
                source={require('../../assets/images/account.png')}
                style={{
                  tintColor: '#6E77F6',
                  width: 25,
                  height: 22,
                  marginTop: 15,
                  marginLeft: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Slider data={dashboardData} />
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '800',
                paddingHorizontal: 18,
                marginTop: 25,
                letterSpacing: 1,
              }}>
              Understand Our Process
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 24,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../assets/images/you.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 30,
                    backgroundColor: 'black',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: 14,
                    fontWeight: 'bold',
                  }}>
                  WE
                </Text>
                <Text style={styles.wrapperSmallText}>Identify eligible</Text>
                <Text style={styles.wrapperSmallText1}>beneficiaries</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../assets/images/you.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 30,
                    backgroundColor: 'black',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: 14,
                    fontWeight: 'bold',
                  }}>
                  YOU
                </Text>
                <Text style={styles.wrapperSmallText}>Dedicate Zakat to</Text>
                <Text style={styles.wrapperSmallText1}>them</Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Image
                  source={require('../../assets/images/you.jpg')}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 30,
                    backgroundColor: 'black',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: 14,
                    fontWeight: 'bold',
                  }}>
                  YOU
                </Text>
                <Text style={styles.wrapperSmallText}>Distribute</Text>
                <Text style={styles.wrapperSmallText1}>Zakat</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: '#6E77F6',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              height: '80%',
              marginVertical: 50,
            }}>
            <View style={{paddingHorizontal: 18, marginTop: 25}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                Contribute Your Zakat Every Year
              </Text>
              <Text style={{color: 'white', fontSize: 18}}>
                Where it's most needed
              </Text>
              <Text style={{marginTop: 5, color: 'white'}}>
                The entirely of your Zakat through UNHCR's Refugees Zakat Fund
                goes to refugees and internally displaced persons most in need.
              </Text>
            </View>
            <View
              style={{
                marginVertical: 26,
                flexDirection: 'row',
                paddingHorizontal: 18,
                //    backgroundColor: 'black',
              }}>
              <Text style={styles.currencyText}>INR</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Enter Amount"
                placeholderTextColor="white"
                maxLength={30}
              />
              {/* </View> */}
            </View>
            <View style={{paddingHorizontal: 18}}>
              <CustomButton
                onPress={() => navigation.navigate('Signup')}
                title="CONTRIBUTE"
                width="98%" // Set the width as a percentage of the parent container
                // marginTop={-20}
                color="black"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 0, marginTop: 0}}>
        <BottomSlider data={BottomdashboardData} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 280,
    backgroundColor: 'black',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    //top: 280,
    //   position: 'absolute',

    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6E77F6', // Change color as needed
    margin: 8,
  },
  textInput: {
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: '83%',
    marginLeft: 16,
    fontSize: 22,
    color: 'white',
    borderColor: 'black',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  wrapperSmallText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
  },
  wrapperSmallText1: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  currencyText: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    fontWeight: '500',
  },
});

export default MenuScreen;
