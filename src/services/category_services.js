import {RestService} from "../network/config";
import {API} from "../network/APIs";

export default class CategoryService{
    static async fetchAllCategory(){
        return await RestService.request({
            endpoint: API.categories,
        });
    }
}
