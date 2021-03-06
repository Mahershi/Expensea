/*
* file: App.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Has Root Component which encapsulates Stack Navigation.
* */

import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "./src/components/screens/LoginScreen";
import DashboardScreen from "./src/components/screens/DashboardScreen";
import MonthlyExpensesScreen from "./src/components/screens/MonthlyExpensesScreen";
import AddEditExpenseScreen from "./src/components/screens/AddEditExpenseScreen";
import {LogBox} from "react-native";
import MenuScreen from "./src/components/screens/MenuScreen";
import MyClustersScreen from "./src/components/screens/MyClustersScreen";
import ClusterDetailScreen from "./src/components/screens/ClusterDetailScreen";
import AddEditClusterScreen from "./src/components/screens/AddEditClusterScreen";

// To disbale yellow warning in debug
LogBox.ignoreAllLogs(true);

// Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * RootComponent
 */
export default class App extends Component{
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false,
              }}
              initialRouteName='LoginScreen'
            >
              <Stack.Screen
                  name="DashboardScreen"
                  component={DashboardScreen}
              />
              <Stack.Screen
                  name="ClusterDetailScreen"
                  component={ClusterDetailScreen}
              />
              <Stack.Screen
                  name="MyClustersScreen"
                  component={MyClustersScreen}
              />
              <Stack.Screen
                  name="AddEditClusterScreen"
                  component={AddEditClusterScreen}
              />
              <Stack.Screen
                  name="MenuScreen"
                  component={MenuScreen}
              />
              <Stack.Screen
                  name="AddEditExpenseScreen"
                  component={AddEditExpenseScreen}
              />
              <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
              />
              <Stack.Screen
                  name="MonthExpenseScreen"
                  component={MonthlyExpensesScreen}
              />


          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}


