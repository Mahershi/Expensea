import React, {Component, PureComponent} from "react";
import {View, Text} from 'react-native';
import {expenseStyles2} from "../../styles/styles";
import GlobalVars from "../../helpers/GlobalVars";

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
