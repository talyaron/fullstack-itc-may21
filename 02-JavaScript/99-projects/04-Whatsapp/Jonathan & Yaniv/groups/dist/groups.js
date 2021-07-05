var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());
var User = /** @class */ (function () {
    function User(userImg, userName, userPhone, userGroups) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
    User.prototype.addGroup = function () {
        try {
            this.userGroups.push();
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.renderChatsToChatsList = function () {
        try {
            var ChatsContainer_1 = document.querySelector(".chats");
            ChatsContainer_1.innerHTML = "";
            this.userGroups.forEach(function (group) {
                var contactHTML = "\n                <div class=\"chats__item chat\" id=\"" + group.groupId + "\">\n                <img class=\"chat__item chat__item--img\" src=\"" + group.groupImg + "\" />\n                <h3 class=\"chat__item chat__item--name\">" + group.groupName + "</h2>\n                    <p class=\"chat__item chat__item--last_msg_time\">" + group.groupMsgs[group.groupMsgs.length - 1].dateMsg + "</p>\n                    <p class=\"chat__item chat__item--last_msg_content\">" + group.groupMsgs[group.groupMsgs.length - 1].content + "</p>\n                    <i class=\"chat__item chat__item--delete fas fa-trash\"></i>\n            </div>";
                ChatsContainer_1.insertAdjacentHTML('beforeend', contactHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    return User;
}());
var ContactList = /** @class */ (function () {
    function ContactList(allContacts) {
        this.allContacts = allContacts;
    }
    ContactList.prototype.renderContactsToNewChatMenu = function () {
        try {
            var newChatContactsContainer_1 = document.querySelector(".options");
            newChatContactsContainer_1.innerHTML = "\n            <div class=\"options__item options__item--group\">\n                    <img id=\"new_group_logo\" src=\"https://static.thenounproject.com/png/61728-200.png\">\n                    <h3 id=\"new_group_title\">New Group</h3>\n                </div>";
            this.allContacts.forEach(function (contact) {
                if (contact.userPhone === loggedInUser.userPhone)
                    return;
                var contactHTML = "\n                <div class=\"options__item options__item--contact\" id=\"" + contact.userPhone + "\">\n                    <img src=\"" + contact.userImg + "\" class=\"new_contact_img\">\n                    <h3 class=\"new_contact_name\">" + contact.userName + "</h3>\n                    <p class=\"new_contact_status\">The world is awesome</p>\n                </div>";
                newChatContactsContainer_1.insertAdjacentHTML('beforeend', contactHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    return ContactList;
}());
var allContacts = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);
var loggedInUser = new User(JSON.parse(localStorage.getItem('currentUser')).userImg, JSON.parse(localStorage.getItem('currentUser')).userName, JSON.parse(localStorage.getItem('currentUser')).userPhone, JSON.parse(localStorage.getItem('currentUser')).userGroups);
