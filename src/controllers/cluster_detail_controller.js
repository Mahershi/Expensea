/**
* file: cluster_detail_controller.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Controller Class for Cluster Detail screen
* */

import ExpenseService from "../services/expenses_services";
import GlobalVars from "../helpers/GlobalVars";
import ExpenseModel from "../models/ExpenseModel";

/**
 * ClusterDetailController
 * purpose: Controller for Cluster Detail Screen.
 * Handles all the user events and screen state activities.
 */
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

    /**
     * To delete a given expense
     * @param expense
     * @returns {Promise<void>}
     */
    async deleteExpense({expense}){
        //console.log("delete: " + expense.id);
        await ExpenseService.deleteExpense({id: expense.id});
        this.reloadBind();
    }

    /**
     * Create a new expense instance with the cluster id set to the current cluster represented by the controller.
     * The expense instance is then forwarded to Add/Edit Expense Screen
     */
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

    /**
     * Reload the current Cluster Details Screen
     * @returns {Promise<void>}
     */
    async reload(){
        this.data = []
        this.actions.loadCluster();
        await this.fetchClusterExpenses();
        this.actions.clusterLoaded(this.data['data'])
    }

    /**
     * Fetch the expense for the current cluster in controller and load local data.
     * @returns {Promise<void>}
     */
    async fetchClusterExpenses(){
        this.data = await ExpenseService.fetchForMonthDayWise({cluster: this.cluster.id});
        //console.log('DAYA');
        //console.log(this.data);
        this.data = GlobalVars.reformatDayWiseData(this.data);
    }

}
