import GlobalVars from "../helpers/GlobalVars";

export default class CategoryModel{
    id;
    name;
    imageUrl;

    static fromJson(json){
        let c = new CategoryModel();

        c.id = json['id'] ? json['id'] : '';
        c.name = json['name'] ? json['name'] : '';
        c.imageUrl = json['image_url'] ? json['image_url'] : '';

        return c
    }

    toMap(){
        let dict = {}
        dict['id'] = this.id;
        dict['name'] = this.name;
        dict['image_url'] = this.imageUrl;

        return dict;
    }

    static getObjectById({id, arr = GlobalVars.categories}){
        for(let i=0; i<arr.length; i++){
            if(arr[i].id == id){
                return arr[i];
            }
        }
    }
}
