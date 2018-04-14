import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe5 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe5}
            />
            <Text style={styles.text}>Tidak perlu memaksakan untuk</Text>
            <Text style={styles.text}> menghapal banyak vocabulary</Text>
            <Text style={styles.text}>cukup 7 vocabulary sehari saja</Text>
            </View>
        );
    }
}
