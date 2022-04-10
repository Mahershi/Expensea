import MyGoogleSignIn from "../helpers/googleSignin";

export default class MenuController{
    constructor({reducer, navigation, actions}) {
        this.reducer = reducer;
        this.navigation = navigation;
        this.actions = actions;
        this.logoutBind = this.logout.bind(this);
    }

    async logout(){
        this.actions.doLogout();
        await MyGoogleSignIn.singOut();
        this.actions.logoutDone();
        this.navigation.navigate('LoginScreen');
    }

}
