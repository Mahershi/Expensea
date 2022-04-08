import {createStore, combineReducers} from "redux";
import loginReducer from './reducers/login_reducers';
import dashboardReducer from "./reducers/dashboard_reducer";

const rootReducer = combineReducers({
    'loginReducer': loginReducer,
    'dashboardReducer': dashboardReducer
});
const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
