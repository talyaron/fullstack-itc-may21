var User = /** @class */ (function () {
    function User(userImg, userName, userPhone, userGroups) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
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
                var contactGroups = [];
                contactToPush_1 = new User(contactImg, contactName, contactPhone, contactGroups);
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
    return ContactList;
}());
var allContacts;
if (JSON.parse(localStorage.getItem('contactList')) !== null)
    allContacts = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);
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
    var userGroups = allContacts.findContact(userPhone).userGroups;
    var pickedUser = new User(userImg, userName, userPhone, userGroups);
    localStorage.setItem('currentUser', JSON.stringify(pickedUser));
    window.location.href = "../groups/groups.html?" + pickedUser.userPhone;
};
