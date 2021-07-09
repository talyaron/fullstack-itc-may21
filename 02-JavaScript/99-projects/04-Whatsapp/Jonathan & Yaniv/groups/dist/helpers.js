var pageTitle = document.querySelector('title');
pageTitle.innerText = loggedInUser.userName + "'s chats";
var profileImg = document.querySelector('.controls__item--profile_img');
profileImg.setAttribute('src', loggedInUser.userImg);
loggedInUser.renderChatsToChatsList(null);
var addChatBtn = document.querySelector('.controls__item--plus');
addChatBtn.addEventListener('click', function (ev) { return showNewChatMenu(ev); });
var showNewChatMenu = function (ev) {
    var newChatMenu = document.querySelector('.new_chat');
    allContacts.renderContactsToNewChatMenu(null);
    newChatMenu.style.display = 'unset';
};
var cancelChatBtn = document.querySelector('.title__item--cancel_btn');
cancelChatBtn.addEventListener('click', function (ev) { return hideNewChatMenu(ev); });
var hideNewChatMenu = function (ev) {
    var newChatMenu = document.querySelector('.new_chat');
    newChatMenu.style.display = 'none';
};
var newChatOptions = document.querySelector('.options');
var existingChatList = document.querySelector('.chats');
newChatOptions.addEventListener('click', function (ev) { return directToChat(ev); });
existingChatList.addEventListener('click', function (ev) { return directToGroup(ev); });
existingChatList.addEventListener('click', function (ev) { return deleteGroup(ev); });
newChatOptions.addEventListener('click', function (ev) { return showNewGroupMenu(ev); });
var directToChat = function (ev) {
    try {
        var contactToChat = void 0;
        if ((ev.target.className !== 'options__item options__item--contact') && (ev.target.className.indexOf('new_contact_') === -1))
            return;
        if (ev.target.className.indexOf('new_contact_') !== -1)
            contactToChat = ev.target.parentElement;
        else
            contactToChat = ev.target;
        var contactToChatPhone = contactToChat.id;
        var contactToChatImg = contactToChat.querySelector('.new_contact_img').getAttribute('src');
        var contactToChatNameContainer = contactToChat.querySelector('.new_contact_name');
        var contactToChatName = contactToChatNameContainer.innerText;
        var chatUsers = [loggedInUser.userPhone, contactToChat.id];
        var group = new Group(contactToChatPhone, contactToChatImg, contactToChatName, chatUsers);
        var isNewGroup = loggedInUser.addGroupIfNew(group);
        if (isNewGroup) {
            localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
            allContacts.allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
            localStorage.setItem('contactList', JSON.stringify(allContacts));
            localStorage.setItem('contactId', JSON.stringify(contactToChat.id));
            localStorage.setItem('IsChatOrGroup', JSON.stringify(0));
        }
        window.location.href = "../chat/chat.html?groupid=" + contactToChat.id;
    }
    catch (er) {
        console.error(er);
    }
};
var directToGroup = function (ev) {
    try {
        var existingGroup = void 0;
        if ((ev.target.className === 'chat__item chat__item--delete fas fa-trash') ||
            ((ev.target.className !== 'chats__item chat') && (ev.target.className.indexOf('chat_item') !== -1)))
            return;
        if (ev.target.className.indexOf('chat_item') === -1)
            existingGroup = ev.target.parentElement;
        else
            existingGroup = ev.target;
        var groupID = existingGroup.id;
        var group = loggedInUser.extractGroup(groupID);
        localStorage.setItem('currentGroup', JSON.stringify(group));
        localStorage.setItem('IsChatOrGroup', JSON.stringify(1));
        window.location.href = "../chat/chat.html?groupid=" + existingGroup.id;
    }
    catch (er) {
        console.error(er);
    }
};
var deleteGroup = function (ev) {
    try {
        if (ev.target.className !== 'chat__item chat__item--delete fas fa-trash')
            return;
        var groupToDelete = ev.target.parentElement;
        var groupID = groupToDelete.id;
        loggedInUser.deleteGroup(groupID);
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        allContacts.allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(allContacts));
    }
    catch (er) {
        console.error(er);
    }
};
var showNewGroupMenu = function (ev) {
    if ((ev.target.className !== 'options__item options__item--group') && (ev.target.id.indexOf('new_group_') === -1))
        return;
    var newGroupMenu = document.querySelector('.new_group');
    allContacts.renderContactsToNewGroupMenu(null);
    newGroupMenu.style.display = 'unset';
};
var backToNewChatMenuBtn = document.querySelector('.title__item--back_btn');
backToNewChatMenuBtn.addEventListener('click', function (ev) { return hideNewGroupMenu(ev); });
var hideNewGroupMenu = function (ev) {
    var newGroupMenu = document.querySelector('.new_group');
    newGroupMenu.style.display = 'none';
};
//const newGroupSubmit: HTMLElement = document.querySelector('#new_group_submit');
//newGroupSubmit.addEventListener('submit', ev => createNewGroup(ev));
function createNewGroup(ev) {
    try {
        ev.preventDefault();
        var groupId = null;
        var imgLabel = document.querySelector('#add_photo');
        var groupImg = imgLabel.getAttribute('alt');
        var groupName = ev.target.elements.groupName.value;
        var contactsCheckboxes = ev.target.querySelectorAll('.checkbox');
        var groupUsers_1 = [];
        contactsCheckboxes.forEach(function (contact) {
            if (contact.checked)
                groupUsers_1.push(contact.value);
        });
        var group = new Group(groupId, groupImg, groupName, groupUsers_1);
        loggedInUser.addGroup(group);
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        allContacts.allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(allContacts));
        hideNewGroupMenu(ev);
        hideNewChatMenu(ev);
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
}
var logOutBtn = document.querySelector('.controls__item--ellipsis');
logOutBtn.addEventListener('click', function (ev) { return logOut(ev); });
var logOut = function (ev) {
    localStorage.setItem('currentUser', null);
    window.location.href = "../users/users.html";
};
var groupsSearch = document.querySelector('#search_in_chats_form');
var contactsSearch = document.querySelector('#search_contacts_form');
var contactsForGroupSearch = document.querySelector('#search_in_groups_form');
groupsSearch.addEventListener('keyup', function (ev) { return filterKeyUp(ev); });
contactsSearch.addEventListener('keyup', function (ev) { return filterKeyUp(ev); });
contactsForGroupSearch.addEventListener('keyup', function (ev) { return filterKeyUp(ev); });
var filterKeyUp = function (ev) {
    try {
        ev.preventDefault();
        var filterFormElements = ev.target.parentElement.elements;
        var searchFilter = void 0;
        switch (ev.target.parentElement) {
            case groupsSearch:
                if (loggedInUser.userGroups.length === 0)
                    return;
                searchFilter = filterFormElements.searchInChats.value;
                loggedInUser.filterGroups(searchFilter);
                break;
            case contactsSearch:
                searchFilter = filterFormElements.searchContacts.value;
                allContacts.filterContacts(searchFilter, 'privateChat');
                break;
            case contactsForGroupSearch:
                searchFilter = filterFormElements.searchContactsForGroup.value;
                allContacts.filterContacts(searchFilter, 'groupChat');
                break;
        }
    }
    catch (er) {
        console.error(er);
    }
};
