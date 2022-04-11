/**
* file: monthExpenseActions.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Reducer Action file for Monthly Expenses Page
* */

import {LOADED, LOADING} from "../constants/actionConstants";


/**
 * loadMonthlyExpense: method
 * purpose: change MonthlyExpense Screen state to 'loading'
 * @param none
 * @returns {{type: string}}
 */
export function loadMonthlyExpense(){
    return {
        type: LOADING
    }
}

/**
 * monthlyExpenseLoaded: method
 * purpose: change MonthlyExpense Screen state to 'loaded' and provide the new data to the state
 * @param data
 * @returns {{payload, type: string}}
 */
export function monthlyExpenseLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
