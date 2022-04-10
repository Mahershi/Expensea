import ExpenseService from "../services/expenses_services";
import GlobalVars from "../helpers/GlobalVars";
import ExpenseModel from "../models/ExpenseModel";

export default class ClusterDetailController {
    constructor({navigation, reducer, actions, cluster}) {
        this.navigation = navigation;
        this.actions = actions;
        this.reducer = reducer;
        this.data = [];
        this.cluster = cluster;
        this.reload();
        this.reloadBind = this.reload.bind(this)
        this.addExpenseBind = this.addNewExpenseForCluster.bind(this);
        this.deleteExpenseBind = this.deleteExpense.bind(this);
    }

    async deleteExpense({expense}){
        console.log("delete: " + expense.id);
        await ExpenseService.deleteExpense({id: expense.id});
        this.reloadBind();
    }

    addNewExpenseForCluster(){
        let e = ExpenseModel.newDefault();
        e.clusterId = this.cluster.id;
        this.navigation.navigate('AddEditExpenseScreen', {
            expense: e,
            backToDashboard: false,
            backToMonthly: false,
            backToCluster: true,
            clusterReloadBind: this.reloadBind
        });
    }

    async reload(){
        this.data = []
        this.actions.loadCluster();
        await this.fetchClusterExpenses();
        this.actions.clusterLoaded(this.data['data'])
    }

    async fetchClusterExpenses(){
        this.data = await ExpenseService.fetchForMonthDayWise({cluster: this.cluster.id});
        console.log('DAYA');
        console.log(this.data);
        this.data = GlobalVars.reformatDayWiseData(this.data);
    }

}
