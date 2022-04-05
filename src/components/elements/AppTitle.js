import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
