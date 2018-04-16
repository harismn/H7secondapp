import {
    StyleSheet, 
    View, 
    Text,
    Image,
    Button,
} from 'react-native';
import React, {Component} from 'react';
import {
    PagerTabIndicator, 
    IndicatorViewPager, 
    PagerTitleIndicator, 
    PagerDotIndicator
} from 'rn-viewpager';
import Foto from '../../asets'
// import PageOne from './pageOne'

export default class Sidebar extends Component {
        _renderTabIndicator() {
        let tabs = [{
                iconSource: Foto.setting,
            },{
                iconSource: Foto.fire,
            },{
                iconSource: Foto.foto1,
        }];
        return <PagerTabIndicator tabs={tabs} iconStyle={{ width: 30, height: 30, borderColor: 10}} />;
    }
    render() {
        return (
            <View style={{flex:1}}>
                
                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'orange'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'white'}}>
                    <Image
                    style={styles.image}
                    source={Foto.left}
                    />
                    </View>
                    <View style={{backgroundColor:'cornflowerblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.page2text}>
                        disini text aja
                        </Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                    <Image
                    style={styles.image}
                    source={Foto.right}
                    />   
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: 350,
        height: 520,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
    page2text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
})