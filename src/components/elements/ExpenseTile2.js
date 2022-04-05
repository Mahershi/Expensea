import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Color from "../../constants/colors";
import {expenseStyles2} from "../../styles/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSpacer from "./CustomSpacer";

export default class ExpenseTile2 extends Component{
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    margin: 20,
                    alignItems: 'center',
                    backgroundColor: Color.primaryColor
                }}
            >
                <View
                    style={expenseStyles2.editIconBgStyle}
                >
                    <Icon
                        style={expenseStyles2.editIconStyle}
                        name='pencil'
                        size={20}
                    />
                </View>
                <CustomSpacer width={12}/>
                <View
                    style={expenseStyles2.expenseTileStyle}
                >
                    <View
                        style={{
                            flexDirection: "column"
                        }}
                    >
                        <Text
                            style={expenseStyles2.expenseNameStyle}
                        >{this.props.name}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles2.expenseCategoryStyle}
                        >Category</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={expenseStyles2.expenseNameStyle}
                        >$ 12.75</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles2.expenseCategoryStyle}
                        >Cluster</Text>
                    </View>
                </View>
            </View>
        );
    }
}
