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
        // console.log("length:" + this.props.data.length)
        return (
            <SwipeListView
                style={expenseStyles.dashboardListStyle}
                useSectionList
                sections={
                    this.props.data
                }
                renderItem={(item)=>{
                    // console.log("ITEM");
                    // console.log(item.index);
                    // console.log(item);
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
                    // console.log("HIDDEN: " + JSON.stringify())
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
