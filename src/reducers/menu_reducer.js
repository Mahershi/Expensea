import {LOADED, LOADED_LOGOUT, LOADING, LOADING_LOGOUT} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_LOGOUT:
            return {
                loading: true
            }
        case LOADED_LOGOUT:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default menuReducer;
