import {LOADED, LOADING} from "../constants/actionConstants";

export function doLogin() {
    return{
        type: LOADING,
    };
}

export function loginDone() {
    return {
        type: LOADED
    };
}
