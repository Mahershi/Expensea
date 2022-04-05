import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Image} from 'react-native';
import {loginPage} from "../../styles/styles";

export default class LoginButton extends Component{
    render() {
        console.log(require('../../assets/img/google.png'))
        return (
            <View>
                <TouchableNativeFeedback>
                    <View
                        style={loginPage.loginButtonStyle}
                    >
                        <Image
                            source={require('../../assets/img/google.png')}
                            style={loginPage.googleImageStyle}
                        />
                        <Text
                            style={loginPage.googleSignInTextStyle}
                        >
                            Sign In with Google
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
