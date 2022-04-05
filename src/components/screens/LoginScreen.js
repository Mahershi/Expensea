import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import {loginPage} from "../../styles/styles";
import AppTitle from "../elements/AppTitle";
import LoginButton from "../elements/LoginButton";

export class LoginScreen extends Component{
    render() {
        return (
            <View
                style={loginPage.pageStyle}
            >
                <View
                    style={loginPage.topContainer}
                >
                    <AppTitle />
                </View>
                <View
                    style={loginPage.bottomContainer}
                >
                    <LoginButton />
                </View>
            </View>
        );
    }
}
