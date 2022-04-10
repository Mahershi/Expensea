import {LOADED, LOADED_LOGIN, LOADING, LOADING_LOGIN} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_LOGIN:
            return {
                loading: true
            }
        case LOADED_LOGIN:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default loginReducer;
