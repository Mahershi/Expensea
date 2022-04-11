/*
* file: login_reducer.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer for Login Screen
* */

import {LOADED_LOGIN, LOADING_LOGIN} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_LOGIN:
            return {
                loading: true
            }
        case LOADED_LOGIN:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default loginReducer;
