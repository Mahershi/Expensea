export default class UserModel{
    id;
    name;
    uname;
    email;
    password;
    fcmToken;
    dateJoined;
    imageUrl;
    isSuperUser = false;

    static fromJson(json) {
        let user = new UserModel();
        user.id = json['id'] ? json['id'] : '';
        user.name = json['name'] ? json['name'] : '';
        user.uname = json['uname'] ? json['uname'] : '';
        user.email = json['email'] ? json['email'] : '';
        user.fcmToken = '';
        user.password = '';
        user.dateJoined = json['date_joined'] ? json['date_joined'] : '';
        user.imageUrl = json['image_url'] ? json['image_url'] : '';
        user.isSuperUser = json['is_superuser'] ? json['is_superuser'] : false;

        return user;
    }

    toJson() {
        let dict = {};
        dict['id'] = this.id;

        return dict;
    }
}
