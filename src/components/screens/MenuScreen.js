import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {menuStyles} from "../../styles/menustyles";
import BackButtonComponent from "../elements/BackButtonComponent";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../../constants/colors";
import CustomSpacer from "../elements/CustomSpacer";
import MenuButton from "../elements/MenuButton";
import LogoutButton from "../elements/LogoutButton";


export default class MenuScreen extends Component{
    render() {
        return (
            <View style={menuStyles.rootContainer}>
                <View style={menuStyles.bottomContainer}>
                    <View style={{
                        alignSelf: 'flex-start'
                    }}>
                        <BackButtonComponent
                            invert={true}
                            callback={()=>{
                                this.props.navigation.navigate('DashboardScreen', {update: true})
                            }}
                            enable={true}
                        />
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={menuStyles.profile}>
                        <View
                            style={menuStyles.iconBorder}
                        >
                            <Icon
                                name='account'
                                size={98}
                                color={Color.textColor}
                            />
                        </View>
                        <CustomSpacer height={12} />
                        <View>
                            <Text style={menuStyles.nameStyle}>Mahershi Bhavsar</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{
                        alignSelf: 'flex-start',
                        opacity: 0,
                    }}>
                        <BackButtonComponent invert={true} enable={false}/>
                    </View>
                </View>
                <View style={menuStyles.topContainer}>
                    <MenuButton
                        title={'My Clusters'}
                        iconName='format-list-bulleted'
                        callback={()=>{
                            this.props.navigation.push('MyClustersScreen')
                        }}
                    />
                    <LogoutButton />
                </View>

            </View>
        );
    }
}
