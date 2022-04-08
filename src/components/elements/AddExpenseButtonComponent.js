import React, {Component} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";

export default class AddExpenseButtonComponent extends Component{
    render() {
        return (
            <View
                style={{
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                <TouchableNativeFeedback
                    onPress={()=>{
                        this.props.callBack();
                    }}
                >
                    <View
                        style={{
                            borderColor: this.props.invert ? Color.textColor : Color.primaryColor,
                            borderRadius: 12,
                            borderWidth: 1,
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Icon
                            name='plus'
                            color={this.props.invert ? Color.textColor : Color.primaryColor}
                            size={24}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
