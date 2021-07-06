var Group = /** @class */ (function () {
    function Group(groupId, groupImg, groupName, groupUsers) {
        this.groupMsgs = [];
        this.groupId = groupId ? groupId : "group" + Math.random().toString(16).slice(2);
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
    User.prototype.addGroup = function (newGroup) {
        try {
            this.userGroups.push(newGroup);
            this.renderChatsToChatsList();
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.addGroupIfNew = function (groupToCheck) {
        try {
            var existingGroup = this.userGroups.find(function (group) { return group.groupId === groupToCheck.groupId; });
            if (existingGroup === undefined) {
                this.userGroups.push(groupToCheck);
                this.renderChatsToChatsList();
            }
            if (existingGroup === undefined)
                return true;
            else
                return false;
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.renderChatsToChatsList = function () {
        try {
            var ChatsContainer_1 = document.querySelector(".chats");
            ChatsContainer_1.innerHTML = "";
            //const message = JSON.parse(localStorage.getItem("currentMessage"));
            //console.log(message)
            this.userGroups.forEach(function (group) {
                var datemsg = group.groupMsgs[group.groupMsgs.length - 1] ? group.groupMsgs[group.groupMsgs.length - 1].dateMsg : "";
                console.log(datemsg);
                var content = group.groupMsgs[group.groupMsgs.length - 1] ? group.groupMsgs[group.groupMsgs.length - 1].content : "";
                console.log(content);
                var groupHTML = "\n                <div class=\"chats__item chat\" id=\"" + group.groupId + "\">\n                <img class=\"chat__item chat__item--img\" src=\"" + group.groupImg + "\" />\n                <h3 class=\"chat__item chat__item--name\">" + group.groupName + "</h3>\n                    <p class=\"chat__item chat__item--last_msg_time\">" + datemsg + "</p>\n                    <p class=\"chat__item chat__item--last_msg_content\">" + content + "</p>\n                    <i class=\"chat__item chat__item--delete fas fa-trash\"></i>\n            </div>"; // for lines 47-48 - add "$" before "{" once the Message class is linked
                ChatsContainer_1.insertAdjacentHTML('beforeend', groupHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.extractGroup = function (groupId) {
        var existingGroup = this.userGroups.find(function (group) { return group.groupId === groupId; });
        return existingGroup;
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
            var newChatContactsContainer_1 = document.querySelector(".new_chat__item--body");
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
    ContactList.prototype.renderContactsToNewGroupMenu = function () {
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
            var newGroupContactsContainer_1 = document.querySelector("#add_group_controls");
            newGroupContactsContainer_1.innerHTML = "\n            <div class=\"options__item options__item--group_img\">\n                <label for=\"group_img_form\" id=\"add_photo\">Add Group Image</label>\n                <input type=\"file\" name=\"groupImg\" id=\"group_img_form\" onchange=\"readURL(this);\" style=\"display:none\" required />\n            </div>\n            <div class=\"options__item options__item--group_name\">\n                <input type=\"text\" maxlength=\"25\" placeholder=\"Group's Topic\" name=\"groupName\" id=\"group_name_form\" required />\n            </div>";
            this.allContacts.forEach(function (contact) {
                if (contact.userPhone === loggedInUser.userPhone)
                    return;
                var contactHTML = "\n                <div class=\"options__item options__item--contact\" id=\"" + contact.userPhone + "\">\n                    <img class=\"new_contact_img\" src=\"" + contact.userImg + "\">\n                    <h3 class=\"new_contact_name\">" + contact.userName + "</h3>\n                    <p class=\"new_contact_status\">The world is awesome</p>\n                    <input type=\"checkbox\" class=\"checkbox\" id=\"" + contact.userPhone + "\" name=\"" + contact.userPhone + "\" value=\"" + contact.userPhone + "\">\n                </div>";
                newGroupContactsContainer_1.insertAdjacentHTML('afterbegin', contactHTML);
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
var readURL = function (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var label = document.querySelector('#add_photo');
            label.setAttribute('alt', "" + e.target.result);
            label.style.backgroundImage = "url(\"" + e.target.result + "\")";
            label.style.backgroundSize = '100% 100%';
            label.innerText = '';
            label.style.padding = '0';
            label.style.height = '200px';
            label.style.width = '200px';
            return e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};
