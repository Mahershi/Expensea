/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Environment, MyAppConfig} from "./src/AppConfig";
import {Provider} from 'react-redux';
import configureStore from "./src/mystore";
import React from 'react';
import MyGoogleSignIn from "./src/helpers/googleSignin";

const store = configureStore();
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

MyGoogleSignIn.init();
MyAppConfig.setEnvironment(Environment.development);
AppRegistry.registerComponent(appName, () => Root);
