/**
* file: LogoutButton.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for Logout button with callback in the props.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {logoutButton} from "../../styles/menustyles";

/**
 * LogoutButton
 * purpose: UI for logout button
 * props: callback: function
 */
export default class LogoutButton extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.callback();
                }}
            >
                <View style={logoutButton.bg}>
                    <Text style={logoutButton.text}>Logout</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
