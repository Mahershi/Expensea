import UserModel from "../models/UserModel";
import CategoryModel from "../models/CategoryModel";
import ClusterModel from "../models/ClusterModel";

export default class GlobalVars {
    static categories: Array<CategoryModel> = [];
    static clusters: Array<ClusterModel> = [];
    static currentUser;

    static months = [
        '',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
}
