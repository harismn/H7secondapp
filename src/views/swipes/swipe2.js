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

export default class Swipe2 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe2}
            />
            <Text style={styles.text}>Terkadang belajar itu melelahkan</Text>
            <Text style={styles.text}> tapi percayalah, akan indah.</Text>
            <Text style={styles.text}>pada waktunya</Text>
            </View>
        );
    }
}
