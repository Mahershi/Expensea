import React, {Component} from "react";
import {View, Text} from 'react-native';
import {expenseStyles} from "../../styles/styles";
import CustomSpacer from "./CustomSpacer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";
import ExpenseModel from "../../models/ExpenseModel";
import CategoryModel from "../../models/CategoryModel";
import ClusterModel from "../../models/ClusterModel";

export default class ExpenseTile extends Component{
    constructor(props) {
        super(props);
        const {data} = this.props;
        this.expense = new ExpenseModel.fromJson(data);
        console.log("Exp");
        console.log(this.expense);
    }
    render() {

        return (
            <View
                style={{
                    flexDirection: "row",
                    margin: 20,
                    alignItems: 'center',
                    backgroundColor: Color.textColor
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
                        >{this.expense.name}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles.expenseCategoryStyle}
                        >{
                            (CategoryModel.getObjectById({id:this.expense.categoryId}))
                            ? (CategoryModel.getObjectById({id:this.expense.categoryId})).name
                                : ''
                        }</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={expenseStyles.expenseNameStyle}
                        >{'$ ' + this.expense.amount}</Text>
                        <CustomSpacer height={8}/>
                        <Text
                            style={expenseStyles.expenseCategoryStyle}
                        >{
                            (ClusterModel.getObjectById({id:this.expense.clusterId}))
                            ? (ClusterModel.getObjectById({id:this.expense.clusterId})).name
                                : ""
                        }</Text>
                    </View>
                </View>
            </View>
        );
    }
}
