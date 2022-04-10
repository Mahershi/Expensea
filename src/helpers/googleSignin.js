import {GoogleSignin} from "@react-native-google-signin/google-signin";

export default class MyGoogleSignIn{
    static init(){
        try {
            GoogleSignin.configure({
                androidClientId: '164203539530-n9o0ohjqnmunag3fq0360df3as5esf4e.apps.googleusercontent.com'
            });
        }catch(err){
            console.log("GOOGLE INIT ERROR: " + err);
        }
    }

    static async signInUsingGoogle(){
        let user;
        return GoogleSignin.hasPlayServices().then((hasPlayServices)=>{
            if(hasPlayServices){
                return GoogleSignin.signIn().then((userInfo)=>{
                    console.log("userinto");
                    console.log(JSON.stringify(userInfo))
                    user = userInfo;
                    return user;
                }).catch((err)=>{
                    console.log("Err: " + err);
                    user = null;
                    return user;
                })
            }
        }).catch((err)=>{
            console.log("ERR 1: " + err);
            user = null;
            return user;
        })

    }

    static async singOut(){
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
    }
}
