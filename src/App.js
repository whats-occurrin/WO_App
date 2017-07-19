import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'What\'s Occurring?'} />
  </View>

);

export default App;