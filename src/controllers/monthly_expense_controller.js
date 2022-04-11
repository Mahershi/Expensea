/**
* file: monthly_expense_controller.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Controller Class for MonthlyExpense Screen
* */

import GlobalVars from "../helpers/GlobalVars";
import ExpenseService from "../services/expenses_services";
import CategoryService from "../services/category_services";
import CategoryModel from "../models/CategoryModel";
import ClusterService from "../services/cluster_service";
import ClusterModel from "../models/ClusterModel";
import ExpenseModel from "../models/ExpenseModel";


/**
 * MonthlyExpenseController
 * purpose: Controller for MonthlyExpenseScreen.
 * Handles all the user events and screen state activities.
 */
export default class MonthlyExpenseController{
    constructor({navigation, month, year, reducer, actions}) {
        this.data = [];
        this.actions = actions;
        this.reducer = reducer
        this.navigation = navigation;
        this.currentMonth = month;
        this.currentYear = year;
        this.monthsIndex = [];
        this.years = [];
        this.setUpMonthYear();
        this.getForMonthYearBind = this.getExpensesForMonthYear.bind(this);
        this.refreshBind = this.refreshOnNavigationBack.bind(this);
        this.init();
        this.newForMonthBind = this.gotoAddEditScreenForCurrent.bind(this);
        this.goBackBind = this.goBack.bind(this);
        this.deleteExpenseBind = this.deleteExpense.bind(this);
    }

    /**
     * Navigate Back to Dashboard on pressing the back button.
     */
    goBack(){
        this.navigation.navigate('DashboardScreen', {update: true});
    }

    /**
     * Delete an expense when delete button callback is triggered along with refreshing the screen
     * @param expense
     * @returns {Promise<void>}
     */
    async deleteExpense({expense}){
        //console.log("delete: " + expense.id);
        await ExpenseService.deleteExpense({id: expense.id});
        this.refreshOnNavigationBack();
    }

    /**
     * Navigate to Add/Edit Expense Screen passing the expense object concerned.
     * @returns {Promise<void>}
     */
    async gotoAddEditScreenForCurrent(){
        let e = ExpenseModel.newForMonthYear({monthIndex: this.currentMonth-1, year: this.currentYear});
        this.navigation.navigate('AddEditExpenseScreen', {
            expense: e,
            backToDashboard: false,
            backToMonthly: true,
            // not really using refreshCallback anymore due to binding issues
            dashboardRefreshCallback: this.refreshBind,
        });
    }

    /**
     * Triggered on loading the Screen for the first time
     * Initializes required data and fetches the expenses for the month and year
     * @returns {Promise<void>}
     */
    async init(){
        this.initAllCategories();
        this.fetchUserClusters();
        await this.getExpensesForMonthYear({month: this.currentMonth, year: this.currentYear});
    }

    /**
     * This method is passed to Add/Edit Expense Screen as callback.
     * On Pressed Save on AddEditExpenseScreen, this method is triggered to refresh the screen.
     * Basically indicates a change in data so refresh the screen when navigating back to this screen from
     * AddEditExpenseScreen
     * @returns {Promise<void>}
     */
    async refreshOnNavigationBack(){
        await this.getExpensesForMonthYear({month: this.currentMonth, year: this.currentYear});
    }

    /**
     * Get the expenses for the month of year and initialize local data variable
     * @param month
     * @param year
     * @returns {Promise<void>}
     */
    async getExpensesForMonthYear({month, year}){
        this.actions.loadMonthlyExpense();
        //console.log("For: " + month + " " + year);
        this.data = [];
        // //console.log("Clear");
        // //console.log(JSON.stringify(this.data));
        this.data = await ExpenseService.fetchForMonthDayWise({month: month, year: year});
        // //console.log("DATA fromAPI ");
        // //console.log(JSON.stringify(this.data));
        this.data = GlobalVars.reformatDayWiseData(this.data);
        // //console.log("DATA");
        // //console.log(JSON.stringify(this.data));
        this.actions.monthlyExpenseLoaded(this.data['data']);
    }

    /**
     * Sets up 'months' and 'years' array for the carousel used in MonthYearControlElement.
     */
    setUpMonthYear(){
        this.monthsIndex = [];
        this.years = []
        for(let i = GlobalVars.oldestYear; i<=GlobalVars.latestYear; i++){
            this.years.push(i)
        }
        for(let i = GlobalVars.oldestMonth; i<=GlobalVars.latestMonth; i++){
            this.monthsIndex.push(i);
        }
        //console.log("YEARS hERE");
        //console.log(JSON.stringify(this.years));
    }

    /**
     * Fetch all the available Categories from the service
     * This is required to ensure GlobalVars.categories is initialized so as the display expense category in the
     * ExpenseTile
     * @returns {Promise<void>}
     */
    async initAllCategories(){
        let responseData = await CategoryService.fetchAllCategory();
        if(responseData['success']){
            GlobalVars.categories = [];
            responseData['data'].forEach((json)=>{
                GlobalVars.categories.push(CategoryModel.fromJson(json));
            })
        }
    }

    /**
     * Fetch all user clusters
     * This is required to ensure GlobalVars.clusters is initialized so as the display expense cluster in the
     * ExpenseTile
     * @returns {Promise<void>}
     */
    async fetchUserClusters(){
        let responseData = await ClusterService.fetchUserClusters();
        if(responseData['success']){
            GlobalVars.clusters = [];
            responseData['data'].forEach((json)=>{
                GlobalVars.clusters.push(ClusterModel.fromJson(json));
            })
        }
    }
}
