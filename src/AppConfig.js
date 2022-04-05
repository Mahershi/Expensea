export class Environment{
    static development = 'Development';
    static production = 'Production';
    static staging = 'Staging';
}

class Config{
    // var baseUrl;
    // static env;

    constructor({baseurl, env}) {
        this.baseUrl = baseurl;
        this.env = env;
    }

}

export class MyAppConfig{
    static Config;
    static app = 'app/';

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
                console.log("defaults");

        }
    }
}
