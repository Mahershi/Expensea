import ExpenseService from "../services/expenses_services";
import ExpenseModel from "../models/ExpenseModel";

export default class EditExpenseController{
    constructor({navigation, backToDashboard, backToMonthly, backToCluster, clusterReloadBind}) {
        this.backToDashboard = backToDashboard;
        this.backToMonthly = backToMonthly;
        this.navigation = navigation;
        this.backToCluster = backToCluster
        this.clusterReloadBind = clusterReloadBind
        // console.log("CB: " + this.goBackCallBack);
        this.saveExpenseBind = this.saveExpense.bind(this);
        console.log("ABC TO C" + backToCluster);
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
                console.log("got true")
                // this.navigation.goBack();
                // this.goBackCallBack();
                if(this.backToDashboard){
                    console.log("back t DB");
                    this.navigation.navigate('DashboardScreen', {update: true})
                }else if(this.backToMonthly){
                    console.log("back t MES");
                    this.navigation.navigate('MonthExpenseScreen', {update: true})
                }else if(this.backToCluster){
                    console.log("Backing to cluster");
                    this.navigation.goBack();
                    this.clusterReloadBind();
                }else{
                    console.log("Else");
                }

            }
        }else{
            console.log("Edit")
            let respData = await ExpenseService.updateExpense({expense: expense});
            if(respData['success'] == 'true'){
                // this.navigation.goBack();
                // this.goBackCallBack();
                if(this.backToDashboard){
                    this.navigation.navigate('DashboardScreen', {update: true})
                }else if(this.backToMonthly){
                    this.navigation.navigate('MonthExpenseScreen', {update: true})
                }
            }
        }
    }

}
