import {RestService} from "../network/config";
import {API} from "../network/APIs";
import GlobalVars from "../helpers/GlobalVars";


// TODO: UnComment Global Var
export default class ClusterService{
    static async fetchUserClusters(){
        return await RestService.request({
            endpoint: API.clusters,
            queryParams: {
                // 'user_id': GlobalVars.currentUser.user_id,
                'user_id': 1
            }
        })
    }

    static async createCluster({data}){
        return await RestService.request({
            endpoint: API.clusters,
            method: 'post',
            data: data
        })
    }

    static async updateCluster({data, id}){
        return await RestService.request({
            endpoint: API.clusters + id + '/',
            method: 'patch',
            data: data
        })
    }

    static async deleteCluster({id}) {
        return await RestService.request({
            endpoint: API.clusters + id + '/',
            method: 'delete',
        })
    }
}
