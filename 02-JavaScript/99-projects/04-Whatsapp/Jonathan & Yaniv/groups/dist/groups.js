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
        this.allContacts = allContacts;
    }
    ContactList.prototype.renderContactsToNewChatMenu = function () {
        try {
            var newChatContactsContainer_1 = document.querySelector(".options");
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
