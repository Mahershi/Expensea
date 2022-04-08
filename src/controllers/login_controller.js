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
        MyGoogleSignIn.signInUsingGoogle().then(async (g)=>{
            this.actions.doLogin();
            let data = await LoginService.checkExists('mahershi1999@gmail.com');
            if(data['success']){
                try{
                    GlobalVars.currentUser = UserModel.fromJson(data['data']);
                }catch(err){
                    console.log("Err: " + err)
                }
                this.navigation.navigate('DashboardScreen');
            }else{
                // unable to login, show ToastMessage
            }
            this.doneLoginBind();
        });
    }

    doneLogin(){
        this.actions.loginDone();
    }


}
