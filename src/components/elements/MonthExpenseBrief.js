/**
* file: MonthExpenseBrief.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for Top Header on the Dashboard page which displays current Month and its total expenses.
* */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {textStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";

/**
 * MonthExpenseBrief
 * purpose: View code for top header on dashboard page
 * props: month: string, total: string
 */
export default class MonthExpenseBrief extends Component{
    render() {
        return (
            <View>
                <Text
                    style={textStyles.monthHead}
                >
                    {GlobalVars.months[this.props.month] + '\'s Expenses'}
                </Text>
                <CustomSpacer height={10}/>
                <Text
                    style={textStyles.expenseHead}
                >
                    {'$ ' + this.props.total}
                </Text>
            </View>
        );
    }
}
