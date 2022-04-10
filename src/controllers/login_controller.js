import MyGoogleSignIn from "../helpers/googleSignin";
import LoginService from "../services/login_services";
import GlobalVars from "../helpers/GlobalVars";
import UserModel from "../models/UserModel";

export default class LoginController{
    constructor(actions, reducer, navigation) {
        this.actions = actions;
        this.reducer = reducer;
        this.navigation = navigation;

        this.doGoogleLoginInBind = this.doGoogleLoginIn.bind(this);
        this.doneLoginBind = this.doneLogin.bind(this);
    }

    async doGoogleLoginIn(){
        await MyGoogleSignIn.signInUsingGoogle().then(async (val)=>{
            if(val === null){

            }else{
                this.actions.doLogin();
                console.log(JSON.stringify(val.user));
                let data = await LoginService.checkExists(val.user.email);
                if(data['success'] == 'true'){
                    try{
                        console.log("success");
                        GlobalVars.currentUser = UserModel.fromJson(data['data']);
                    }catch(err){
                        console.log("Err: " + err)
                    }
                    this.navigation.navigate('DashboardScreen');
                }else{
                    console.log("does not exist");
                    let data = await LoginService.createNew({
                        email: val.user.email,
                        name: val.user.name,
                        password: 'mahershi',
                        uname: val.user.name.split('@')[0]
                    });
                    if(data['success'] == 'true'){
                        try{
                            console.log("success");
                            GlobalVars.currentUser = UserModel.fromJson(data['data']['user']);
                        }catch(err){
                            console.log("Err: " + err)
                        }
                        this.navigation.navigate('DashboardScreen');
                    }else{

                    }
                }
                this.doneLoginBind();
            }

        });
    }

    doneLogin(){
        this.actions.loginDone();
    }


}
