import React, {Component} from "react";
import {View, Text} from 'react-native';
import {clusterDetail, myClusters} from "../../styles/clusters_styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import CustomSpacer from "../elements/CustomSpacer";
import DashboardList from "../elements/DashboardList";

export default class ClusterDetailScreen extends Component{
    arr = [
        {
            head: {
                'date': 'date',
                'total': '2111'
            },
            extra: [
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
            <View style={clusterDetail.root}>
                <View style={clusterDetail.bottomContainer}>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent invert={true} navigation={this.props.navigation} enable={true}/>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={myClusters.head}>
                        <Text style={clusterDetail.totalHead}>Total</Text>
                        <CustomSpacer height={8} />
                        <View>
                            <Text style={clusterDetail.total}>$ 1212</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent invert={true} navigation={this.props.navigation} enable={true}/>
                    </View>
                </View>
                <View style={clusterDetail.topContainer}>
                    <DashboardList
                        data={this.arr}
                        // refreshCallback={this.controller.refreshBind}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        );
    }
}
