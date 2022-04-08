import React, {Component} from "react";
import {dashboardPage} from "../../styles/styles";
import {View} from 'react-native';
import MonthExpenseBrief from "../elements/MonthExpenseBrief";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardList from "../elements/DashboardList";
import AddExpenseButtonComponent from "../elements/AddExpenseButtonComponent";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {dashboardLoaded, loadDashboard} from "../../actions/dashboardActions";
import DashboardController from "../../controllers/dashboard_controller";
import CustomLoader from "../elements/CustomLoader";


class DashboardScreen extends Component{
    constructor(props) {
        super(props);
        const {reducer, actions, navigation} = this.props;
        this.controller = new DashboardController({actions: actions, navigation: navigation, reducer: reducer});
        // console.log("Dashboard Reducer")
        // console.log(reducer);
    }

    render() {
        const {reducer} = this.props;
        // console.log("RE Dashboard Reducer")
        // console.log(reducer);

        return (
          <View
            style={{flex: 1}}
          >
              {reducer.loading ? <CustomLoader invert={false}/> : null}
              <View
                style={dashboardPage.bottomContainer}
              >
                  <AddExpenseButtonComponent invert={true}/>
                  <View
                    style={{flex: 1}}
                  ></View>
                  <MonthExpenseBrief month={reducer['data']['month']} total={reducer['data']['monthTotal']}/>
                  <View
                      style={{flex: 1}}
                  ></View>
                  <Icon
                      name='account'
                      size={54}
                  ></Icon>
              </View>
              <View
                  style={dashboardPage.topContainer}

              >
                  <DashboardList data={reducer['data']['days']}/>
              </View>
          </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.dashboardReducer
    };
}

const ActionCreators = Object.assign({}, {loadDashboard, dashboardLoaded});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)

