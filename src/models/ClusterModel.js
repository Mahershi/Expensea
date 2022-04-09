import GlobalVars from "../helpers/GlobalVars";

export default class ClusterModel{
    id;
    name;
    created_date;
    expenses;
    user_id;


    // TODO: GLobalVar setup
    static newDefault(){
        let c = new ClusterModel();
        c.id = null;
        c.user_id = 1;
        // c.user_id = GlobalVars.currentUser.user_id;
        c.expenses = 0;
        c.created_date = null;
        return c;
    }

    returnCopy(){
        let copy = new ClusterModel();
        copy.id = this.id;
        copy.user_id = this.user_id;
        copy.name = this.name;
        copy.expenses = this.expenses;

        return copy;

    }

    static fromJson(json){
        let c = new ClusterModel();
        c.id = json['id'] ? json['id'] : '';
        c.name = json['name'] ? json['name'] : '';
        c.created_date = json['created_date'] ? json['created_date'] : '';
        c.expenses = json['expenses'] ? json['expenses'] : '0';
        c.user_id = json['user_id'] ? json['user_id'] : '';

        return c;
    }

    toJson(){
        let dict = {}
        dict['name'] = this.name;
        dict['created_date'] = this.created_date;
        dict['expenses'] = this.expenses;
        dict['user_id'] = this.user_id;
        return dict;
    }

    toPatchJson(){
        let dict = {}
        dict['name'] = this.name;
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
