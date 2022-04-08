import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Image} from 'react-native';
import {loginPage} from "../../styles/styles";
import MyGoogleSignIn from "../../helpers/googleSignin";

export default class LoginButton extends Component{
    render() {
        console.log(require('../../assets/img/google.png'))
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={()=>{
                        console.log(this.callBack);
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
