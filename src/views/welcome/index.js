import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import styles from './style'

export default class Content extends Component {

  render() {
    return ( 
      <View style={styles.container}>
      <Text style={styles.textUp}>Selamat datang di</Text>
      <Text style={styles.textNumber}>7</Text>
      <Text style={styles.texton}>Aplikasi</Text>
      <Text style={styles.texton}>Gratis!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('swipes')}>
         <Text> Login </Text>
       </TouchableOpacity>
      </View>
    );
  }
}