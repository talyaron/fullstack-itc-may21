/* Create a Whatsapp application with two pages.
1st page: the chatGroups
2nd page: chat

use classes, destructors, spread, typescript
use BEM model
make it look as similar as you can to the real Whatsapp

Work in a group.
start with the design of the classes, BEM */
var _this = this;
var arrayName = JSON.parse(localStorage.getItem('userInfo'));
var searchName = document.querySelector("#search");
var Message = /** @class */ (function () {
    function Message(text) {
        this.text = text;
        this.time = new Date();
        this.id = Math.random().toString(16).slice(2);
    }
    ;
    return Message;
}());
;
var User = /** @class */ (function () {
    function User(name, number, picture) {
        this.message = [];
        this.name = name;
        this.number = number;
        this.picture = picture;
    }
    ;
    return User;
}());
;
var UserList = /** @class */ (function () {
    function UserList() {
        this.userList = [];
        this.filterUser = [];
    }
    return UserList;
}());
;
var userList = [];
if (arrayName != null) {
    userList = arrayName;
}
;
//With this function I handle the form:
var handleSubmitNewUser = function (ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.name.value;
        var number = ev.target.elements.number.valueAsNumber;
        var image = document.querySelector('#previewImage').getAttribute("src");
        //This function is to validate that the number is not already taken
        validator(ev, userList);
        var user = new User(name, number, image);
        addUser(user);
        ev.target.reset();
        if (!user)
            throw new Error('The user doesn´t exist!'); //YS: This should go after you define user. 
    }
    catch (error) {
        console.error(error);
    }
};
//Every time that I add a new contact, I will use this method, this add a new user to the array "userList"
function addUser(user) {
    try {
        if (!user)
            throw new Error('The user it doesn´t exist!');
        userList.push(user);
        renderContacts(userList);
        document.querySelector('#previewImage').setAttribute('src', "../Img_whatsapp/profile.png");
        modal.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
;
//To Show the contacts in the page
function renderContacts(arrayUser) {
    try {
        var showContact = document.querySelector('#chats');
        if (!showContact)
            throw new Error('The element where to show the contacts doesn´t exist!');
        //Doing a loop to show the contacts
        var html = arrayUser.map(function (element) {
            if (element.picture === null) { //YS: if (!element.picture)
                element.picture = "../Img_whatsapp/profile.png";
            }
            ;
            return ("<div class=\"chat\" id=\"chat\">\n                <div class=\"chat__left\">\n                    <img src=\"" + element.picture + "\" alt=\"\">\n                </div>\n                <div class=\"chat__right\" onclick='redirect(\"" + element.number + "\")'>\n                    <div class=\"chat__right--top\">\n                        <span class=\"chat__right--top__contact-name\">" + element.name + "</span>\n                        <span class=\"chat__right--top__phone-number\">Phone Number: " + element.number + "</span>\n                    </div>\n                    <div class=\"chat__right--bottom\">\n                        <div class=\"chat__right--bottom--left\">\n                            <img class=\"double-check-mark\" src=\"../Img_whatsapp/double-check-seen.svg\" alt=\"\">\n                            <span>Raziel is typing...</span>\n                        </div>\n                    </div>\n                </div>\n                <i class=\"fas fa-trash table__remove\" onclick='removeChat(\"" + element.number + "\")'></i>\n            </div>");
        }).join('');
        showContact.innerHTML = html; //YS: Look up using insertAdjacentHTML instead of  innerHTML 
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
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
//Function to redirect to the user Chat
function redirect(userNumber) {
    try {
        localStorage.setItem('userInfo', JSON.stringify(userList));
        localStorage.setItem('numberToSearch', userNumber);
        window.location.href = '../Chat/whatsappChat.html';
        /*YS: This link is incorrect, you are always redirecting to the same page. You want to re-direct to the specific users page.
        The correct way to link would be: 'whatsapp.html?userphone=${userNumber}'. */
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
//Function to do a filter in the search input
searchName.addEventListener('keyup', function () {
    try {
        var regEx = searchName.value;
        var searching_1 = new RegExp(regEx, 'i');
        _this.filterUser = userList.filter(function (elem) { return searching_1.test(elem.name); });
        renderContacts(_this.filterUser);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
//Function when I come back from the chat to the main page, render the saved information from the localstorage
function checkStorage() {
    try {
        if (arrayName) {
            renderContacts(arrayName);
        }
    }
    catch (error) {
        console.error(error);
    }
}
;
checkStorage();
//To delete a Chat
function removeChat(chatNumber) {
    try {
        var option = confirm("Are you sure do you want to delete this chat?");
        if (option) {
            var chatIndex = userList.findIndex(function (element) { return element.number === chatNumber; }); //YS: I would reccommend you to use filter instead of splice. 
            userList.splice(chatIndex, 1);
            renderContacts(userList);
        }
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
//Function to do a validator (numer is no taken)
function validator(ev, userList) {
    try {
        var validateNumber_1 = document.querySelector('#number');
        validateNumber_1.addEventListener('blur', function () {
            userList.forEach(function (element) {
                if (element.number == validateNumber_1.value) {
                    alert('The number is already taken');
                    ev.target.reset();
                    throw new Error('The number is already taken');
                }
                ;
            });
        });
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
