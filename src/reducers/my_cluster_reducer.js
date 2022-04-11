/*
* file: my_cluster_reducer.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer for MyClusters Screen
* */

import {LOADED, LOADING} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const myClustersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING:
            return {
                loading: true
            }
        case LOADED:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default myClustersReducer;
