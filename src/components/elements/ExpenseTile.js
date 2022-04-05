import React, {Component} from "react";
import {View, Text} from 'react-native';
import {expenseStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";

export default class ExpenseTile extends Component{
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    margin: 20,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
                <View
                    style={expenseStyles.editIconBgStyle}
                >
                    <Icon
                        style={expenseStyles.editIconStyle}
                        name='pencil'
                        size={20}
                    />
                </View>
                <CustomSpacer width={12}/>
                <View
                    style={expenseStyles.expenseTileStyle}
                >
                    <View
                        style={{
                            flexDirection: "column"
                        }}
                    >
                        <Text
                            style={expenseStyles.expenseNameStyle}
                        >{this.props.name}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles.expenseCategoryStyle}
                        >Category</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={expenseStyles.expenseNameStyle}
                        >$ 12.75</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles.expenseCategoryStyle}
                        >Cluster</Text>
                    </View>
                </View>
            </View>
        );
    }
}
