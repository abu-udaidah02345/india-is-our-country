import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppNavigation from './src/appnavigation/AppNavigation';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <>
      <AppNavigation />
    </>
  );
}
