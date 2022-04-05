import React, {Component} from 'react';
import {View} from 'react-native';

export default class CustomSpacer extends Component{
    render() {
        return (
            <View
                style={{
                    height:this.props.height,
                    width:this.props.width
                }}
            ></View>
        );
    }
}
