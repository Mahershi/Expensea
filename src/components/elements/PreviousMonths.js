import React, {Component} from "react";
import {View, Text, FlatList, TouchableNativeFeedback} from 'react-native';
import {prevMonths} from "../../styles/prevmonthstyles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";

export default class PreviousMonths extends Component{

    render() {
        let tiles = []
        for(let i=this.props.months.length-1; i>=0; i--){
            tiles.push(
                <PrevMonthTile item={this.props.months[i]} callback={this.props.callback}/>
            )
        }

        return (
            <View style={prevMonths.root}>
                {tiles}
            </View>
        )
    }
}

class PrevMonthTile extends Component{
    constructor(props) {
        super(props);
        const {item} = this.props;
        console.log("HEREE");
        console.log(item);
        // console.log(this.item['month']);
        // console.log(this.item['month']);
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                    this.props.callback({month: this.props.item['month'], year: this.props.item['year']});
                }}
            >
                <View style={prevMonths.tileBg}>
                    <Text style={prevMonths.head}>{GlobalVars.monthsShort[this.props.item['month']]}</Text>
                    {/*<Text style={prevMonths.value}>{'$ ' + this.props.item.value}</Text>*/}
                    <CustomSpacer height={10}/>
                    <View style={prevMonths.subRow}>
                        <Text>{'>>'}</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }
}
