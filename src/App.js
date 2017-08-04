/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';

// Components:
import Login from './components/Login';
import Loader from './components/Loader';
import PeopleList from './components/PeopleList';


export default class App extends Component {

  state = {
    loggedIn : null
  }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyCFGnCCieFtetYWda7KN4zLR1gvtpkoBbc",
        authDomain: "crmlinkedin2-358b9.firebaseapp.com",
        databaseURL: "https://crmlinkedin2-358b9.firebaseio.com",
        projectId: "crmlinkedin2-358b9",
        storageBucket: "crmlinkedin2-358b9.appspot.com",
        messagingSenderId: "609238688785"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn : true})
      } else {
        this.setState({loggedIn : false})
      }
    })
  }

  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
        return <PeopleList/>;
      case false:
        return <Login />;
      default :
        return <Loader size = "large"/>;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
