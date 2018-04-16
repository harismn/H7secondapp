import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
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
                <Text style={styles.text}>Dan aplikasi ini</Text>
                <Text style={styles.text}>adalah jawabannya</Text>
                <Text style={styles.text}>7 Aplication akan</Text>
                <Text style={styles.text}>membantu anda untuk </Text>
                <Text style={styles.text}>menghapalkan banyak vocab</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('welcome')}>
                        <Text> Lanjutkan </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

