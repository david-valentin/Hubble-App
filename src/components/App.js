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
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';

// React-redux imports:
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer'


// Runs the dev tool extension
const store = createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {

  state = {
    loggedIn : null,
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
        return <PeopleList />;
      case false:
        return <Login />;
      default :
        return <Loader size = "large"/>;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      </Provider>
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
