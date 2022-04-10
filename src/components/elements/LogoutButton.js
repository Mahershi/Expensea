import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {logoutButton} from "../../styles/menustyles";


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
