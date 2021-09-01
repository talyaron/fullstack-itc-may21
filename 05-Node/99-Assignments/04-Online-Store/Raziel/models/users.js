"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var userJsonPath = path.resolve(__dirname, "./users.json");
var readJsonUsers = function () {
    try {
        var users = fs.readFileSync(userJsonPath);
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error);
    }
};
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(username, email, password, role) {
        this.uuid = uuidv4();
        this.username = username;
        this.email = email;
        this.password = password;
        this.purchasedCarts = [];
        this.role = role;
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = readJsonUsers();
    }
    Users.prototype.updateUserJson = function () {
        try {
            fs.writeFileSync(userJsonPath, JSON.stringify(this.users));
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.createNewUser = function (user) {
        try {
            this.users.push(user);
            this.updateUserJson();
            console.log(this.users);
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.findUser = function (email) {
        try {
            var userInfo = this.users.find(function (userEmail) { return userEmail.email === email; });
            if (userInfo) {
                return userInfo;
            }
            else {
                return undefined;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.findUserById = function (id) {
        try {
            var userInfo = this.users.find(function (userElement) { return userElement.uuid === id; });
            if (userInfo) {
                return userInfo;
            }
            else {
                return undefined;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.addPurchCart = function (userInfo, cartID) {
        try {
            userInfo.purchasedCarts.push(cartID);
        }
        catch (error) {
            console.error(error);
        }
    };
    return Users;
}());
exports.Users = Users;
