/*
* file: expenses_service.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: API calls for Expenses
* */

import {RestService} from "../network/config";
import {API} from "../network/APIs";
import GlobalVars from "../helpers/GlobalVars";

/**
 * ExpenseService
 */
export default class ExpenseService {
    /**
     * API call to delete the expense whose id is provied
     * @param id
     * @returns {Promise<*>}
     */
    static async deleteExpense({id}){
        return await RestService.request({
            endpoint: API.expenses + id + '/',
            method: 'delete'
        })
    }

    /**
     * API call to create a new expense using the ExpenseModel instance provided
     * @param expense
     * @returns {Promise<*>}
     */
    static async createNew({expense}){
        //console.log("TOJSON");
        //console.log(expense.toJson());
        return await RestService.request({
            endpoint: API.expenses,
            method: 'post',
            data: expense.toJson()
        })
    }

    /**
     * API call to update an existing Expense
     * @param expense
     * @returns {Promise<*>}
     */
    static async updateExpense({expense}){
        return await RestService.request({
            endpoint: API.expenses + expense.id + '/',
            method: 'patch',
            data: expense.toJson()
        })
    }


    /**
     * Api call to fetch expenses based on parameters.
     * Either of given month of year or for a particular cluster
     * @param month
     * @param year
     * @param cluster
     * @returns {Promise<*>}
     */
    static async fetchForMonthDayWise({month = null, year=null, cluster=null}){
        const today = new Date();
        // //console.log("Cur month");
        // //console.log(today.getMonth() + 1);

        return await RestService.request(
            {
                endpoint: API.month_daywise,
                queryParams: {
                    'month': month,
                    'year': year,
                    'cluster': cluster,
                    'user_id': GlobalVars.currentUser.id,
                    // 'user_id': 1,
                }
            }
        )
    }

    /**
     * API call to get User Date Span
     * User date span is the month/year of oldest expense by user as well the lastest.
     * This helps to create the carousel of month and year for MonthYearControlElement
     * @returns {Promise<*>}
     */
    static async getDateSpanForUser() {
        return await RestService.request({
            endpoint: API.date_span,
            queryParams: {
                user_id: GlobalVars.currentUser.id,
                // user_id: 1
            }
        })
    }
}
