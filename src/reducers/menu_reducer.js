/*
* file: menu_reducer.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer for Menu Screen
* */

import {LOADED_LOGOUT, LOADING_LOGOUT} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_LOGOUT:
            return {
                loading: true
            }
        case LOADED_LOGOUT:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default menuReducer;
