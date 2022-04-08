import React, {Component} from "react";
import {View, Text} from 'react-native';
import {expenseStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";

export default class ListHeader extends Component{
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
                    >Saturday</Text>
                </View>
                <Text
                    style={expenseStyles.headTotalStyle}
                >{'$' + this.props.total}</Text>
            </View>
        )
    }
}
