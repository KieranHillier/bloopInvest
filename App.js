/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Content, Button, Text } from 'native-base';
import SignInScreen from './src/screens/SignInScreen'
import store from './src/store'
import { Provider } from 'react-redux'

type Props = {};
export default class App extends Component<Props> {

  state = {
    isLoading: false
  }

  constructor() {
    super() 
    this.ref = firebase.firestore().collection('users');
  }

  componentDidMount() {
    this.ref.add({
      name: "jordan",
      lastName: "cheung"
    });
  }

  render() {
    const { isLoading } = this.state
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {isLoading ? ( 
            <Text>Loading...</Text>
          ) : (
            <SignInScreen />
          )}
        </View>
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
