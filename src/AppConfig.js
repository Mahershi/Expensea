/*
* file: AppConfig.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Environment Configuration for Application
* */

/**
 * EnvironmentClass
 * To work as enums for AppConfig
 */
export class Environment{
    static development = 'Development';
    static production = 'Production';
    static staging = 'Staging';
}

/**
 * Config class for app
 */
class Config{
    // var baseUrl;
    // static env;

    constructor({baseurl, env}) {
        this.baseUrl = baseurl;
        this.env = env;
    }

}

/**
 * MyAppConfig
 */
export class MyAppConfig{
    static Config;
    static app = 'app/';

    /**
     * Set API base url based on environment
     * @param envString
     */
    static setEnvironment(envString){
        switch (String(envString)){
            case Environment.development:
                this.Config = new Config(
                    {
                        baseurl: "http://172.16.1.67:8000/" + this.app,
                        env: envString
                    }
                );
                break;
            case Environment.production:
                this.Config = new Config(
                    {
                        baseurl: "http://172.16.1.67:8000/",
                        env: envString
                    }
                );
                break;
            default:
                //console.log("defaults");

        }
    }
}
