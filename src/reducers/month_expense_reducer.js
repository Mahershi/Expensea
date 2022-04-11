/*
* file: month_expense_reducer.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer for MonthlyExpenses Screen
* */

import {LOADED, LOADING} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false,
    data: {
        'monthTotal': 0,
        'days': [],
        'month': 0
    }
}

const monthExpenseReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING:
            return {
                loading: true,
                data: {
                    'monthTotal': 0,
                    'days': [],
                    'month': 0
                }
            }
        case LOADED:
            return {
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}

export default monthExpenseReducer;
