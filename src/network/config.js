import axios from 'axios';
import {MyAppConfig} from "../AppConfig";

export class RestService{
    static baseUrl = MyAppConfig.Config.baseUrl;

    static async request(
        {
            endpoint,
            method = 'get',
            queryParams = {},
            data = {},
            auth = false
        }
    ){
        const configurationObj = {
            method: method,
            url: endpoint,
            baseURL: this.baseUrl,
            params: queryParams,
            data: data
        }

        console.log("API CONFIG");
        console.log(configurationObj);

        const response = await axios.request(configurationObj, )
        console.log("Response");
        console.log(response.status);
        console.log(response.data);

        return response.data;
    }
}
