/**
* file: menuActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for Menu Page
* */

import {LOADED_LOGOUT, LOADING_LOGOUT} from "../constants/actionConstants";


/**
 * doLogout: method
 * purpose: change MenuScreen state to 'loading'
 * @returns {{type: string}}
 */
export function doLogout() {
    return{
        type: LOADING_LOGOUT,
    };
}

/**
 * logoutDone: method
 * purpose: change MenuScreen state to 'loaded'
 * @returns {{type: string}}
 */
export function logoutDone() {
    return {
        type: LOADED_LOGOUT
    };
}
