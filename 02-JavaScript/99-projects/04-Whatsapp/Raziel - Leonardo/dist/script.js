/* Create a Whatsapp application with two pages.
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */
var User = /** @class */ (function () {
    function User(name, number, picture, message) {
        this.name = name;
        this.number = number;
        this.picture = picture;
        this.message = message;
    }
    ;
    return User;
}());
;
var UserList = /** @class */ (function () {
    function UserList() {
        this.userList = [];
    }
    //Every time that I add a new contact, I will use this method, this add a new user to the array "userList"   
    UserList.prototype.addUser = function (user) {
        try {
            if (!user)
                throw new Error('The user it doesn´t exist!');
            this.userList.push(user);
        }
        catch (error) {
            console.error(error);
        }
    };
    return UserList;
}());
;
//Initialice a new array that will contains all the users:
var userList = new UserList();
//With this function I handle the form:
var handleSubmitNewUser = function (ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.name.value;
        var number = ev.target.elements.number.valueAsNumber;
        var message = [];
        var image = document.querySelector('#previewImage').getAttribute("src");
        var user = new User(name, number, image, message);
        userList.addUser(user);
        ev.target.reset();
        if (!user)
            throw new Error('The user doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
};
//Function to show the previous image in the form:
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            try {
                document.querySelector('#previewImage').setAttribute("src", "" + e.target.result);
            }
            catch (error) {
                console.error(error);
            }
            return e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
    ;
}
;
