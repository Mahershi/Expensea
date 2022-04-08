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
}
