import GlobalVars from "../helpers/GlobalVars";

export default class ClusterModel{
    id;
    name;
    created_date;
    expenses;
    user_id;

    static fromJson(json){
        let c = new ClusterModel();
        c.id = json['id'] ? json['id'] : '';
        c.name = json['name'] ? json['name'] : '';
        c.created_date = json['created_date'] ? json['created_date'] : '';
        c.expenses = json['expenses'] ? json['expenses'] : '';
        c.user_id = json['user_id'] ? json['user_id'] : '';

        return c;
    }

    toMap(){
        let dict = {}
        return dict;
    }

    static getObjectById({id, arr = GlobalVars.clusters}){
        for(let i=0; i<arr.length; i++){
            if(arr[i].id == id){
                return arr[i];
            }
        }
        return null;
    }
}
