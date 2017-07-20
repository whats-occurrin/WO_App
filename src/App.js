import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner } from './components/common';
import Header from './components/Header';
import EventList from './components/EventList';
import Map from './components/Map';
import SignIn from './components/SignIn';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQ7RL6-AStBt3f4YhSLh4el5aQH7HBSzw',
      authDomain: 'whats-occurrin.firebaseapp.com',
      databaseURL: 'https://whats-occurrin.firebaseio.com',
      projectId: 'whats-occurrin',
      storageBucket: 'whats-occurrin.appspot.com',
      messagingSenderId: '104730148110'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Profile

            Event Categories 
            
        </Button>
        );
      case false:
        return <SignIn />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'What\'s Occurring?'} />
        {this.renderContent()}
        <Map />
        <EventList />
      </View>
    );
  }
}

export default App;