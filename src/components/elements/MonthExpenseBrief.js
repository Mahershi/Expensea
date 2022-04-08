import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {textStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";

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
