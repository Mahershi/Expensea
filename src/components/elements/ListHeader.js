/**
* file: ListHeader.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for displaying the header of the section list in DashboardList.js. Header displays
* the date, day of the week and total amount of all the expenses for that date.
* */

import React, {Component, PureComponent} from "react";
import {View, Text} from 'react-native';
import {expenseStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";


/**
 * ListHeader
 * purpose: TO display section list header on dashboard and individual cluster details
 * props: date: string, total: string
 */
export default class ListHeader extends PureComponent{
    constructor(props) {
        super(props);
        const {date} = this.props;
        this.d = new Date(date);
    }

    render() {
        return (
            <View
                style={expenseStyles.headContainerStyle}
            >
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Text
                        style={expenseStyles.headDateStyle}
                    >{this.props.date}</Text>
                    <CustomSpacer height={8}/>
                    <Text
                        style={expenseStyles.headDayStyle}
                    >{GlobalVars.days[this.d.getDay()]}</Text>
                </View>
                <Text
                    style={expenseStyles.headTotalStyle}
                >{'$' + this.props.total}</Text>
            </View>
        )
    }
}
