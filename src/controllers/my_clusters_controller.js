import ClusterService from "../services/cluster_service";
import GlobalVars from "../helpers/GlobalVars";
import ClusterModel from "../models/ClusterModel";

export default class MyClusterController{
    constructor({navigation, reducer, actions}) {
        this.navigation = navigation;
        this.reducer = reducer;
        this.actions = actions;
        this.reload();
        this.addNewBind = this.gotoAddNewCluster.bind(this);
        this.reloadBind = this.reload.bind(this);
        this.editClusterBind = this.gotoEditCluster.bind(this);
    }


    async deleteCluster({id}){
        await ClusterService.deleteCluster({id: id});
        this.reload();
    }

    gotoAddNewCluster(){
        let newCluster = ClusterModel.newDefault();
        this.navigation.navigate('AddEditClusterScreen', {
            cluster: newCluster
        })
    }

    gotoEditCluster({cluster}){
        this.navigation.navigate('AddEditClusterScreen', {
            cluster: cluster
        })
    }

    async reload(){
        GlobalVars.clusters = [];
        this.actions.loadMyClusters();
        await this.fetchUserClusters();
        this.actions.myClustersLoaded();
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
