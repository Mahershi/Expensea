import {LOADED, LOADING} from "../constants/actionConstants";

const INITIAL_STATE = {
    loading: false,
    data: {
        'monthTotal': 0,
        'days': [],
        'month': 0
    }
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING:
            return {
                data: {
                    'monthTotal': 0,
                    'days': [],
                    'month': 0
                },
                loading: true,
            }
        case LOADED:
            return {
                loading: false,
                data: action.payload === undefined ? {
                    'monthTotal': 0,
                    'days': [],
                    'month': 0
                } : action.payload
            }
        default:
            return state;
    }
}

export default dashboardReducer;
