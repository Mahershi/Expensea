import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {myClusters} from "../../styles/clusters_styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import CustomSpacer from "../elements/CustomSpacer";
import {SwipeListView} from "react-native-swipe-list-view";
import {expenseStyles} from "../../styles/styles";
import ClusterTile from "../elements/ClusterTile";
import IconButtonComponent from "../elements/IconButtonComponent";
import MyClusterController from "../../controllers/my_clusters_controller";
import {bindActionCreators} from "redux";
import {loadMyClusters, myClustersLoaded} from "../../actions/myClusterActions";
import {connect} from "react-redux";
import CustomLoader from "../elements/CustomLoader";
import GlobalVars from "../../helpers/GlobalVars";
import AddButtonComponent from "../elements/AddButtonComponent";
import Color from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class MyClustersScreen extends Component{
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

        const {reducer, actions, navigation} = this.props;
        this.controller = new MyClusterController({
            navigation: navigation,
            reducer: reducer,
            actions: actions
        });
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if(this.props.route.params?.update == true){
            this.controller.reloadBind();
            this.props.route.params.update = false;
        }

    }

    render() {
        const {reducer} = this.props;
        console.log("Reducer");
        console.log(JSON.stringify(reducer));
        return (
            <View style={myClusters.root}>
                {reducer.loading ? <CustomLoader invert={true}/> : null}
                <View style={myClusters.bottomContainer}>
                    <View style={{
                        marginTop: -20
                    }}>
                        <BackButtonComponent invert={false} callback={()=>{
                            this.props.navigation.goBack();
                        }} enable={true}/>
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
                        <AddButtonComponent invert={false} callBack={this.controller.addNewBind}/>
                    </View>
                </View>
                <View style={myClusters.topContainer}>
                    <SwipeListView
                        style={expenseStyles.dashboardListStyle}

                        keyExtractor={(item, index) =>{
                            return item+index;
                        }}

                        data={GlobalVars.clusters}
                        renderItem={(item)=>{
                            return <ClusterTile cluster={item.item} navigation={this.controller.navigation}/>
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
                                <TouchableNativeFeedback
                                    onPress={()=>{
                                        this.controller.editClusterBind({cluster: data.item})
                                    }
                                    }
                                >
                                    <View
                                        style={{
                                            backgroundColor: Color.textColor,
                                            padding: 12,
                                            borderRadius: 20,
                                        }}
                                    >
                                        <Icon
                                            name='pen'
                                            size={32}
                                            color={Color.primaryColor}
                                        />
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback
                                    onPress={()=>{
                                        this.controller.deleteCluster({id: data.item.id})
                                    }
                                    }
                                >
                                    <View
                                        style={{
                                            backgroundColor: Color.textColor,
                                            padding: 12,
                                            borderRadius: 20,
                                        }}
                                    >
                                        <Icon
                                            name='delete'
                                            size={32}
                                            color={Color.primaryColor}
                                        />
                                    </View>
                                </TouchableNativeFeedback>
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

function mapStateToProps(state) {
    return {
        reducer: state.myClusterReducer
    };
}

const ActionCreators = Object.assign({}, {loadMyClusters, myClustersLoaded});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyClustersScreen)
