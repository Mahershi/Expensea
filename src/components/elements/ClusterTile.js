/**
* file: ClusterTile.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View code for displaying a cluster tile in My Clusters List when provided a cluster as prop.
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {myClusters} from "../../styles/clusters_styles";
import CustomSpacer from "./CustomSpacer";


/**
 * ClusterTile
 * purpose: View code for displaying Cluster Item in MyClusters
 * props: navigation: navigation, cluster: ClusterModel
 */
export default class ClusterTile extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    //console.log("taop");
                    this.props.navigation.navigate('ClusterDetailScreen', {cluster: this.props.cluster})
                }}
            >
                <View style={myClusters.tileBg}>
                    <View style={myClusters.stick} />
                    <CustomSpacer width={10} />
                    <View style={myClusters.subColumn}>
                        <Text style={myClusters.clusterTitle}>{this.props.cluster.name}</Text>
                        <Text style={myClusters.countStyle}>{this.props.cluster.expenses + ' expenses'}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
