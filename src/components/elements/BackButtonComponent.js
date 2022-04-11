/**
* file: BackButtonComponent.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Provides a reusable Component with uniform '<' design with dynamic callback on press to use as a back button
* */

import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";


/**
 * BackButtonComponent
 * purpose: To provide back button
 * props: enable: boolean, callback: function, invert: boolean
 */
export default class BackButtonComponent extends Component{
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={()=>{
                    if(this.props.enable){
                       this.props.callback();
                    }
                }}
            >
                <View
                    style={{
                        borderColor: this.props.invert ? Color.textColor : Color.primaryColor,
                        borderRadius: 12,
                        borderWidth: 1,
                        padding: 4,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Icon
                        name='chevron-left'
                        color={this.props.invert ? Color.textColor : Color.primaryColor}
                        size={24}
                    />
                </View>
            </TouchableWithoutFeedback>

        );
    }
}
