var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
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
            this.renderChatsToChatsList(null);
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
                this.renderChatsToChatsList(null);
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
    User.prototype.filterGroups = function (groupFilter) {
        try {
            var filteredGroups = this.userGroups;
            var groupRegEx_1 = groupFilter ? new RegExp(groupFilter, 'gmi') : undefined;
            if (groupFilter !== "") {
                var byMsg = this.userGroups.filter(function (group) { return group.groupMsgs.find(function (msg) { return groupRegEx_1.test(msg.content); }) !== undefined; });
                var byName = this.userGroups.filter(function (group) { return groupRegEx_1.test(group.groupName); });
                var byUser = this.userGroups.filter(function (group) { return group.groupUsers.find(function (user) { return groupRegEx_1.test(user); }) !== undefined; }); // not by users name, only phone numbers
                filteredGroups = __spreadArrays(byMsg, byName, byUser);
                filteredGroups = filteredGroups.filter(function (v, i, a) { return a.findIndex(function (t) { return (t.groupId === v.groupId); }) === i; });
            }
            this.renderChatsToChatsList(filteredGroups);
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.renderChatsToChatsList = function (FilteredGroupsToRender) {
        try {
            var ChatsContainer_1 = document.querySelector(".chats");
            ChatsContainer_1.innerHTML = "";
            var groupsToRender = FilteredGroupsToRender ? FilteredGroupsToRender : this.userGroups;
            groupsToRender.forEach(function (group) {
                var datemsg = group.groupMsgs[group.groupMsgs.length - 1] ? group.groupMsgs[group.groupMsgs.length - 1].dateMsg : "";
                var content = group.groupMsgs[group.groupMsgs.length - 1] ? group.groupMsgs[group.groupMsgs.length - 1].content : "";
                var groupHTML = "\n                <div class=\"chats__item chat\" id=\"" + group.groupId + "\">\n                <img class=\"chat__item chat__item--img\" src=\"" + group.groupImg + "\" />\n                <h3 class=\"chat__item chat__item--name\">" + group.groupName + "</h3>\n                    <p class=\"chat__item chat__item--last_msg_time\">" + datemsg + "</p>\n                    <p class=\"chat__item chat__item--last_msg_content\">" + content + "</p>\n                    <i class=\"chat__item chat__item--delete fas fa-trash\" onclick='handleDelete(\"" + group.groupId + "\")'></i>\n            </div>"; // for lines 47-48 - add "$" before "{" once the Message class is linked
                ChatsContainer_1.insertAdjacentHTML('beforeend', groupHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    User.prototype.extractGroup = function (groupId) {
        try {
            var existingGroup = this.userGroups.find(function (group) { return group.groupId === groupId; });
            return existingGroup;
        }
        catch (er) {
            console.error(er);
        }
    };
    //JN
    User.prototype.deleteGroup = function (groupID) {
        try {
            console.log(groupID);
            this.userGroups = this.userGroups.filter(function (group) { return group.groupId !== groupID; });
            this.renderChatsToChatsList(this.userGroups);
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
        try {
            var contactIndex = this.allContacts.findIndex(function (contactItem) { return contactItem.userPhone === contactPhone; });
            return contactIndex;
        }
        catch (er) {
            console.error(er);
        }
    };
    ContactList.prototype.filterContacts = function (contactFilter, type) {
        try {
            var filteredContacts = this.allContacts;
            var contactRegEx_1 = contactFilter ? new RegExp(contactFilter, 'gmi') : undefined;
            if (contactFilter !== "") {
                var byName = this.allContacts.filter(function (contact) { return contactRegEx_1.test(contact.userName); });
                var byPhone = this.allContacts.filter(function (contact) { return contactRegEx_1.test(contact.userPhone); });
                filteredContacts = __spreadArrays(byName, byPhone);
                filteredContacts = filteredContacts.filter(function (v, i, a) { return a.findIndex(function (t) { return (t.userPhone === v.userPhone); }) === i; });
            }
            if (type === 'privateChat')
                this.renderContactsToNewChatMenu(filteredContacts);
            if (type === 'groupChat')
                this.renderContactsToNewGroupMenu(filteredContacts);
        }
        catch (er) {
            console.error(er);
        }
    };
    ContactList.prototype.renderContactsToNewChatMenu = function (FilteredContactsToRender) {
        try {
            var contactsToRender = FilteredContactsToRender ? FilteredContactsToRender : this.allContacts;
            contactsToRender.sort(function (a, b) {
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
            contactsToRender.forEach(function (contact) {
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
    ContactList.prototype.renderContactsToNewGroupMenu = function (FilteredContactsToRender) {
        try {
            var contactsToRender = FilteredContactsToRender ? FilteredContactsToRender : this.allContacts;
            contactsToRender.sort(function (a, b) {
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
            contactsToRender.forEach(function (contact) {
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
    try {
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
    }
    catch (er) {
        console.error(er);
    }
};
//JN
function handleDelete(groupId) {
    loggedInUser.deleteGroup(groupId);
}
