/*
* file: login_service.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: API calls concerning Login / User
* */

import {RestService} from "../network/config";
import {API} from "../network/APIs";

/**
 * LoginService
 */
export default class LoginService{
    /**
     * API call to check if user exist.
     * @param email
     * @returns {Promise<*>}
     */
    static async checkExists(email){
        let responseData = await RestService.request(
            {
                endpoint: API.checkExists,
                method: 'post',
                data: {
                    'email': email
                }
            }
        )
        return responseData;
    }

    /**
     * Api call to create a user
     * @param email
     * @param password
     * @param name
     * @param uname
     * @returns {Promise<*>}
     */
    static async createNew({email, password, name, uname}){
        return await RestService.request({
            endpoint: API.users,
            method: 'post',
            data: {
                'email': email,
                'uname': uname,
                'password': password,
                'name': name
            }
        })
    }
}
