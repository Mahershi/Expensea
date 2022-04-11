/**
* file: googleSignIn.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Helper Class MyGoogleSignIn which encapsulates all the process concerning GoogleSignIn and GoogleSignOut.
* */

import {GoogleSignin} from "@react-native-google-signin/google-signin";

/**
 * MyGoogleSignIn
 * Custom sign in class to encapsulate business logic for google sign in and sign out.
 */
export default class MyGoogleSignIn{
    /**
     * Initialize GoogleSignIn
     * Called before application's initial screen is loaded
     */
    static init(){
        try {
            GoogleSignin.configure({
                androidClientId: '164203539530-n9o0ohjqnmunag3fq0360df3as5esf4e.apps.googleusercontent.com'
            });
        }catch(err){
            //console.log("GOOGLE INIT ERROR: " + err);
        }
    }

    /**
     * google sign in
     * @returns {Promise<*|boolean>}
     */
    static async signInUsingGoogle(){
        let user;
        return GoogleSignin.hasPlayServices().then((hasPlayServices)=>{
            if(hasPlayServices){
                return GoogleSignin.signIn().then((userInfo)=>{
                    //console.log("userinto");
                    //console.log(JSON.stringify(userInfo))
                    user = userInfo;
                    return user;
                }).catch((err)=>{
                    //console.log("Err: " + err);
                    user = null;
                    return user;
                })
            }
        }).catch((err)=>{
            //console.log("ERR 1: " + err);
            user = null;
            return user;
        })

    }

    /**
     * google sign out
     * @returns {Promise<void>}
     */
    static async singOut(){
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
    }
}
