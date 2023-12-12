import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
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

const MenuScreen = ({navigation}) => {
  const data = [
    {key: '1', image: require('../../assets/images/save.png')},
    {key: '2', image: require('../../assets/images/save.png')},
    // Add more items as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image
            source={require('../../assets/images/handshake.png')}
            style={{
              tintColor: '#6E77F6',
              width: 25,
              height: 22,
              marginTop: 15,
              marginLeft: 25,
              // marginRight: 55,
            }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <Image
                source={require('../../assets/images/notification.png')}
                style={{
                  tintColor: '#6E77F6',
                  width: 25,
                  height: 22,
                  marginTop: 15,
                  marginLeft: 250,
                }}
              />
            </TouchableOpacity>
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
        </View>
        <View style={{marginTop: 10}}>
          <Slider data={data} />
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
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                color: 'white',
                fontWeight: '500',
              }}>
              INR
            </Text>

            <>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //   placeholder="Enter Amount"
                placeholderTextColor="white"
                placeholderStyle={{fontSize: 26}} // Set the placeholder font size
                maxLength={30}
              />
            </>

            {/* </View> */}
          </View>
          <View style={{paddingHorizontal: 18}}>
            <CustomButton
              onPress={() => navigation.navigate('Signup')}
              title="CONTRIBUTE"
              color="black"
              width={380}
              height={70}
              marginTop={24} // Set the marginTop value as needed
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    borderColor: '#000', // Black border color
    borderBottomWidth: 1,
    width: '83%',
    marginLeft: 40,
    fontSize: 22,

    color: 'white', // Black text color
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
});

export default MenuScreen;
