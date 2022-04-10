import React, {Component, PureComponent} from "react";
import {View, Text} from 'react-native';
import {expenseStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";

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
