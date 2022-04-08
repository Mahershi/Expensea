import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "./src/components/screens/LoginScreen";
import DashboardScreen from "./src/components/screens/DashboardScreen";
import MonthlyExpensesScreen from "./src/components/screens/MonthlyExpensesScreen";
import AddEditExpenseScreen from "./src/components/screens/AddEditExpenseScreen";

const Stack = createNativeStackNavigator();

export default class App extends Component{
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false,
              }}
              initialRouteName='AddEditExpenseScreen'
            >
              <Stack.Screen
                  name="DashboardScreen"
                  component={DashboardScreen}
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


