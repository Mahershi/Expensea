/**
* file: ButtonComponent.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Provides a reusable Component with dynamic text and callback on press to use as an action button such as
* 'delete' or 'modify cluster' button which appears when users slide an expense item for more actions.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import {buttonStyle} from "../../styles/styles";


/**
 * BackButton
 * purpose: To provide a back button
 * props: callback: function, text: string
 */
export default class ButtonComponent extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.callback();
                }
                }
            >
                <View
                    style={buttonStyle.primaryBg}
                >
                    <Text
                        style={buttonStyle.primaryText}
                    >{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
