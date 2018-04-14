import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './style'

export default class Content extends Component {

  render() {
    return ( 
      <View style={styles.container}>
      <View style={styles.styleView}>
      <Text style={styles.textStyle}>Kamu keren!</Text>
      <Text style={styles.textStyle}>Kamu sudah berusaha</Text>
      <Text style={styles.textStyle}>dengan baik hari ini!</Text>
      </View>
      <TouchableOpacity style={styles.button}
      onPress={() => this.props.navigation.navigate('Details')}>
         <Text> Aku akan berlatih lebih banyak lagi </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

