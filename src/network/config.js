/*
* file: config.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Network Configuration such as Server IP and port.
* Also encapsulates http request using axios which makes it simples to do http calls.
* */

import axios from 'axios';
import {MyAppConfig} from "../AppConfig";

export class RestService{
    static baseUrl = MyAppConfig.Config.baseUrl;

    /**
     * Trigger a http request with configuration based on parameter and return the response data
     * @param endpoint
     * @param method
     * @param queryParams
     * @param data
     * @param auth
     * @returns {Promise<any>}
     */
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
