import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppNavigation from './src/appnavigation/AppNavigation';

const {width, height} = Dimensions.get('window');

export default function App() {
  const [splashScreensLoading, setSplashScreensLoading] = useState(true);

  useEffect(() => {
    SplashScreen();
  }, []);

  const SplashScreen = async () => {
    setTimeout(() => {
      setSplashScreensLoading(false);
    }, 1000);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {splashScreensLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: height - height / 1.7 - 50,
          }}>
          <Image source={require('./assets/images/save.png')} />
          {/* <Text
            style={{
              color: '#6E77F6',
              fontWeight: 'bold',
              fontSize: 35,
              marginTop: 4,
            }}>
            Makthap al-kidmat
          </Text> */}
        </View>
      ) : (
        <AppNavigation />
      )}
    </View>
  );
}
