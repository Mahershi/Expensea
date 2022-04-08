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
}
