import {createStore, combineReducers} from "redux";
import loginReducer from './reducers/login_reducers';
import dashboardReducer from "./reducers/dashboard_reducer";
import monthExpenseReducer from "./reducers/month_expense_reducer";
import myClustersReducer from "./reducers/my_cluster_reducer";
import clusterDetailReducer from "./reducers/cluster_detail_reducer";

const rootReducer = combineReducers({
    'loginReducer': loginReducer,
    'dashboardReducer': dashboardReducer,
    'monthlyExpenseReducer': monthExpenseReducer,
    'myClusterReducer': myClustersReducer,
    'clusterDetailReducer': clusterDetailReducer,
});
const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
