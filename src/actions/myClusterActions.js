import {LOADED, LOADING} from "../constants/actionConstants";

export function loadMyClusters() {
    return{
        type: LOADING,
    };
}

export function myClustersLoaded() {
    return {
        type: LOADED
    };
}
