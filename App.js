import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';
import SignInScreen from './src/screens/SignInScreen'
import { Provider } from 'react-redux'
import store from './src/store'

type Props = {};
export default class App extends Component<Props> {

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

  state = {
    isLoading: false
  }

  render() {
    const { isLoading } = this.state
    return (
      <Provider store={store}>
        
          {isLoading ? ( 
            <Text>Loading...</Text>
          ) : (
            <SignInScreen />
          )}
        
      </Provider>  
    );
  }
}
