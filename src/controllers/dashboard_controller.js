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

        let i = this.loadInitial();
    }

    async loadInitial(){
        this.actions.loadDashboard();
        this.initAllCategories();
        this.fetchUserClusters();
        await this.fetchCurrentMonthExpenses();
        this.actions.dashboardLoaded(this.data['data']);
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

    async fetchCurrentMonthExpenses(){
        this.data = await ExpenseService.fetchForMonthDayWise();
        // console.log('DAYA');
        // console.log(this.data);
        let newData = []
        Object.keys(this.data['data']['days']).forEach((e)=>{
            // console.log(e);
            let temp = {}
            temp['extra'] = this.data['data']['days'][e]['expenses'];
            temp['data'] = []
            this.data['data']['days'][e]['expenses'].forEach((e)=>{
                temp['data'].push(e['id'])
            })
            console.log("\n\n");
            temp['head'] = {}
            temp['head']['date'] = e
            temp['head']['total'] = this.data['data']['days'][e]['total']
            newData.push(temp)
        })

        // newData.forEach((e)=>{
        //     console.log(e);
        // })
        this.data['data']['days'] = newData

    }


}
