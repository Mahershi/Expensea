/**
* file: ClusterModel.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Model Class for Clusters
* */

import GlobalVars from "../helpers/GlobalVars";

export default class ClusterModel{
    id;
    name;
    created_date;
    expenses;
    user_id;


    /**
     * Create a cluster object with initialized user_id
     * @returns {ClusterModel}
     */
    static newDefault(){
        let c = new ClusterModel();
        c.id = null;
        // c.user_id = 1;
        c.user_id = GlobalVars.currentUser.id;
        c.expenses = 0;
        c.created_date = null;
        return c;
    }

    /**
     * returns a copy of the provided cluster model
     * @returns {ClusterModel}
     */
    returnCopy(){
        let copy = new ClusterModel();
        copy.id = this.id;
        copy.user_id = this.user_id;
        copy.name = this.name;
        copy.expenses = this.expenses;

        return copy;

    }

    /**
     * Create ClusterModel object from the given json data
     * @param json
     * @returns {ClusterModel}
     */
    static fromJson(json){
        let c = new ClusterModel();
        c.id = json['id'] ? json['id'] : '';
        c.name = json['name'] ? json['name'] : '';
        c.created_date = json['created_date'] ? json['created_date'] : '';
        c.expenses = json['expenses'] ? json['expenses'] : '0';
        c.user_id = json['user_id'] ? json['user_id'] : '';

        return c;
    }

    /**
     * Returns Dictionary/Json for the instance to send over API
     * @returns {{}}
     */
    toJson(){
        let dict = {}
        dict['name'] = this.name;
        dict['created_date'] = this.created_date;
        dict['expenses'] = this.expenses;
        dict['user_id'] = this.user_id;
        return dict;
    }

    /**
     * Returns dictionary/json for instance to send over specific API
     * @returns {{}}
     */
    toPatchJson(){
        let dict = {}
        dict['name'] = this.name;
        return dict;
    }

    /**
     * Get Cluster Object for the id provided
     * @param id
     * @param arr
     * @returns {ClusterModel|null}
     */
    static getObjectById({id, arr = GlobalVars.clusters}){
        for(let i=0; i<arr.length; i++){
            if(arr[i].id == id){
                return arr[i];
            }
        }
        return null;
    }
}
