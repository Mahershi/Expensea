/**
* file: CustomLoader.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Process Loaded that shows up on any network call. Has an argument 'invert' as boolean to change the color
* of the Loader to contrast the color of the background.
* */

import React, {Component} from "react";
import {ActivityIndicator, Modal, View} from "react-native";
import Color from "../../constants/colors";

/**
 * CustomLoader
 * purpose: to provide a custom loader
 * props: invert: boolean
 */
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
