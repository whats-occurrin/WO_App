import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import EventList from './components/EventList';
import Map from './components/Map';
import SignIn from './components/SignIn';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'What\'s Occurring?'} />
    <SignIn />
    <Map />
    <EventList />
  </View>

);

export default App;