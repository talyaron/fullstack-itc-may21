var User = /** @class */ (function () {
    // userGroups: Array<string> = JSON.parse(localStorage.getItem("currentRunner")).runnerId; 
    function User(userImg, userName, userPhone) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
    }
    return User;
}());
var ContactList = /** @class */ (function () {
    function ContactList(allContacts) {
        var _this = this;
        if (allContacts === null) {
            this.allContacts = [];
            var userItemsElements = document.querySelectorAll('.users__item');
            var contactToPush_1;
            userItemsElements.forEach(function (contact) {
                var contactImg = contact.firstChild.parentElement.querySelector("#user_img").getAttribute('src');
                var contactNameContainer = contact.firstChild.parentElement.querySelector("#user_name");
                var contactName = contactNameContainer.innerText;
                var contactPhoneContainer = contact.firstChild.parentElement.querySelector("#user_phone");
                var contactPhone = contactPhoneContainer.innerText;
                contactToPush_1 = new User(contactImg, contactName, contactPhone);
                _this.allContacts.push(contactToPush_1);
            });
            return;
        }
        this.allContacts = allContacts;
    }
    ContactList.prototype.findContact = function (contactPhone) {
        var contact = this.allContacts.find(function (contactItem) { return contactItem.userPhone === contactPhone; });
        return contact;
    };
    ContactList.prototype.addContact = function (contact) {
        this.allContacts.push(contact);
    };
    return ContactList;
}());
console.log(JSON.parse(localStorage.getItem('contactList')));
var allContacts;
if (JSON.parse(localStorage.getItem('contactList')) !== null)
    allContacts = new ContactList(JSON.parse(localStorage.getItem('ContactList')).allContacts);
else {
    allContacts = new ContactList(null);
    localStorage.setItem('contactList', JSON.stringify(allContacts));
}
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
    var pickedUser = new User(userImg, userName, userPhone);
    localStorage.setItem('currentUser', JSON.stringify(pickedUser));
};
