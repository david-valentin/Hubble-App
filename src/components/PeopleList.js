/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import firebase from 'firebase';


export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyCFGnCCieFtetYWda7KN4zLR1gvtpkoBbc",
        authDomain: "crmlinkedin2-358b9.firebaseapp.com",
        databaseURL: "https://crmlinkedin2-358b9.firebaseio.com",
        projectId: "crmlinkedin2-358b9",
        storageBucket: "crmlinkedin2-358b9.appspot.com",
        messagingSenderId: "609238688785"
    });
  }

  render() {
    return (
      <View>
        <Text>Test<Text/>
      </View>
    );
  }
}
