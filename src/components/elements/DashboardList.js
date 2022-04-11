/**
* file: DashboardList.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: On providing data, creates the date-wise Section List view for expenses that is shows on dashboard page.
* Also reused on the ClusterDetailPage to display the same, but for that particular Cluster.
* */

import React, {Component} from 'react';
import {View, Text, SectionList} from "react-native";
import ListHeader from "./ListHeader";
import ExpenseTile from "./ExpenseTile";
import {expenseStyles} from "../../styles/styles";
import {SwipeListView} from "react-native-swipe-list-view";
import ButtonComponent from "./ButtonComponent";


/**
 * DashboardList
 * purpose: provides a SectionList with Swipe feature to display expense with date headers.
 * props: data: Array, navigation: navigation, deleteCallback: function
 */
export default class DashboardList extends Component{

    /**
     * Demo of the structure of 'data' passed in props to display SectionList of expense
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
    render() {
        // //console.log("length:" + this.props.data.length)
        return (
            <SwipeListView
                style={expenseStyles.dashboardListStyle}
                useSectionList
                sections={
                    this.props.data
                }
                renderItem={(item)=>{
                    // //console.log("ITEM");
                    // //console.log(item.index);
                    // //console.log(item);
                    return <ExpenseTile
                        id={item.item}
                        data={item.section.extra[item.index]}
                        refreshCallback={this.props.refreshCallback}
                        navigation={this.props.navigation}
                    />
                }}
                renderSectionHeader={({section})=>(
                    <ListHeader date={section.head.date} total={section.head.total}/>
                )}
                renderHiddenItem={(data, rowmap)=>{
                    // //console.log("HIDDEN: " + JSON.stringify())
                    return <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            marginHorizontal: 20,
                            marginVertical: 20,
                            flex: 1
                        }}
                    >
                        <ButtonComponent text='Modify Cluster'/>
                        <ButtonComponent
                            text='Delete'
                            callback={()=>{
                                this.props.deleteCallback({expense: data.section.extra[data.index]});
                            }
                            }
                        />
                    </View>
                }}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
        );
    }


}
