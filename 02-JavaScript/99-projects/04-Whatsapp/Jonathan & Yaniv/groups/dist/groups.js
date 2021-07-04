var LoggedInUser = /** @class */ (function () {
    function LoggedInUser(userImg, userName, userPhone, userGroups) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
    return LoggedInUser;
}());
var ContactList = /** @class */ (function () {
    function ContactList() {
    }
    ContactList.prototype.findContact = function (contactPhone) {
        var contact = this.allContacts.find(function (contactItem) { return contactItem.userPhone === contactPhone; });
        return contact;
    };
    return ContactList;
}());
var allContacts = JSON.parse(localStorage.getItem('contactList'));
var loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
var usersContainer = document.querySelector('.users');
usersContainer.addEventListener('click', function (ev) { return userPicker(ev); });
var userPicker = function (ev) {
    if (ev.target.className === 'users')
        return;
    var userContainer;
    if (ev.target.id.indexOf('user_') === -1)
        userContainer = ev.target;
    else
        userContainer = ev.target.parentElement;
    var userImg = userContainer.querySelector("#user_img").getAttribute('src');
    var userNameContainer = userContainer.querySelector("#user_name");
    var userName = userNameContainer.innerText;
    var userPhoneContainer = userContainer.querySelector("#user_phone");
    var userPhone = userPhoneContainer.innerText;
    var userGroups = allContacts.findContact(userPhone).userGroups;
    var pickedUser = new User(userImg, userName, userPhone, userGroups);
    localStorage.setItem('currentUser', JSON.stringify(pickedUser));
    window.location.href = "../groups/groups.html?" + pickedUser.userPhone;
};
