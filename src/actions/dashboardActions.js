import {LOADED, LOADING} from "../constants/actionConstants";

export function loadDashboard(){
    return {
        type: LOADING
    }
}

export function dashboardLoaded(data){
    return {
        type: LOADED,
        payload: data
    }
}
