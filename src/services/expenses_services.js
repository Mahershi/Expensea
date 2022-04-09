import {RestService} from "../network/config";
import {API} from "../network/APIs";
import GlobalVars from "../helpers/GlobalVars";
import ExpenseModel from "../models/ExpenseModel";

// TODO: UnComment Global Var
export default class ExpenseService {
    static async createNew({expense}){
        console.log("TOJSON");
        console.log(expense.toJson());
        return await RestService.request({
            endpoint: API.expenses,
            method: 'post',
            data: expense.toJson()
        })
    }

    static async updateExpense({expense}){
        return await RestService.request({
            endpoint: API.expenses + expense.id + '/',
            method: 'patch',
            data: expense.toJson()
        })
    }

    static async fetchCurrentMonthExpenses() {
        const today = new Date();
        console.log("Cur month");
        console.log(today.getMonth() + 1);

        return await RestService.request(
            {
                endpoint: API.expenses,
                queryParams: {
                    'month': (today.getMonth() + 1),
                    'year': today.getFullYear(),
                    // 'user_id': GlobalVars.currentUser.id,
                    'user_id': 1,
                }
            }
        )
    }

    static async fetchForMonthDayWise(month, year){
        const today = new Date();
        // console.log("Cur month");
        // console.log(today.getMonth() + 1);

        return await RestService.request(
            {
                endpoint: API.month_daywise,
                queryParams: {
                    'month': month,
                    'year': year,
                    // 'user_id': GlobalVars.currentUser.id,
                    'user_id': 1,
                }
            }
        )
    }

    //TODO: GlobalVar Config
    static async getDateSpanForUser() {
        return await RestService.request({
            endpoint: API.date_span,
            queryParams: {
                // user_id: GlobalVars.currentUser.id,
                user_id: 1
            }
        })
    }
}
