import React, {Component} from "react";
import {View, Text} from 'react-native';
import {clusterDetail, myClusters} from "../../styles/clusters_styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import CustomSpacer from "../elements/CustomSpacer";
import DashboardList from "../elements/DashboardList";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {clusterLoaded, loadCluster} from "../../actions/clusterDetailActions";
import ClusterDetailController from "../../controllers/cluster_detail_controller";
import AddButtonComponent from "../elements/AddButtonComponent";
import CustomLoader from "../elements/CustomLoader";

class ClusterDetailScreen extends Component{
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

    constructor(props) {
        super(props);
        console.log(JSON.stringify(props))
        const {navigation, reducer, actions} = this.props;
        console.log(this.props.route.params);
        const {cluster} = this.props.route.params;
        console.log(cluster);
        this.controller = new ClusterDetailController({
            navigation: navigation,
            reducer: reducer,
            actions: actions,
            cluster: cluster,
        })
    }
    render() {
        const {reducer} = this.props;
        return (
            <View style={clusterDetail.root}>
                {reducer.loading ? <CustomLoader invert={false}/> : null}
                <View style={clusterDetail.bottomContainer}>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent
                            invert={true}
                            enable={true}
                            callback={()=>{
                                this.props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={myClusters.head}>
                        <Text style={clusterDetail.nameHead}>{this.controller.cluster.name}</Text>
                        <CustomSpacer height={8} />
                        <View>
                            <Text style={clusterDetail.total}>{'$ ' + reducer['data']['monthTotal']}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{
                        marginTop: -20
                    }}>
                        <AddButtonComponent
                            invert={true}
                            callBack={this.controller.addExpenseBind}
                        />
                    </View>
                </View>
                <View style={clusterDetail.topContainer}>
                    <DashboardList
                        deleteCallback={this.controller.deleteExpenseBind}
                        data={reducer['data']['days']}
                        // refreshCallback={this.controller.refreshBind}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.clusterDetailReducer
    };
}

const ActionCreators = Object.assign({}, {loadCluster, clusterLoaded});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClusterDetailScreen)
