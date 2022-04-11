/**
* file: CustomSpacer.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: When provided height or width, or both, creates a invisible view to achieve space between elements.
* */

import React, {Component} from 'react';
import {View} from 'react-native';


/**
 * CustomSpace
 * purpose: To Provide Spacing between components
 * props: height: double, width: double
 */
export default class CustomSpacer extends Component{
    render() {
        return (
            <View
                style={{
                    height:this.props.height,
                    width:this.props.width
                }}
            ></View>
        );
    }
}
