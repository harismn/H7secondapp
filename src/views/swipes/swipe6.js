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

export default class Swipe6 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe6}
            />
            <Text style={styles.text}>Dan aplikasi ini adalah jawabannya</Text>
            <Text style={styles.text}> 7 Aplication akan</Text>
            <Text style={styles.text}>membantu anda untuk menghapalkan banyak vocab</Text>
            </View>
        );
    }
}
