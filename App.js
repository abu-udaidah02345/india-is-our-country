import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppNavigation from './src/appnavigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './store';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
