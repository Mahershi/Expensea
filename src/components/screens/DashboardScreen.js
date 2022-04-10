import React, {Component} from "react";
import {dashboardPage} from "../../styles/styles";
import {Text, TouchableNativeFeedback, View} from 'react-native';
import MonthExpenseBrief from "../elements/MonthExpenseBrief";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardList from "../elements/DashboardList";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {dashboardLoaded, loadDashboard} from "../../actions/dashboardActions";
import DashboardController from "../../controllers/dashboard_controller";
import CustomLoader from "../elements/CustomLoader";
import PreviousMonths from "../elements/PreviousMonths";
import AddButtonComponent from "../elements/AddButtonComponent";


class DashboardScreen extends Component{
    constructor(props) {
        super(props);
        const {reducer, actions, navigation} = this.props;
        this.controller = new DashboardController({actions: actions, navigation: navigation, reducer: reducer});
        console.log("Dashboard Reducer")
        console.log(reducer);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        console.log("In COMP Update");
        console.log()
        if(this.props.route.params?.update == true){
            console.log("Did Update");
            this.controller.refreshBind();
            this.props.route.params.update = false;
        }

    }

    render() {
        const {reducer} = this.props;
        // console.log("RE Dashboard Reducer")
        // console.log(reducer);
        console.log("Rendering Dashboard");
        console.log(reducer);
        return (
          <View
            style={{flex: 1}}
          >
              {reducer.loading ? <CustomLoader invert={false}/> : null}
              <View
                style={dashboardPage.bottomContainer}
              >
                  <AddButtonComponent invert={true} callBack={this.controller.gotoAddEditScreenBind}/>
                  <View style={{flex: 1}}/>
                  <MonthExpenseBrief month={reducer['data']['month']} total={reducer['data']['monthTotal']}/>
                  <View style={{flex: 1}}/>
                  <TouchableNativeFeedback
                    onPress={()=>{
                        this.props.navigation.push('MenuScreen');
                    }}
                  >
                      <Icon
                          name='account'
                          size={54}
                      />
                  </TouchableNativeFeedback>

              </View>
              <View
                  style={dashboardPage.topContainer}
              >

                  <PreviousMonths months={this.controller.lastMonths} callback={this.controller.gotoMonthBind}/>
                  <DashboardList
                      deleteCallback={this.controller.deleteExpenseBind}
                      data={reducer['data']['days']}
                      refreshCallback={this.controller.refreshBind}
                      navigation={this.props.navigation}
                  />
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

