var User = /** @class */ (function () {
    function User(name, imageURL, color) {
        this.name = name;
        this.imageURL = imageURL;
        this.color = color;
        this.userID = "id" + Math.random().toString(16).slice(2);
    }
    return User;
}());
var Users = /** @class */ (function () {
    function Users() {
        this.users = [];
    }
    Users.prototype.addUser = function (user) {
        try {
            this.users.push(user);
        }
        catch (e) {
            console.error(e);
        }
    };
    ;
    Users.prototype.findUser = function (userId) {
        try {
            var user = this.users.find(function (usr) { return usr.userID === userId; });
            if (user) {
                return user;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Users;
}());
var users = new Users();
module.exports = { User: User, Users: Users, users: users };
