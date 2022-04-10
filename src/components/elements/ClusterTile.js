import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {myClusters} from "../../styles/clusters_styles";
import CustomSpacer from "./CustomSpacer";

export default class ClusterTile extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    console.log("taop");
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
