import React, {Component} from 'react';
import {View, Text, SectionList} from "react-native";
import ListHeader from "./ListHeader";
import ExpenseTile from "./ExpenseTile";
import {expenseStyles} from "../../styles/styles";
import {SwipeListView} from "react-native-swipe-list-view";
import ButtonComponent from "./ButtonComponent";

export default class DashboardList extends Component{
    arr = [
        {
            head: {
                'date': '1212',
                'total': '2111'
            },
            more: [
                {name: 'name'},
                {name: 'name2'},
            ],
            data: [
                '/',
                'ss'
            ],
        },

    ]



    render() {
        return (
            <SwipeListView
                style={expenseStyles.dashboardListStyle}
                useSectionList
                keyExtractor={(item, index) =>{
                    return item+index;
                }}
                sections={
                    this.props.data
                }
                renderItem={(item)=>{
                    return <ExpenseTile id={item.item} data={item.section.extra[item.index]}/>
                }}
                renderSectionHeader={({section})=>(
                    <ListHeader date={section.head.date}/>
                )}
                renderHiddenItem={(data, rowmap)=>{
                    return <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            margin: 20,
                            flex: 1
                        }}
                    >
                        <ButtonComponent text={data.item}/>
                        <ButtonComponent text='Delete'/>
                    </View>
                }}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
            // <SectionList
            //     style={expenseStyles.dashboardListStyle}
            //     sections={
            //         this.arr
            //     }
            //     renderSectionHeader={({section})=>(
            //         <ListHeader date={section.title}/>
            //     )}
            //     renderItem={(item)=>{
            //         console.log(item);
            //         return <ExpenseTile name={item.item}/>
            //     }}
            //     keyExtractor={item=>item.id}
            //
            // />
        );
    }


}
