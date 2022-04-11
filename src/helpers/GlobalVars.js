/**
* file: GlobalVars.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Contains GlobalVars class to encapsulate all the variables that need to be accessed from any screen
* of the application.
* */

import CategoryModel from "../models/CategoryModel";
import ClusterModel from "../models/ClusterModel";

/**
 * GlobalVars
 * purpose: Class created to contain global variables to access from any point of application
 */
export default class GlobalVars {
    static categories: Array<CategoryModel> = [];
    static clusters: Array<ClusterModel> = [];
    static currentUser;
    static oldestMonth;
    static oldestYear;
    static latestMonth;
    static latestYear;

    /**
     * Reformat Data for expenses to a data structure accessible by SectionList
     * @param data
     * @returns {*}
     */
    static reformatDayWiseData(data){
        let newData = []
        Object.keys(data['data']['days']).forEach((e)=>{
            // //console.log(e);
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
        //     //console.log(e);
        // })
        data['data']['days'] = newData
        return data;
    }

    static days = [
        // 'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

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
