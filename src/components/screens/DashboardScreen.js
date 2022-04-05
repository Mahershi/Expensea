import React, {Component} from "react";
import {dashboardPage} from "../../styles/styles";
import {View} from 'react-native';
import MonthExpenseBrief from "../elements/MonthExpenseBrief";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardList from "../elements/DashboardList";
import AddExpenseButtonComponent from "../elements/AddExpenseButtonComponent";
// import Icon from 'react-native-vector-icons/Ionicons';


export default class DashboardScreen extends Component{
    render() {
        return (
          <View
            style={{flex: 1}}
          >
              <View
                style={dashboardPage.bottomContainer}
              >
                  <AddExpenseButtonComponent invert={true}/>
                  <View
                    style={{flex: 1}}
                  ></View>
                  <MonthExpenseBrief />
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
                  <DashboardList />
              </View>
          </View>
        );
    }
}
