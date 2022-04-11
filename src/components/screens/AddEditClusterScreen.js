/**
* file: AddEditClusterScreen.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Screen Code for Adding of Modying as giving Cluster.
* */

import React, {Component} from "react";
import {View, Text, TextInput, TouchableNativeFeedback} from 'react-native';
import {editCluster} from "../../styles/clusters_styles";
import BackButtonComponent from "../elements/BackButtonComponent";
import CustomSpacer from "../elements/CustomSpacer";

import Color from "../../constants/colors";
import EditClusterController from "../../controllers/edit_cluster_controller";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ClusterModel from "../../models/ClusterModel";

/**
 * AddEditClusterScreen
 * purpose: To add or modify a given cluster
 * props: navigation: navigation
 * props.route.params: cluster: ClusterModel
 */
export default class AddEditClusterScreen extends Component{
    constructor(props) {
        super(props);
        this.cluster = this.props.route.params['cluster'];
        //console.log("TYPE")
        //console.log(this.cluster instanceof ClusterModel);
        //console.log(this.cluster);
        this.newCluster = this.cluster.returnCopy();
        const {navigation} = this.props;
        this.controller = new EditClusterController({navigation});
    }

    render() {
        return (
            <View style={editCluster.root}>
                <View style={editCluster.topRow}>
                    <View style={editCluster.subTopRow}>
                        <BackButtonComponent invert={false} enable={true} callback={()=>{this.props.navigation.goBack()}}/>
                        <CustomSpacer width={20} />
                        <Text style={editCluster.head}>Add/Edit Cluster</Text>
                    </View>
                    <TouchableNativeFeedback
                        onPress={()=>{
                            this.controller.saveBind({cluster: this.newCluster})
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
                                name='check'
                                size={32}
                                color={Color.primaryColor}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <CustomSpacer height={40} />
                <View style={editCluster.inputView}>
                    <TextInput
                        onChangeText={(value) => {
                            //change value and states
                            this.newCluster.name = value;
                            this.setState({});
                        }}
                        style={editCluster.input}
                        placeholder='Cluster Name'
                        value={this.newCluster.name}
                        textAlign='center'
                        placeholderTextColor={Color.primaryColor20}
                    />
                </View>
            </View>
        )
    }
}
