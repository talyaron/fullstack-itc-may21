/* Create a Whatsapp application with two pages.
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */
var Message = /** @class */ (function () {
    function Message(text) {
        this.text = text;
        this.time = new Date();
        this.id = Math.random().toString(16).slice(2);
    }
    return Message;
}());
;
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
            this.renderContacts();
            modal.style.display = "none";
        }
        catch (error) {
            console.error(error);
        }
    };
    ;
    //To Show the contacts in the page
    UserList.prototype.renderContacts = function () {
        try {
            var showContact = document.querySelector('#showContacts');
            if (!showContact)
                throw new Error('The element where to show the contacts doesn´t exist!');
            //Doing a loop to show the contacts
            var html = this.userList.map(function (element) {
                return ("<div class=\"user__info\" id=\"" + element.number + "\" onclick='passInformation(\"" + element.number + "\")'>\n                    <div><img class=\"user__info__picture\" src=\"" + element.picture + "\" alt=\"\"></div>\n                    <div class=\"user__info__name\">" + element.name + "</div>\n                    <div>" + element.message[0].text + "</b></div>\n                    </div>");
            }).join('');
            showContact.innerHTML = html;
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
        var image = document.querySelector('#previewImage').getAttribute("src");
        var message = [{ text: '', id: Math.random().toString(16).slice(2), time: new Date() }];
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
//Method to pass information to another page when you click the User
function passInformation(userNumber) {
    var userInfo = userList.userList.filter(function (element) { return (element.number == userNumber); });
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    redirect();
}
;
//Function to redirect to the user Chat
function redirect() {
    try {
        window.location.href = '/Chat/chat.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
