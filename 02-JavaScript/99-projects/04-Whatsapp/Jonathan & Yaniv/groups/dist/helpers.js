var pageTitle = document.querySelector('title');
pageTitle.innerText = loggedInUser.userName + "'s chats";
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
    loggedInUser.addGroup(contactToChat.id);
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
var logOutBtn = document.querySelector('.controls__item--ellipsis');
logOutBtn.addEventListener('click', function (ev) { return logOut(ev); });
var logOut = function (ev) {
    localStorage.setItem('currentUser', null);
    window.location.href = "../users/users.html";
};
