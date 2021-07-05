var Group = /** @class */ (function () {
    function Group(groupId, groupImg, groupName, groupUsers) {
        this.groupId = groupId;
        this.groupImg = groupImg;
        this.groupName = groupName;
        this.groupUsers = groupUsers;
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
    User.prototype.addGroupIfNew = function (groupId) {
        try {
            var groupIndex = this.userGroups.findIndex(function (group) { return group.groupId === groupId; });
            if (groupIndex !== -1)
                return;
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
    ContactList.prototype.findContactIndex = function (contactPhone) {
        var contactIndex = this.allContacts.findIndex(function (contactItem) { return contactItem.userPhone === contactPhone; });
        return contactIndex;
    };
    ContactList.prototype.renderContactsToNewChatMenu = function () {
        try {
            this.allContacts = this.allContacts.sort(function (a, b) {
                var aName = a.userName;
                var bName = b.userName;
                if (aName < bName) {
                    return -1;
                }
                if (aName > bName) {
                    return 1;
                }
                return 0;
            });
            var newChatContactsContainer_1 = document.querySelector(".options");
            newChatContactsContainer_1.innerHTML = "\n            <div class=\"options__item options__item--group\">\n                    <img id=\"new_group_logo\" src=\"https://static.thenounproject.com/png/61728-200.png\">\n                    <h3 id=\"new_group_title\">New Group</h3>\n                </div>";
            this.allContacts.forEach(function (contact) {
                if (contact.userPhone === loggedInUser.userPhone)
                    return;
                var contactHTML = "\n                <div class=\"options__item options__item--contact\" id=\"" + contact.userPhone + "\">\n                    <img class=\"new_contact_img\" src=\"" + contact.userImg + "\">\n                    <h3 class=\"new_contact_name\">" + contact.userName + "</h3>\n                    <p class=\"new_contact_status\">The world is awesome</p>\n                </div>";
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
var pageTitle = document.querySelector('title');
pageTitle.innerText = loggedInUser.userName + "'s groups";
var addChatBtn = document.querySelector('.controls__item--plus');
addChatBtn.addEventListener('click', function (ev) { return showNewChatMenu(ev); });
var showNewChatMenu = function (ev) {
    var newChatMenu = document.querySelector('.new_chat');
    allContacts.renderContactsToNewChatMenu();
    newChatMenu.style.display = 'unset';
};
var cancelChatBtn = document.querySelector('.title__item--cancel_btn');
cancelChatBtn.addEventListener('click', function (ev) { return hideNewChatMenu(ev); });
var hideNewChatMenu = function (ev) {
    var newChatMenu = document.querySelector('.new_chat');
    newChatMenu.style.display = 'none';
};
var newChatOptions = document.querySelector('.options');
newChatOptions.addEventListener('click', function (ev) { return directToChat(ev); });
newChatOptions.addEventListener('click', function (ev) { return showNewGroupForm(ev); });
var directToChat = function (ev) {
    var contactToChat;
    if ((ev.target.className !== 'options__item options__item--contact') && (ev.target.className.indexOf('new_contact_') === -1))
        return;
    if (ev.target.className.indexOf('new_contact_') !== -1)
        contactToChat = ev.target.parentElement;
    else
        contactToChat = ev.target;
    //JN
    //I will need allcontact list eventually
    localStorage.setItem("contactId", JSON.stringify(contactToChat.id));
    window.location.href = "../chat/chat.html?" + loggedInUser.userPhone + "&" + contactToChat.id;
};
var showNewGroupForm = function (ev) {
    var newGroupForm;
    if ((ev.target.className !== 'options__item options__item--group') && (ev.target.id.indexOf('new_group_') === -1))
        return;
    if (ev.target.id.indexOf('new_group_') !== -1)
        newGroupForm = ev.target.parentElement;
    else
        newGroupForm = ev.target;
    console.log(newGroupForm);
};
