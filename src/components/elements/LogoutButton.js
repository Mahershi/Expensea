import React, {Component} from "react";
import {View, Text} from 'react-native';
import {logoutButton} from "../../styles/menustyles";


export default class LogoutButton extends Component{
    render() {
        return (
            <View style={logoutButton.bg}>
                <Text style={logoutButton.text}>Logout</Text>
            </View>
        );
    }
}
