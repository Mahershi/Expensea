/**
* file: LoginButton.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for 'Sign In Using Google' button with callback in the props.
* */

import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Image} from 'react-native';
import {loginPage} from "../../styles/styles";

/**
 * LoginButton
 * purpose: UI for login button
 * props: callBack: function
 */
export default class LoginButton extends Component{
    render() {
        //console.log(require('../../assets/img/google.png'))
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={()=>{
                        //console.log(this.callBack);
                        this.props.callBack();
                    }}
                >
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
