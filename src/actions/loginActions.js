import {LOADED, LOADED_LOGIN, LOADING, LOADING_LOGIN} from "../constants/actionConstants";

export function doLogin() {
    return{
        type: LOADING_LOGIN,
    };
}

export function loginDone() {
    return {
        type: LOADED_LOGIN
    };
}
