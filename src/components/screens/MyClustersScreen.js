import React, {Component} from "react";
import {View, Text} from 'react-native';
import {myClusters} from "../../styles/clusters_styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";
import CustomSpacer from "../elements/CustomSpacer";
import {SwipeListView} from "react-native-swipe-list-view";
import {expenseStyles} from "../../styles/styles";
import ExpenseTile from "../elements/ExpenseTile";
import ListHeader from "../elements/ListHeader";
import ButtonComponent from "../elements/ButtonComponent";
import ClusterTile from "../elements/ClusterTile";
import IconButtonComponent from "../elements/IconButtonComponent";

export default class MyClustersScreen extends Component{
    arr = [
        {
            title: 'One',
            data: 'OneData'
        },
        {
            title: 'Two',
            data: 'TwoData'
        }
    ]
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={myClusters.root}>
                <View style={myClusters.bottomContainer}>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent invert={false} navigation={this.props.navigation} enable={true}/>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={myClusters.head}>
                        <Text style={myClusters.title}>Clusters</Text>
                        <CustomSpacer height={12} />
                        <View>
                            <Text style={myClusters.subHead}>Group expenses by conveniens</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent invert={false} navigation={this.props.navigation} enable={true}/>
                    </View>
                </View>
                <View style={myClusters.topContainer}>
                    <SwipeListView
                        style={expenseStyles.dashboardListStyle}

                        // keyExtractor={(item, index) =>{
                        //     // console.log(item);
                        //     console.log("key: " + item+index);
                        //     return item+index;
                        // }}

                        data={this.arr}
                        renderItem={(item)=>{
                            console.log("ITEM");
                            console.log(item.index);
                            console.log(item);
                            return <ClusterTile name="Nane" count={51}/>
                        }}
                        renderHiddenItem={(data, rowmap)=>{
                            return <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: 'space-between',
                                    marginVertical: 20,
                                    flex: 1
                                }}
                            >
                                <IconButtonComponent iconName='pen'/>
                                <IconButtonComponent iconName='delete'/>
                            </View>
                        }}
                        leftOpenValue={75}
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
