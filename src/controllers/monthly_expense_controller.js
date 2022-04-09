import GlobalVars from "../helpers/GlobalVars";
import ExpenseService from "../services/expenses_services";
import CategoryService from "../services/category_services";
import CategoryModel from "../models/CategoryModel";
import ClusterService from "../services/cluster_service";
import ClusterModel from "../models/ClusterModel";
import ExpenseModel from "../models/ExpenseModel";

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
    }

    goBack(){
        this.navigation.navigate('DashboardScreen', {update: true});
    }

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

    async init(){
        this.initAllCategories();
        this.fetchUserClusters();
        await this.getExpensesForMonthYear({month: this.currentMonth, year: this.currentYear});
    }

    async refreshOnNavigationBack(){
        await this.getExpensesForMonthYear({month: this.currentMonth, year: this.currentYear});
    }


    async getExpensesForMonthYear({month, year}){
        this.actions.loadMonthlyExpense();
        console.log("For: " + month + " " + year);
        this.data = [];
        // console.log("Clear");
        // console.log(JSON.stringify(this.data));
        this.data = await ExpenseService.fetchForMonthDayWise(month, year);
        // console.log("DATA fromAPI ");
        // console.log(JSON.stringify(this.data));
        this.data = GlobalVars.reformatDayWiseData(this.data);
        // console.log("DATA");
        // console.log(JSON.stringify(this.data));
        this.actions.monthlyExpenseLoaded(this.data['data']);
    }

    setUpMonthYear(){
        this.monthsIndex = [];
        this.years = []
        for(let i = GlobalVars.oldestYear; i<=GlobalVars.latestYear; i++){
            this.years.push(i)
        }
        for(let i = GlobalVars.oldestMonth; i<=GlobalVars.latestMonth; i++){
            this.monthsIndex.push(i);
        }
        console.log("YEARS hERE");
        console.log(JSON.stringify(this.years));
    }

    async initAllCategories(){
        let responseData = await CategoryService.fetchAllCategory();
        if(responseData['success']){
            GlobalVars.categories = [];
            responseData['data'].forEach((json)=>{
                GlobalVars.categories.push(CategoryModel.fromJson(json));
            })
        }
    }

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
