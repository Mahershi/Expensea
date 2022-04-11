/**
* file: myClusterActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for My Clusters Page
* */

import {LOADED, LOADING} from "../constants/actionConstants";


/**
 * loadMyClusters: method
 * purpose: change MyClusters Screen state to 'loading'
 * @param none
 * @returns {{type: string}}
 */
export function loadMyClusters() {
    return{
        type: LOADING,
    };
}

/**
 * myClustersLoaded: method
 * purpose: change MyClusters Screen state to 'loaded'
 * @param none
 * @returns {{type: string}}
 */
export function myClustersLoaded() {
    return {
        type: LOADED
    };
}
