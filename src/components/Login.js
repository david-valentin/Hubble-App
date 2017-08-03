/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';


const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      form : {
        paddingBottom : 10,
        width : 200,
      },
      fieldStyles : {
        height : 40,
        color : MKColor.Orange,
        width: 200,
      },
      loginButtonArea : {
        marginTop : 20
      }
});

export default class Login extends Component {

  state= {
    email : '',
    password : '',
    loading : false;

  };


  onButtonPress() {
    // include the firebase functionality 
    alert('Clicked the login button');


  }

  render() {
    // Deconstruction syntax
    const {form, fieldStyles, loginButtonArea, errorMessage} = styles;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Hubble io
        </Text>
        <MKTextField
          text={this.state.email}
          onTextChange= {email => this.setState({email})}
          textInputStyle= {fieldStyles}
          placeholder = {'Email...'}
          tintColor = {MKColor.Teal}
        />
        <MKTextField
          text={this.state.email}
          onTextChange= {email => this.setState({email})}
          textInputStyle= {fieldStyles}
          placeholder = {'Password...'}
          tintColor = {MKColor.Teal}
          password = {true}
        />
        <Text style = {errorMessage}>
          {this.state.error}
        </Text>
        <View style={loginButtonArea}>
          <LoginButton onPress= {this.onButtonPress.bind(this)} />
        </View>
      </View>
    );
  }
}
