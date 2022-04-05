import React, {Component} from "react";
import {View, Text} from 'react-native';
import {expenseStyles2} from "../../styles/styles";

export default class DayHeader extends Component{
    render() {
        return (
            <View
                style={expenseStyles2.headContainerStyle}
            >
                <Text
                    style={expenseStyles2.headDayStyle}
                >02</Text>
            </View>
        );
    }
}
