/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const SignUpButton = MKButton.coloredButton()
      .withText('SIGN UP')
      .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        paddingTop : 10,
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    container: {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },
    successMessage : {
      marginTop: 15,
      fontSize: 15,
      color: 'green',
      alignSelf: 'center'
    },
    welcomeText : {
      fontSize : 15,
      paddingBottom : 15,
    }
});

export default class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      success : '',
      loadingAccount: false,
      accountExists : false,
      creatingNewAccount : false,
  };

  onLoginButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', success: '', loadingAccount: true, accountExists : false, creatingNewAccount : false});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(this.onAuthFailed.bind(this));
  }

  onAuthSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        success : 'Welcome back!',
        loadingAccount: false,
      });
  }

  onAuthFailed() {
      this.setState({
          error: 'Authentication Failed',
          loadingAccount: false,
      });
  }

  onSignUpButtonPressed() {
    // implements firebase logic to sign up an account
    const { email, password } = this.state;
    this.setState({error: '', success: '', accountExists : false, creatingNewAccount : true});

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFailed.bind(this)
    );
  }

  onSignUpSuccess() {
      this.setState({
        email: '',
        password: '',
        success : 'Thanks for signing up with Hubble',
        creatingNewAccount: false,
        loadingAccount : false,
      });
  }

  onSignUpFailed() {
      this.setState({
          error: 'Account Exists Already',
          accountExists : false,
          creatingNewAccount: false,
          loadingAccount : false,
      });
  }

  renderLoader() {
    if (this.state.loadingAccount) {
        return <Loader size="large"/>;
    } else {
        return <LoginButton onPress={this.onLoginButtonPress.bind(this)} />
    }
  }

  renderSignUpLoader() {
    if (this.state.creatingNewAccount) {
        return <Loader size="large"/>;
    } else {
        return <SignUpButton onPress={this.onSignUpButtonPressed.bind(this)} />
    }
  }

  renderMessage() {
    const {errorMessage, successMessage } = styles;

    console.log("The error message: " + errorMessage + ". The successMessage: " + successMessage)

    if (this.state.success) {
      return (
        <Text style={successMessage}>
            {this.state.successMessage}
        </Text>
      )
    } else {
      return (
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
      )
    }
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, successMessage, welcomeText } = styles;
    return (
      <View style={form}>
        <Text style={welcomeText}>Welcome to Hubble</Text>
        <MKTextField
            text={this.state.email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField
            text={this.state.password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <View>
          {this.renderMessage()}
        </View>
        <View style={loginButtonArea}>
            {this.renderLoader()}
        </View>
        <View style={loginButtonArea}>
            {this.renderSignUpLoader()}
        </View>
      </View>
    );
  }
}
