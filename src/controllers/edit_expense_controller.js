import ExpenseService from "../services/expenses_services";
import ExpenseModel from "../models/ExpenseModel";

export default class EditExpenseController{
    constructor({goBackCallback, navigation}) {
        this.goBackCallBack = goBackCallback;
        this.navigation = navigation;
        console.log("CB: " + this.goBackCallBack);
        this.saveExpenseBind = this.saveExpense.bind(this);
    }

    async saveExpense({expense}) {
        console.log("Saving Exp");
        console.log(expense);
        expense = ExpenseModel.fromProp(expense);
        console.log(expense instanceof ExpenseModel)
        if(expense.id === null){
            console.log("New")
            console.log(expense.toJson());
            let respData = await ExpenseService.createNew({expense: expense});
            if(respData['success'] == 'true'){
                this.navigation.goBack();
                this.goBackCallBack();
            }
        }else{
            console.log("Edit")
            let respData = await ExpenseService.updateExpense({expense: expense});
        }
    }

}
