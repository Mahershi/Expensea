/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Environment, MyAppConfig} from "./src/AppConfig";

MyAppConfig.setEnvironment(Environment.development);
AppRegistry.registerComponent(appName, () => App);
