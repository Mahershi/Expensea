/**
* file: DayHeader.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for displaying the header of the section list in MonthlyExpenseScreen. Header displays
* the day of the month and the week.
* */

import React, {PureComponent} from "react";
import {View, Text} from 'react-native';
import {expenseStyles2} from "../../styles/styles";
import GlobalVars from "../../helpers/GlobalVars";


/**
 * DayHeader
 * purpose: TO display day in MonthExpenseScreen
 * props: date: string
 */
export default class DayHeader extends PureComponent{
    constructor(props) {
        super(props);
        const {date} = this.props;
        this.d = new Date(date);
    }

    render() {
        return (
            <View
                style={expenseStyles2.headContainerStyle}
            >
                <Text
                    style={expenseStyles2.headDayStyle}
                >{this.props.date.substring(8)}</Text>
                <Text
                    style={expenseStyles2.weekDayStyle}
                >{GlobalVars.days[this.d.getDay()]}</Text>
            </View>
        );
    }
}
