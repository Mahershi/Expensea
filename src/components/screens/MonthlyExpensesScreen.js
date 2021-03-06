/**
* file: MonthlyExpensesScreen.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Screen View code for particular month of a year.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {monthExpensePage} from "../../styles/styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import MonthYearControlElement from "../elements/MonthYearControlElement";
import ButtonComponent from "../elements/ButtonComponent";
import {SwipeListView} from "react-native-swipe-list-view";
import ExpenseTile2 from "../elements/ExpenseTile2";
import DayHeader from "../elements/DayHeader";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Color from "../../constants/colors";
import MonthlyExpenseController from "../../controllers/monthly_expense_controller";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadMonthlyExpense, monthlyExpenseLoaded} from "../../actions/monthExpenseActions";
import CustomLoader from "../elements/CustomLoader";

/**
 * MonthlyExpenseScreen
 * purpose: View Code for MontylyExpenses Screen
 */
class MonthlyExpensesScreen extends Component{
    /**
     * Demo data structure for 'data' received in the props
     * @type {[{head: {date: string, total: string}, data: string[], more: [{name: string},{name: string}]}]}
     */
    arr = [
        {
            head: {
                'date': '2022-04-08',
                'total': '2111'
            },
            more: [
                {name: 'Exp1', id: '1'},
                {name: 'Exp2', id: '2'},
            ],
            data: [
                '1',
                '2'
            ],
        },

    ]

    constructor(props) {
        super(props);
        const {reducer, actions} = this.props;
        const {month, year, navigation} = this.props.route.params;
        this.controller = new MonthlyExpenseController({
            navigation: navigation,
            month: month,
            year: year,
            // month: 4,
            // year: 2022,
            reducer: reducer,
            actions: actions
        })
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        // //console.log("In COMP Update MOnthly");
        // //console.log()
        // //console.log(JSON.stringify(this.props));
        if(this.props.route.params?.update == true){
            // //console.log("Did Update");
            this.controller.refreshBind();
            this.props.route.params.update = false;
        }

    }

    render() {
        const {reducer} = this.props;
        // //console.log("Reducer: ")
        // // //console.log(JSON.stringify(reducer));
        // //console.log(reducer['data']['monthTotal'])
        return (
            <View
                style={{flex: 1}}
            >
                {reducer.loading ? <CustomLoader invert={true}/> : null}
                <View
                    style={monthExpensePage.bottomContainer}
                >
                    <BackButtonComponent
                        invert={false}
                        enable={true}
                        callback={this.controller.goBackBind}
                    />
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Text
                        style={monthExpensePage.titleStyle}
                    >Expenses</Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
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
                    <MonthYearControlElement
                        total={reducer['data']['monthTotal']}
                        months={this.controller.monthsIndex}
                        years={this.controller.years}
                        curMonth={this.controller.currentMonth}
                        curYear={this.controller.currentYear}
                        callback={this.controller.getForMonthYearBind}
                    />
                    <SwipeListView
                        useSectionList
                        // keyExtractor={(item, index) =>{
                        //     //console.log(item+index);
                        //     return item+index;
                        // }}
                        sections={
                            reducer['data']['days']
                        }
                        renderItem={(item)=>{

                            return <ExpenseTile2
                                id={item.item}
                                data={item.section.extra[item.index]}
                                // refreshCallback={this.props.refreshCallback}
                                navigation={this.props.navigation}
                            />
                        }}
                        renderSectionHeader={({section})=>(
                            <DayHeader date={section.head.date}/>
                        )}
                        renderHiddenItem={(data, rowmap)=>{
                            return <View
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    margin: 20,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <ButtonComponent text='Modify Cluster'/>
                                <ButtonComponent
                                    text='Delete'
                                    callback={()=>{
                                        this.controller.deleteExpenseBind({expense: data.section.extra[data.index]})
                                    }
                                    }
                                />
                            </View>
                        }}
                        leftOpenValue={75}
                        swipeToOpenPercent={10}
                        swipeToClosePercent={15}
                        rightOpenValue={-75}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                    />
                </View>
                <View style={monthExpensePage.fab}>
                    <TouchableNativeFeedback
                        onPress={()=>{
                            //console.log("tapped");
                            this.controller.newForMonthBind();
                        }}
                    >
                        <View style={monthExpensePage.fabInner}>
                            <Icon
                                name='plus'
                                color={Color.primaryColor}
                                size={36}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.monthlyExpenseReducer
    };
}

const ActionCreators = Object.assign({}, {loadMonthlyExpense, monthlyExpenseLoaded});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyExpensesScreen)
