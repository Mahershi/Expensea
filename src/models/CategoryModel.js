/**
* file: CategoryModel.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Model Class for Category of an expense
* */

import GlobalVars from "../helpers/GlobalVars";

/**
 * CategoryModel
 */
export default class CategoryModel{
    id;
    name;
    imageUrl;


    /**
     * Create CategoryModel object from the given json data
     * @param json
     * @returns {CategoryModel}
     */
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

    /**
     * Given Category id, returns object if present in GlobalVars.categories
     * @param id
     * @param arr
     * @returns {CategoryModel}
     */
    static getObjectById({id, arr = GlobalVars.categories}){
        for(let i=0; i<arr.length; i++){
            if(arr[i].id == id){
                return arr[i];
            }
        }
    }
}
