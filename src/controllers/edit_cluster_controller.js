import ClusterService from "../services/cluster_service";

export default class EditClusterController{
    constructor({navigation}) {
        this.navigation = navigation;
        this.saveBind = this.saveCluster.bind(this);
    }

    async saveCluster({cluster}){
        if (cluster.id === null){
            console.log("Create new");
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
