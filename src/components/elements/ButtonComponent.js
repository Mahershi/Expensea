import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import {buttonStyle} from "../../styles/styles";

export default class ButtonComponent extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{

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
