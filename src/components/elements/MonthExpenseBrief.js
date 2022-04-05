import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {textStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";

export default class MonthExpenseBrief extends Component{
    render() {
        return (
            <View>
                <Text
                    style={textStyles.monthHead}
                >
                    April's Expenses
                </Text>
                <CustomSpacer height={10}/>
                <Text
                    style={textStyles.expenseHead}
                >
                    $ 750.00
                </Text>
            </View>
        );
    }
}
