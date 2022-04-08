import {RestService} from "../network/config";
import {API} from "../network/APIs";
import GlobalVars from "../helpers/GlobalVars";


// TODO: UnComment Global Var
export default class ExpenseService {
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

    static async fetchForMonthDayWise(){
        const today = new Date();
        console.log("Cur month");
        console.log(today.getMonth() + 1);

        return await RestService.request(
            {
                endpoint: API.month_daywise,
                queryParams: {
                    'month': (today.getMonth() + 1),
                    'year': today.getFullYear(),
                    // 'user_id': GlobalVars.currentUser.id,
                    'user_id': 1,
                }
            }
        )
    }
}
