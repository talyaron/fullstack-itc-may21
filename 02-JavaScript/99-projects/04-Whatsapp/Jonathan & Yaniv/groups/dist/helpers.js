var pageTitle = document.querySelector('title');
pageTitle.innerText = loggedInUser.userName + "'s chats";
var profileImg = document.querySelector('.controls__item--profile_img');
profileImg.setAttribute('src', loggedInUser.userImg);
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
    var group = new Group(contactToChatPhone, contactToChatImg, contactToChatName, chatUsers);
    loggedInUser.addGroupIfNew(group.groupId);
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
    allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
    localStorage.setItem('contactList', JSON.stringify(loggedInUser));
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
var newGroupSubmit = document.querySelector('.options__item--submit');
newGroupSubmit.addEventListener('submit', function (ev) { return createNewGroup(ev); });
var createNewGroup = function (ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var groupId = "group" + Math.random().toString(16).slice(2);
        var groupImg = ev.target.elements.groupImg.value; // ??
        var groupName = ev.target.elements.groupName.value;
        // const groupUsers: Array<string> = ev.target.elements.??.value; // how to fetch only checked checkboxes?
        // const group: Group = new Group(groupId, groupImg, groupName, groupUsers);
        // loggedInUser.addGroupIfNew(group.groupId);
        // localStorage.setItem('currentUser',JSON.stringify(loggedInUser));
        // allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        // localStorage.setItem('contactList',JSON.stringify(loggedInUser));
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
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
var logOutBtn = document.querySelector('.controls__item--ellipsis');
logOutBtn.addEventListener('click', function (ev) { return logOut(ev); });
var logOut = function (ev) {
    localStorage.setItem('currentUser', null);
    window.location.href = "../users/users.html";
};
