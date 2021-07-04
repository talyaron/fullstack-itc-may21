var Contact = /** @class */ (function () {
    function Contact(name, imgUrl, phone, chats) {
        if (chats === void 0) { chats = [{ message: "New Message", timeStamp: new Date }]; }
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
    Contacts.prototype.renderProducts = function (domElement) {
        try {
            var html = this.contacts.map(function (contact) {
                return ("<div class=\"holder__contact\" id=\"" + contact.contactId + "\" onclick=\"hRef('" + contact.contactId + "')\">" +
                    ("<img class=\"holder__contact__image\" src=\"" + contact.imgUrl + "\">") +
                    ("<div class=\"holder__contact__name\">" + contact.name + "</div>") +
                    ("<div class=\"holder__contact__chat\">" + contact.chats[0].message + "</div>") +
                    ("<div class=\"holder__contact__timestamp\">" + contact.chats[0].timeStamp + "</div>") +
                    "<div class=\"holder__contact__unread\" id=\"unread\">6</div>" +
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
        var index = this.contacts.findIndex(function (cnt) { return cnt.contactId === contactID; });
        return index;
    };
    return Contacts;
}());
var contacts = new Contacts();
function hRef(id) {
    window.location.href = "./private-chat.html?contactId=" + id;
}
function handleSubmit(ev) {
    ev.preventDefault();
    try {
        var imgUrl = ev.target.children.photo.value;
        var name = ev.target.children.name.value;
        var phoneNumber = ev.target.children.number.value;
        var holder = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No holder!');
        }
        contacts.addContact(new Contact("" + name, "" + imgUrl, phoneNumber));
        contacts.renderProducts(holder);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts));
        closeForm();
        ev.target.reset();
    }
    catch (e) {
        console.error(e);
    }
}
var deleteContact = function (conatctID) {
    try {
        window.event.cancelBubble = true;
        var holder = document.querySelector('.holder');
        if (!holder) {
            throw new Error('No shopping list detected!');
        }
        var index = contacts.findIndexes(conatctID);
        if (!contacts) {
            throw new Error('No product list detected!');
        }
        contacts.contacts.splice(index, 1); //YS: Why do you need two different arrays? You can use the same one and filter. 
        contacts.renderProducts(holder);
        console.log(contacts);
        localStorage.setItem('contacts', JSON.stringify(contacts.contacts));
    }
    catch (e) {
        console.error(e);
    }
};
var addToDom = function (searchResults) {
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
            holder_1.innerHTML += ("<div class=\"holder__contact\" id=\"" + contact.contactId + "\" onclick=\"hRef('" + contact.contactId + "')\">" +
                ("<img class=\"holder__contact__image\" src=\"" + contact.imgUrl + "\">") +
                ("<div class=\"holder__contact__name\"><a href=\"./private-chat.html?contactId=" + contact.contactId + "\">" + contact.name + "</a></div>") +
                ("<div class=\"holder__contact__chat\">" + contact.chats[index].message + "</div>") +
                ("<div class=\"holder__contact__timestamp\">" + contact.chats[index].timeStamp + "</div>") +
                "<div class=\"holder__contact__unread id=\"unread\">6</div>" +
                ("<div class=\"holder__contact__unread id=\"delete\" onclick=\"deleteContact('" + contact.contactId + "')\">x</div>") +
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
        var searchResultsName = chatSearch.filter(function (contactName) { return userRegEx_1.test(contactName.name); });
        return searchResultsName;
    }
    catch (e) {
        console.error(e);
    }
};
var handleKeyUp = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.value;
        if (!searchTerm) {
            throw new Error('No value being read for search term!');
        }
        var results = findContactSearch(contacts.contacts, searchTerm);
        addToDom(results);
    }
    catch (er) {
        console.error(er);
    }
};
function checkEdits() {
    var render = JSON.parse(localStorage.getItem('contacts'));
    if (render != null) {
        addToDom(render);
        contacts.contacts = render;
        console.log(contacts.contacts.map(function (c) { return console.log(c.chats); }));
    }
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    function edit() {
        var indices = document.querySelectorAll("#delete");
        var unread = document.querySelectorAll("#delete");
        for (var i = 0; i <= indices.length; i++) {
            if (unread[i].style.display = "none") {
                unread[i].style.display = "block";
            }
        }
    }
}
