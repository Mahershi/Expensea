import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator, Modal} from 'react-native';
import {loginPage} from "../../styles/styles";
import AppTitle from "../elements/AppTitle";
import LoginButton from "../elements/LoginButton";
import {connect} from "react-redux";
import {doLogin, loginDone} from "../../actions/loginActions";
import {bindActionCreators} from 'redux';
import LoginController from "../../controllers/login_controller";
import CustomLoader from "../elements/CustomLoader";


class LoginScreen extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        const {actions, reducer, navigation} = this.props;
        this.controller = new LoginController(actions, reducer, navigation);
    }

    render() {
        const {reducer} = this.props;
        console.log("in render");
        return (
            <View
                style={loginPage.pageStyle}
            >
                {reducer.loading ? <CustomLoader invert={true}/> : null}
                <View
                    style={loginPage.topContainer}
                >
                    <AppTitle />
                </View>
                <View
                    style={loginPage.bottomContainer}
                >
                    <LoginButton callBack={this.controller.doGoogleLoginInBind}/>
                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        reducer: state.loginReducer
    };
}

const ActionCreators = Object.assign({}, {doLogin, loginDone});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


