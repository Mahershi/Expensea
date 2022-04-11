/**
* file: MenuScreen.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Screen View Code for Menu Screen, has User Details, Menu Buttons and logout button.
* */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {menuStyles} from "../../styles/menustyles";
import BackButtonComponent from "../elements/BackButtonComponent";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../../constants/colors";
import CustomSpacer from "../elements/CustomSpacer";
import MenuButton from "../elements/MenuButton";
import LogoutButton from "../elements/LogoutButton";
import MenuController from "../../controllers/menu_controller";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {doLogout, logoutDone} from "../../actions/menuActions";
import CustomLoader from "../elements/CustomLoader";

/**
 * MenuScreen
 * purpose: View code for MenuScreen
 * props: actions: actions, reducer: reducer, navigation: navigation
 */
class MenuScreen extends Component{
    constructor(props) {
        super(props);
        const {actions, reducer, navigation} = this.props;
        this.controller = new MenuController({
            actions: actions,
            reducer: reducer,
            navigation: navigation
        });
    }

    render() {
        const {reducer} = this.props;
        return (
            <View style={menuStyles.rootContainer}>
                {reducer.loading ? <CustomLoader invert={true}/> : null}
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
                    <View style={{flex: 1}}/>
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
                    <View style={{flex: 1}}/>
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
                    <LogoutButton callback={()=>{
                        this.controller.logoutBind();
                    }}/>
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.menuReducer
    };
}

const ActionCreators = Object.assign({}, {doLogout, logoutDone});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
