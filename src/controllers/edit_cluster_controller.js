/**
* file: edit_cluster_controller.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Controller Class for Add/Edit Cluster Screen
* */

import ClusterService from "../services/cluster_service";


/**
 * EditClusterController
 * purpose: Controller for Add/Edit Cluster Screen
 * Handles all the user events and screen state activities.
 */
export default class EditClusterController{
    constructor({navigation}) {
        this.navigation = navigation;
        this.saveBind = this.saveCluster.bind(this);
    }

    /**
     * Save the cluster after being edited.
     * @param cluster
     * @returns {Promise<void>}
     */
    async saveCluster({cluster}){
        if (cluster.id === null){
            //console.log("Create new");
            let responseData = await ClusterService.createCluster({data: cluster.toJson()})
            if (responseData['success'] == 'true'){
                this.navigation.navigate('MyClustersScreen', {update: true})
            }
        }else{
            let responseData = await ClusterService.updateCluster({data: cluster.toPatchJson(), id: cluster.id})
            if (responseData['success'] == 'true'){
                this.navigation.navigate('MyClustersScreen', {update: true})
            }
        }
    }

}
