import {RestService} from "../network/config";
import {API} from "../network/APIs";

export default class LoginService{
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
