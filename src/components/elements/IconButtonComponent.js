/**
* file: ExpenseTile.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View Code for displaying a Material Icon button when provided with an icon name in the props.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";


export default class IconButtonComponent extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.callback()
                }
                }
            >
                <View
                    style={{
                        backgroundColor: Color.textColor,
                        padding: 12,
                        borderRadius: 20,
                    }}
                >
                    <Icon
                        name={this.props.iconName}
                        size={32}
                        color={Color.primaryColor}
                    />
                </View>
            </TouchableNativeFeedback>
        );
    }
}
