import UserModel from "../models/UserModel";
import CategoryModel from "../models/CategoryModel";
import ClusterModel from "../models/ClusterModel";

export default class GlobalVars {
    static categories: Array<CategoryModel> = [];
    static clusters: Array<ClusterModel> = [];
    static currentUser;
    static oldestMonth = 8;
    static oldestYear = 2020;
    static latestMonth = 4;
    static latestYear = 2022;

    static reformatDayWiseData(data){
        let newData = []
        Object.keys(data['data']['days']).forEach((e)=>{
            // console.log(e);
            let temp = {}
            temp['extra'] = data['data']['days'][e]['expenses'];
            temp['data'] = []
            data['data']['days'][e]['expenses'].forEach((e)=>{
                temp['data'].push(e['id'])
            })
            temp['head'] = {}
            temp['head']['date'] = e
            temp['head']['total'] = data['data']['days'][e]['total']
            newData.push(temp)
        })

        // newData.forEach((e)=>{
        //     console.log(e);
        // })
        data['data']['days'] = newData
        return data;
    }

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

    static monthsShort = [
        '',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ]
}
