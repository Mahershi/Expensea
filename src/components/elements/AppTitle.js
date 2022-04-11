/**
* file: AppTitle.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Title Design for Login Page
* */

import React, {Component} from 'react';
import {Text} from 'react-native';
import {loginPage} from "../../styles/styles";

export default class AppTitle extends Component{
    render(){
        return (
          <Text style={loginPage.titleStyle}>
              EXPENSEA
          </Text>
        );
    }
}
