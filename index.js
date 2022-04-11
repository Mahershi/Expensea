/**
 * @format
 */

/*
* file: index.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Entry Point for Application. Includes certain initialization required before launching applications
* initial Screen.
* */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Environment, MyAppConfig} from "./src/AppConfig";
import {Provider} from 'react-redux';
import configureStore from "./src/mystore";
import React from 'react';
import MyGoogleSignIn from "./src/helpers/googleSignin";

// Redux Store Object
const store = configureStore();

// Root Component encapsulating Store
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// initialize Google for login/logout purposes
MyGoogleSignIn.init();

//set app environment
MyAppConfig.setEnvironment(Environment.development);

//entry point
AppRegistry.registerComponent(appName, () => Root);
