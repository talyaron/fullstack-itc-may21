//JN
var messageChat = JSON.parse(localStorage.getItem("messageChat"));
var pageTitle = document.querySelector('title');
pageTitle.innerText = loggedInUser.userName + "'s chats";
var profileImg = document.querySelector('.controls__item--profile_img');
profileImg.setAttribute('src', loggedInUser.userImg);
loggedInUser.renderChatsToChatsList();
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
newChatOptions.addEventListener('click', function (ev) { return showNewGroupMenu(ev); });
var directToChat = function (ev) {
    var contactToChat;
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
    var group = new Group(contactToChatPhone, contactToChatImg, contactToChatName, chatUsers, messageChat);
    loggedInUser.addGroup(group);
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
    allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
    localStorage.setItem('contactList', JSON.stringify(allContacts));
    localStorage.setItem('contactId', JSON.stringify(contactToChat.id));
    window.location.href = "../chat/chat.html?" + loggedInUser.userPhone + "&" + contactToChat.id;
};
var showNewGroupMenu = function (ev) {
    if ((ev.target.className !== 'options__item options__item--group') && (ev.target.id.indexOf('new_group_') === -1))
        return;
    var newGroupMenu = document.querySelector('.new_group');
    allContacts.renderContactsToNewGroupMenu();
    newGroupMenu.style.display = 'unset';
};
var backToNewChatMenuBtn = document.querySelector('.title__item--back_btn');
backToNewChatMenuBtn.addEventListener('click', function (ev) { return hideNewGroupMenu(ev); });
var hideNewGroupMenu = function (ev) {
    var newGroupMenu = document.querySelector('.new_group');
    newGroupMenu.style.display = 'none';
};
var newGroupSubmit = document.querySelector('#new_group_submit');
newGroupSubmit.addEventListener('submit', function (ev) { return createNewGroup(ev); });
var createNewGroup = function (ev) {
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
        allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList', JSON.stringify(allContacts));
        hideNewGroupMenu(ev);
        hideNewChatMenu(ev);
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
var logOutBtn = document.querySelector('.controls__item--ellipsis');
logOutBtn.addEventListener('click', function (ev) { return logOut(ev); });
var logOut = function (ev) {
    localStorage.setItem('currentUser', null);
    window.location.href = "../users/users.html";
};
