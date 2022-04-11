/**
* file: loginActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for Login Page
* */

import {LOADED_LOGIN, LOADING_LOGIN} from "../constants/actionConstants";

/**
 * doLogin: method
 * purpose: change Login Screen state to 'loading'
 * @returns {{type: string}}
 */
export function doLogin() {
    return{
        type: LOADING_LOGIN,
    };
}


/**
 * loginDone: method
 * purpose: change LoginScreen state to 'loaded'
 * @returns {{type: string}}
 */
export function loginDone() {
    return {
        type: LOADED_LOGIN
    };
}
