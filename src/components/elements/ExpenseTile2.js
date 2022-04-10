import React, {Component, PureComponent} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Color from "../../constants/colors";
import {expenseStyles, expenseStyles2} from "../../styles/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSpacer from "./CustomSpacer";
import CategoryModel from "../../models/CategoryModel";
import ClusterModel from "../../models/ClusterModel";
import ExpenseModel from "../../models/ExpenseModel";

export default class ExpenseTile2 extends PureComponent{
    constructor(props) {
        super(props);
        const {data} = this.props;
        this.expense = new ExpenseModel.fromJson(data);
        // console.log("Expense:")
        // // console.log(data);
        // console.log(this.expense);
        // console.log(this.expense.categoryId);

    }
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
                <View style={{
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <TouchableNativeFeedback
                        onPress={()=>{
                            console.log("pressed");
                            this.props.navigation.navigate('AddEditExpenseScreen', {
                                expense: this.expense,
                                backToDashboard: false,
                                backToMonthly: true,
                                // not really using refreshCallback anymore due to binding issues
                                // dashboardRefreshCallback: this.props.refreshCallback
                            });
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
                    </TouchableNativeFeedback>
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
                        >{this.expense.name}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles2.expenseCategoryStyle}
                        >
                            {
                                (CategoryModel.getObjectById({id:this.expense.categoryId}))
                                    ? (CategoryModel.getObjectById({id:this.expense.categoryId})).name
                                    : ''
                            }
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={expenseStyles2.expenseNameStyle}
                        >{'$ ' + this.expense.amount}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles2.expenseCategoryStyle}
                        >
                            {
                                (ClusterModel.getObjectById({id:this.expense.clusterId}))
                                    ? (ClusterModel.getObjectById({id:this.expense.clusterId})).name
                                    : ""
                            }
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
