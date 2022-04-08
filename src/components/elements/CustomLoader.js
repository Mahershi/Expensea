import React, {Component} from "react";
import {ActivityIndicator, Modal, View} from "react-native";
import Color from "../../constants/colors";

export default class CustomLoader extends Component{
    render(){
        return (
            <Modal
                animationType = {"fade"}
                transparent = {true}
                visible= {true}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <ActivityIndicator
                        size='large'
                        color={this.props.invert ? Color.textColor : Color.primaryColor}
                    />
                </View>
            </Modal>
        );
    }
}
