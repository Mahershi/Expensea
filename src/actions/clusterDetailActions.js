import {LOADED, LOADING} from "../constants/actionConstants";

export function loadCluster(){
    return {
        type: LOADING
    }
}

export function clusterLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
