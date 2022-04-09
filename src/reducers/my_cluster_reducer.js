import {LOADED, LOADING} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false
};

const myClustersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING:
            return {
                loading: true
            }
        case LOADED:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default myClustersReducer;
