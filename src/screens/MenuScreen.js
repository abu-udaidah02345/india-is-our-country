import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slider from './Slider';

const MenuScreen = ({navigation}) => {
  const data = [
    {key: '1', image: require('../../assets/images/save.png')},
    {key: '2', image: require('../../assets/images/save.png')},
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image
            source={require('../../assets/images/account.png')}
            style={{
              tintColor: '#6E77F6',
              width: 25,
              height: 25,
              marginTop: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
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
      </View>
    </View>
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
});

export default MenuScreen;
