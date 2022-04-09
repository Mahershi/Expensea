import ExpenseService from "../services/expenses_services";
import ExpenseModel from "../models/ExpenseModel";
import CategoryService from "../services/category_services";
import GlobalVars from "../helpers/GlobalVars";
import CategoryModel from "../models/CategoryModel";
import ClusterService from "../services/cluster_service";
import ClusterModel from "../models/ClusterModel";


export default class DashboardController {
    constructor({actions, navigation, reducer}) {
        this.actions = actions;
        this.navigation = navigation;
        this.reducer = reducer;
        this.lastMonths = [];
        this.loadInitial();
        this.gotoAddEditScreenBind = this.gotoAddEditScreen.bind(this);
        this.refreshBind = this.refreshDashboardOnNavigatingBack.bind(this);
        this.gotoMonthBind = this.gotoMonthExpenses.bind(this);
    }

    gotoMonthExpenses({month, year}){
        console.log("GOto: " + month + " " + year)
        this.navigation.navigate('MonthExpenseScreen', {month: month, year: year, navigation: this.navigation});
        console.log("OLD");

        console.log(JSON.stringify(this.data));
    }

    gotoAddEditScreen(){
        let e = ExpenseModel.newDefault();
        this.navigation.navigate('AddEditExpenseScreen', {
            expense: e,
            backToDashboard: true,
            backToMonthly: false,
            // not really using refreshCallback anymore due to binding issues
            dashboardRefreshCallback: this.refreshBind,
        });
    }

    lastThreeMonths(){
        let today = new Date();
        this.lastMonths = [];
        let curMonth = today.getMonth()+1;
        let curYear = today.getFullYear();
        for(let i=0; i<3; i++){
            if(curMonth - i < 1){
                curMonth = 12 + i;
                curYear--;
            }
            this.lastMonths.push({
                month: curMonth - i,
                year: curYear
            });

        }
        console.log("MOnths: " + JSON.stringify(this.lastMonths));
    }

    async loadInitial(){
        this.lastThreeMonths();
        this.actions.loadDashboard();
        this.initAllCategories();
        this.fetchUserClusters();
        await this.fetchCurrentMonthExpenses();
        this.fetchUserDateSpan();
        this.actions.dashboardLoaded(this.data['data']);
    }

    async refreshDashboardOnNavigatingBack(){
        console.log("Refreshing");
        this.actions.loadDashboard();
        await this.fetchCurrentMonthExpenses();
        this.actions.dashboardLoaded(this.data['data'])
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

    async fetchUserDateSpan(){
        console.log('fetching date span');
        let responseData = await ExpenseService.getDateSpanForUser();
        GlobalVars.oldestMonth = responseData['data']['oldest_month'];
        GlobalVars.latestMonth = responseData['data']['latest_month'];
        GlobalVars.oldestYear = responseData['data']['oldest_year'];
        GlobalVars.latestYear = responseData['data']['latest_year'];
    }

    async fetchCurrentMonthExpenses(){
        let today = new Date();
        this.data = await ExpenseService.fetchForMonthDayWise(today.getMonth()+1, today.getFullYear());
        console.log('DAYA');
        console.log(this.data);
        this.data = GlobalVars.reformatDayWiseData(this.data);

        // let newData = []
        // Object.keys(this.data['data']['days']).forEach((e)=>{
        //     // console.log(e);
        //     let temp = {}
        //     temp['extra'] = this.data['data']['days'][e]['expenses'];
        //     temp['data'] = []
        //     this.data['data']['days'][e]['expenses'].forEach((e)=>{
        //         temp['data'].push(e['id'])
        //     })
        //     console.log("\n\n");
        //     temp['head'] = {}
        //     temp['head']['date'] = e
        //     temp['head']['total'] = this.data['data']['days'][e]['total']
        //     newData.push(temp)
        // })
        //
        // // newData.forEach((e)=>{
        // //     console.log(e);
        // // })
        // this.data['data']['days'] = newData

    }


}
