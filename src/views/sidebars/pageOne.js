import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';
import Foto from '../../asets'
import { create } from 'handlebars';

export default class PageOne extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <Image
            style={styles.image}
            source={Foto.left}
            />
        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: 150,
        height: 150,
        borderRadius: 120,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500',
      },
})