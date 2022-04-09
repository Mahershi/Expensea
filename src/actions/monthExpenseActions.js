import {LOADED, LOADING} from "../constants/actionConstants";

export function loadMonthlyExpense(){
    return {
        type: LOADING
    }
}

export function monthlyExpenseLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
