/**
* file: menu_controller.js
* author: Mahershi Bhavsar <msb753@uregin.ca>
* Student Id: 200465975
* purpose: Controller Class for Menu Screen
* */

import MyGoogleSignIn from "../helpers/googleSignin";


/**
 * MenuController
 * purpose: Controller for Menu Screen.
 * Handles all the user events and screen state activities.
 */
export default class MenuController{
    constructor({reducer, navigation, actions}) {
        this.reducer = reducer;
        this.navigation = navigation;
        this.actions = actions;
        this.logoutBind = this.logout.bind(this);
    }

    /**
     * Sign out of the google account and navigate to LoginScreen
     * @returns {Promise<void>}
     */
    async logout(){
        this.actions.doLogout();
        await MyGoogleSignIn.singOut();
        this.actions.logoutDone();
        this.navigation.navigate('LoginScreen');
    }

}
