import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../constants/colors";

export default class BackButtonComponent extends Component{
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={()=>{
                    if(this.props.enable){
                        this.props.navigation.goBack();
                    }
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
                        name='chevron-left'
                        color={this.props.invert ? Color.textColor : Color.primaryColor}
                        size={24}
                    />
                </View>
            </TouchableWithoutFeedback>

        );
    }
}
