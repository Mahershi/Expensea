/*
* file: category_service.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: API calls for Categories.
* */

import {RestService} from "../network/config";
import {API} from "../network/APIs";

/**
 * CategoryService
 */
export default class CategoryService{
    /**
     * API call to fetch all the categories
     * @returns {Promise<*>}
     */
    static async fetchAllCategory(){
        return await RestService.request({
            endpoint: API.categories,
        });
    }
}
