/*
* file: cluster_service.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: API calls for Clusters
* */

import {RestService} from "../network/config";
import {API} from "../network/APIs";
import GlobalVars from "../helpers/GlobalVars";


/**
 * ClusterService
 */
export default class ClusterService{
    /**
     * Api call the fetch all the clusters for current user
     * @returns {Promise<*>}
     */
    static async fetchUserClusters(){
        return await RestService.request({
            endpoint: API.clusters,
            queryParams: {
                'user_id': GlobalVars.currentUser.id,
                // 'user_id': 1
            }
        })
    }

    /**
     * API call to create a cluster for provided data
     * @param data
     * @returns {Promise<*>}
     */
    static async createCluster({data}){
        return await RestService.request({
            endpoint: API.clusters,
            method: 'post',
            data: data
        })
    }

    /**
     * API call the update a cluster based on provided data
     * @param data
     * @param id
     * @returns {Promise<*>}
     */
    static async updateCluster({data, id}){
        return await RestService.request({
            endpoint: API.clusters + id + '/',
            method: 'patch',
            data: data
        })
    }


    /**
     * API call to delete the cluster based on id provided
     * @param id
     * @returns {Promise<*>}
     */
    static async deleteCluster({id}) {
        return await RestService.request({
            endpoint: API.clusters + id + '/',
            method: 'delete',
        })
    }
}
