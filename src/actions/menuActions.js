import {LOADED, LOADED_LOGOUT, LOADING, LOADING_LOGOUT} from "../constants/actionConstants";

export function doLogout() {
    return{
        type: LOADING_LOGOUT,
    };
}

export function logoutDone() {
    return {
        type: LOADED_LOGOUT
    };
}
