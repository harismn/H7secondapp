import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Foto from '../../asets'

export default class Sidebar extends Component {
        _renderTabIndicator() {
        let tabs = [{
                iconSource: Foto.foto3,
            },{
                iconSource: Foto.foto1,
            },{
                iconSource: Foto.foto1,
        }];
        return <PagerTabIndicator tabs={tabs} iconStyle={{ width: 30, height: 30, borderColor: 150}} />;
    }
    render() {
        return (
            <View style={{flex:1}}>
                
                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}