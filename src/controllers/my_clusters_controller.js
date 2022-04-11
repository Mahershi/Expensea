/**
* file: my_clusters_controller.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Controller Class for MyClusters Screen
* */

import ClusterService from "../services/cluster_service";
import GlobalVars from "../helpers/GlobalVars";
import ClusterModel from "../models/ClusterModel";


/**
 * MyClusterController
 * purpose: Controller for MyClustersScreen.
 * Handles all the user events and screen state activities.
 */
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

    /**
     * Delete the provided cluster
     * @param id
     * @returns {Promise<void>}
     */
    async deleteCluster({id}){
        await ClusterService.deleteCluster({id: id});
        this.reload();
    }

    /**
     * Create a scratch ClusterModel with user_id already set the current user and
     * navigate to AddEditClusterScreen
     */
    gotoAddNewCluster(){
        let newCluster = ClusterModel.newDefault();
        this.navigation.navigate('AddEditClusterScreen', {
            cluster: newCluster
        })
    }

    /**
     * Navigate to AddEditClusterScreen providing cluster as argument for modification
     * @param cluster
     */
    gotoEditCluster({cluster}){
        this.navigation.navigate('AddEditClusterScreen', {
            cluster: cluster
        })
    }

    /**
     * Reload MyClusters Screen to refresh any changes
     * @returns {Promise<void>}
     */
    async reload(){
        GlobalVars.clusters = [];
        this.actions.loadMyClusters();
        await this.fetchUserClusters();
        this.actions.myClustersLoaded();
    }

    /**
     * fetch all user clusters
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
