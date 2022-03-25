import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

const firebase = require('firebase');
require('firebase/firestore');

export default class App extends React.Component {
  return(
    <View style = { styles.container } >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyDIYewULwtJfRSDWhtuy16qRXKFfJAhL9A",
  authDomain: "chatapp-ee0b7.firebaseapp.com",
  projectId: "chatapp-ee0b7",
  storageBucket: "chatapp-ee0b7.appspot.com",
  messagingSenderId: "1016229915452",
  appId: "1:1016229915452:web:cae091df961942ef474c39"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

this.referenceShoppingLists = firebase.firestore().collection('shoppinglists');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
