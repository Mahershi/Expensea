/**
* file: dashboardActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for Dashboard Page
* */

import {LOADED, LOADING} from "../constants/actionConstants";

/**
 * loadDashboard: method
 * purpose: change Dashboard Screen state to 'loading'
 * @param none
 * @returns {{type: string}}
 */
export function loadDashboard(){
    return {
        type: LOADING
    }
}

/**
 * dashboardLoaded: method
 * purpose: change Dashboard Screen state to 'loaded' and provide the new data to the state.
 * @param data
 * @returns {{payload, type: string}}
 */
export function dashboardLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
