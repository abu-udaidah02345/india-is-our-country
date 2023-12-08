import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../components/theme';
import images from '../components/images';
import MenuScreen from '../screens/MenuScreen';
import Account from '../screens/Account';
import Video from '../screens/Video';
const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '8%',
          backgroundColor: 'black',
        },
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Menu':
              return (
                <Image
                  source={images.Menu}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Video':
              return (
                <Image
                  source={images.Menu}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Account':
              return (
                <Image
                  source={images.Account}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Tabs;
