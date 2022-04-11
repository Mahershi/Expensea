/**
* file: clusterDetailActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for Cluster Detail Page
* */

import {LOADED, LOADING} from "../constants/actionConstants";


/**
 * loadCluster: method
 * purpose: change Cluster Detail Screen state to 'loading'
 * @param none
 * @returns {{type: string}}
 */
export function loadCluster(){
    return {
        type: LOADING
    }
}

/**
 * clusterLoaded: method
 * purpose: change Cluster Detail Screen state to 'loaded' and provide the new data to the state.
 * @param data
 * @returns {{payload, type: string}}
 */
export function clusterLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
