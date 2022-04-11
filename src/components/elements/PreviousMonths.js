/**
* file: PreviousMonths.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: View Code for Last 3 Months Blocks displayed on Dashboard
* */

import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {prevMonths} from "../../styles/prevmonthstyles";
import CustomSpacer from "./CustomSpacer";
import GlobalVars from "../../helpers/GlobalVars";


/**
 * PreviousMonths
 * purpose: UI Code for Last 3 Months Blocks on Dashboard
 * props: months: Array, callback: function
 */
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
