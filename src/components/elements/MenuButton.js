/**
* file: MenuButton.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for dynamic menu button.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import {menuButton} from "../../styles/menustyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../../constants/colors";
import CustomSpacer from "./CustomSpacer";

/**
 * MenuButton
 * purpose: Custom View Component to display dynamic Menu Button
 * props: callback: function, title: string, iconName: string
 */
export default class MenuButton extends Component{
    constructor(props) {
        super(props);
        this.callback = this.props.callback;
        this.title = this.props.title;
        this.iconName = this.props.iconName;
    }
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.callback();
                }}
            >
                <View style={menuButton.root}>
                    <View style={menuButton.rowLeft}>
                        <View style={menuButton.iconBg}>
                            <Icon
                                name={this.iconName}
                                size={22}
                                color={Color.textColor}
                            />
                        </View>
                        <CustomSpacer width={16}/>
                        <Text style={menuButton.title}>{this.title}</Text>
                    </View>
                    <Icon
                        name='chevron-right'
                        color={Color.primaryColor}
                        size={32}
                    />
                </View>
            </TouchableNativeFeedback>
        );
    }
}
