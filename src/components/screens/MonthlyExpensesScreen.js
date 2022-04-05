import React, {Component} from "react";
import {View, Text} from 'react-native';
import {monthExpensePage} from "../../styles/styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import MonthExpenseBrief from "../elements/MonthExpenseBrief";
import MonthYearControlElement from "../elements/MonthYearControlElement";

export default class MonthlyExpensesScreen extends Component{
    render() {
        return (
            <View
                style={{flex: 1}}
            >
                <View
                    style={monthExpensePage.bottomContainer}
                >
                    <BackButtonComponent invert={false}/>
                    <View
                        style={{
                            flex: 1
                        }}
                    ></View>
                    <Text
                        style={monthExpensePage.titleStyle}
                    >Expenses</Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    ></View>
                    <View
                        pointerEvents='none'
                        style={{
                            opacity: 0
                        }}
                    >
                        <BackButtonComponent invert={false}/>
                    </View>
                </View>
                <View
                    style={monthExpensePage.topContainer}
                >
                    <MonthYearControlElement />
                </View>

            </View>
        );
    }
}
