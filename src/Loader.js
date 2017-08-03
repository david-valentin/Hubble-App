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
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  loader : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
});


// Building a stateless component
// Just an anonymous functions

const Loader = ({size}) => {
  return (
      <View style={styles.loader}>
        <Activity size = {size || 'small'}>
      </View>
  )
};


export default Loader;
