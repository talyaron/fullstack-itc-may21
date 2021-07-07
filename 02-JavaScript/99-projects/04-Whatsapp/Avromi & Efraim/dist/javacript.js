var Contact = /** @class */ (function () {
    function Contact(name, imgUrl, phone, chats) {
        if (chats === void 0) { chats = [{ message: "New Conversation", timeStamp: new Date }]; }
        this.name = name;
        this.imgUrl = imgUrl;
        this.phone = phone;
        this.chats = chats;
        this.contactId = Math.random().toString(16).slice(2);
    }
    return Contact;
}());
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
    }
    Contacts.prototype.addContact = function (contacts) {
        try {
            this.contacts.unshift(contacts);
        }
        catch (e) {
            console.error(e);
        }
    };
    ;
    Contacts.prototype.renderContacts = function (domElement) {
        try {
            var html = this.contacts.map(function (contact) {
                var timeHoursAndMinutes = new Date(contact.chats[0].timeStamp);
                var hrs = timeHoursAndMinutes.getHours();
                var min = timeHoursAndMinutes.getMinutes();
                if (min < 10) {
                    min = "0" + min;
                }
                return ("<div class=\"holder__contact\" id=\"" + contact.contactId + "\" onclick=\"moveToPrivateChat('" + contact.contactId + "')\">" +
                    ("<img class=\"holder__contact__image\" src=\"" + contact.imgUrl + "\">") +
                    ("<div class=\"holder__contact__name\">" + contact.name + "</div>") +
                    ("<div class=\"holder__contact__chat\">" + contact.chats[0].message + "</div>") +
                    ("<div class=\"holder__contact__timestamp\">" + hrs + ":" + min + "</div>") +
                    ("<div class=\"holder__contact__unread\" id=\"delete\" onclick=\"deleteContact('" + contact.contactId + "')\">x</div>") +
                    "</div>");
            }).join('');
            domElement.innerHTML = html;
        }
        catch (e) {
            console.error(e);
        }
    };
    Contacts.prototype.findIndexes = function (contactID) {
        try {
            var index = this.contacts.findIndex(function (cnt) { return cnt.contactId === contactID; });
            return index;
        }
        catch (e) {
            console.error(e);
        }
    };
    return Contacts;
}());
var contacts = new Contacts();
function moveToPrivateChat(id) {
    try {
        window.location.href = "./private-chat.html?contactId=" + id;
    }
    catch (e) {
        console.error(e);
    }
}
var image = '';
function getImgData() {
    try {
        var chooseFile_1 = document.getElementById("file");
        chooseFile_1.addEventListener('change', function () {
            var files = chooseFile_1.files[0];
            if (files) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function () {
                    image = this.result;
                });
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}
getImgData();
function handleSubmit(ev) {
    ev.preventDefault();
    try {
        var imgUrl = image;
        var name = ev.target.children.name.value;
        var phoneNumber = ev.target.children.number.value;
        var holder = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder!');
        }
        contacts.addContact(new Contact(name, imgUrl, phoneNumber));
        contacts.renderContacts(holder);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts));
        document.getElementById("myForm").style.display = "none";
        ev.target.reset();
    }
    catch (e) {
        console.error(e);
    }
}
var deleteContact = function (conatctID) {
    try {
        window.event.cancelBubble = true;
        contacts.contacts = JSON.parse(localStorage.getItem('contacts'));
        var index = contacts.findIndexes(conatctID);
        if (!contacts) {
            throw new Error('No product list detected!');
        }
        contacts.contacts.splice(index, 1);
        addToDomWithArray(contacts.contacts);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts));
    }
    catch (e) {
        console.error(e);
    }
};
var addToDomWithArray = function (searchResults) {
    try {
        var holder_1 = document.querySelector('.holder');
        if (!holder_1) {
            throw new Error('No holder available!');
        }
        holder_1.innerHTML = "";
        if (searchResults.length === 0) {
            holder_1.innerHTML = 'no results available';
            return;
        }
        searchResults.forEach(function (contact) {
            var index = parseInt(contact.chats.length - 1);
            var timeHoursAndMinutes = new Date(contact.chats[index].timeStamp);
            var hrs = timeHoursAndMinutes.getHours();
            var min = timeHoursAndMinutes.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            holder_1.innerHTML += ("<div class=\"holder__contact\" id=\"" + contact.contactId + "\" onclick=\"moveToPrivateChat('" + contact.contactId + "')\">" +
                ("<img class=\"holder__contact__image\" src=\"" + contact.imgUrl + "\">") +
                ("<div class=\"holder__contact__name\">" + contact.name + "</a></div>") +
                ("<div class=\"holder__contact__chat\">" + contact.chats[index].message + "</div>") +
                ("<div class=\"holder__contact__timestamp\">" + hrs + ":" + min + "</div>") +
                ("<div class=\"holder__contact__unread delete\" onclick=\"deleteContact('" + contact.contactId + "')\">x</div>") +
                "</div>");
        });
    }
    catch (e) {
        console.error(e);
    }
};
var findContactSearch = function (chatSearch, searchTerm) {
    try {
        var userRegEx_1 = new RegExp(searchTerm, 'gmi');
        var searchedUsers = chatSearch.filter(function (contactName) { return userRegEx_1.test(contactName.name); });
        return searchedUsers;
    }
    catch (e) {
        console.error(e);
    }
};
var findTextInMessages = function (searchTerm) {
    try {
        var termRegEx_1 = new RegExp(searchTerm, 'i');
        var searchedMessages = contacts.contacts.filter(function (contact) { return contact.chats.some(function (message) { return termRegEx_1.test(message.message); }); });
        return searchedMessages;
    }
    catch (e) {
        console.error(e);
    }
};
var handleKeyUp = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.value;
        var results = findContactSearch(contacts.contacts, searchTerm);
        var searchMessages = findTextInMessages(searchTerm);
        var finalSearchArrayResults = results.concat(searchMessages);
        var obj = {};
        for (var i = 0; i < finalSearchArrayResults.length; i++)
            obj[finalSearchArrayResults[i]['name']] = finalSearchArrayResults[i];
        finalSearchArrayResults = new Array();
        for (var key in obj)
            finalSearchArrayResults.push(obj[key]);
        addToDomWithArray(finalSearchArrayResults);
        if (searchTerm.length == 0) {
            addToDomWithArray(contacts.contacts);
        }
    }
    catch (er) {
        console.error(er);
    }
};
function renderContactsFromLocalStorage() {
    try {
        window.addEventListener('load', function () {
            var render = JSON.parse(localStorage.getItem('contacts'));
            if (render != null) {
                addToDomWithArray(render);
                contacts.contacts = render;
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}
renderContactsFromLocalStorage();
function openForm() {
    try {
        var formOpen = document.querySelector(".header__new-convo");
        formOpen.addEventListener('click', function () {
            document.getElementById("myForm").style.display = "block";
        });
    }
    catch (e) {
        console.error(e);
    }
}
openForm();
function closeForm() {
    try {
        var formClose = document.querySelector(".button--cancel");
        formClose.addEventListener('click', function () {
            document.getElementById("myForm").style.display = "none";
        });
    }
    catch (e) {
        console.error(e);
    }
}
closeForm();
// the one thing we couldnt get to work how we wanted :((((
function editButtonRevealAndHide() {
    try {
        var editButton = document.querySelector(".header__edit");
        editButton.addEventListener("click", function () {
            var indices = document.querySelectorAll(".holder__contact__unread");
            var unread = document.querySelectorAll(".holder__contact__unread");
            for (var i = 0; i <= indices.length; i++) {
                if (unread[i].style.display = "none") {
                    unread[i].style.display = "block";
                }
                else {
                    unread[i].style.display = "none";
                }
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}
editButtonRevealAndHide();
