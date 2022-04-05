import React, {Component} from "react";
import {View, Text} from 'react-native';
import {expenseStyles2, monthExpensePage} from "../../styles/styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import MonthYearControlElement from "../elements/MonthYearControlElement";
import ButtonComponent from "../elements/ButtonComponent";
import {SwipeListView} from "react-native-swipe-list-view";
import ExpenseTile2 from "../elements/ExpenseTile2";
import DayHeader from "../elements/DayHeader";

export default class MonthlyExpensesScreen extends Component{
    arr = [
        {
            title: '23-02-2022',
            data: [
                'Exp1',
                'Exp2',
                'Exp3'
            ]
        },
        {
            title: '21-02-2022',
            data: [
                'Exp11',
                'Exp12'
            ]
        },
        {
            title: '05-02-2022',
            data: [
                'Exp21',
                'Exp22',
                'Exp23'
            ]
        },
        {
            title: '23-02-2022',
            data: [
                'Exp31',
                'Exp32',
                'Exp33'
            ]
        },
        {
            title: '21-02-2022',
            data: [
                'Exp41',
                'Exp42'
            ]
        },
        {
            title: '05-02-2022',
            data: [
                'Exp51',
                'Exp52',
                'Exp62'
            ]
        },
        {
            title: '23-02-2022',
            data: [
                'Exp61',
                'Exp72',
                'Exp82'
            ]
        },
        {
            title: '21-02-2022',
            data: [
                'Exp01',
                'Exp02'
            ]
        },
        {
            title: '05-02-2022',
            data: [
                'Exp111',
                'Exp112',
                'Exp1112'
            ]
        },
        {
            title: '23-02-2022',
            data: [
                'Exp11111',
                'Exp12112',
                'Exp432'
            ]
        },
        {
            title: '21-02-2022',
            data: [
                'Exp541',
                'Exp7652'
            ]
        },
        {
            title: '05-02-2022',
            data: [
                'Exp9981',
                'Exp8892',
                'Exp882'
            ]
        },
    ]
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
                    <SwipeListView
                        useSectionList
                        keyExtractor={(item, index) =>{
                            console.log(item+index);
                            return item+index;
                        }}
                        sections={
                            this.arr
                        }
                        renderItem={(item)=>{
                            console.log(item);
                            return <ExpenseTile2 name={item.item}/>
                        }}
                        renderSectionHeader={({section})=>(
                            <DayHeader date={section.title}/>
                        )}
                        renderHiddenItem={(data, rowmap)=>{
                            return <View
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    margin: 20,
                                }}
                            >
                                <ButtonComponent text='Change'/>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: 'space-between',
                                        // margin: 20,
                                        flex: 1
                                    }}
                                >
                                    <ButtonComponent text='Remove'/>
                                    <ButtonComponent text='Delete'/>
                                </View>
                            </View>
                        }}
                        leftOpenValue={150}
                        swipeToOpenPercent={10}
                        swipeToClosePercent={15}
                        rightOpenValue={-75}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                    />
                </View>

            </View>
        );
    }
}
