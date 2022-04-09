import React, {Component} from "react";
import {View, Text} from 'react-native';
import {myClusters} from "../../styles/clusters_styles";
import CustomSpacer from "./CustomSpacer";

export default class ClusterTile extends Component{
    render() {
        return (
            <View style={myClusters.tileBg}>
                <View style={myClusters.stick} />
                <CustomSpacer width={10} />
                <View style={myClusters.subColumn}>
                    <Text style={myClusters.clusterTitle}>{this.props.name}</Text>
                    <Text style={myClusters.countStyle}>{this.props.count + ' expenses'}</Text>
                </View>
            </View>
        );
    }
}
