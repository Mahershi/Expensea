import React, {Component} from "react";
import {View, Text} from 'react-native';
import {monthYearControlStyles} from "../../styles/styles";

export default class MonthYearControlElement extends Component{
    render() {
        return (
            <View
                style={monthYearControlStyles.container}
            >
                <View
                    style={monthYearControlStyles.totalContainerStyle}
                >
                    <Text
                        style={monthYearControlStyles.totalTitleTextStyle}
                    >Total</Text>
                    <Text
                        style={monthYearControlStyles.totalTextStyle}
                    >$ 650</Text>
                </View>
            </View>
        );
    }
}
