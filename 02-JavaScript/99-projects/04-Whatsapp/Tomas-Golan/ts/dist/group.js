// VARIABLES GLOBALES
var contactsGroup = JSON.parse(localStorage.getItem("contactos"));
var arraysOfNames = [];
var groups = [];
var iconGroup = document.querySelector("#iconGroup");
// CLASS GROUP
var Group = /** @class */ (function () {
    function Group(groupName, groupIMG, contactsOfGroup) {
        this.groupName = groupName;
        this.groupIMG = groupIMG;
        this.contactsOfGroup = contactsOfGroup;
        this.id = Math.random().toString(16).slice(2);
    }
    return Group;
}());
iconGroup.addEventListener('click', renderModalGroupData);
function renderModalGroupData() {
    var containerContact = document.querySelector("#contacts_group");
    var modalContact = "";
    var jsonGroup = JSON.parse(localStorage.getItem("contactos"));
    jsonGroup.forEach(function (el) {
        modalContact += "\n        <div class=\"contacts_chat_modal\">\n            <img class=\"contacts_img_modal\" src=\"" + el.profileImg + "\" alt=\"\">\n  \n            <div class=\"contacts_info_modal\">\n                <h3 class=\"contacts_name_modal\">" + el.name + "</h3>\n                <p>" + el.phone + "</p>\n            </div>\n            <input type=\"checkbox\" class=\"check\" value=\"" + el.name + "\">\n        </div>";
    });
    containerContact.innerHTML = modalContact;
}
renderModalGroupData();
var deleteGroup = function (id) {
    var deleteGroup = groups.filter(function (group) { return group.id !== id; });
    groups = deleteGroup;
    localStorage.setItem("groups", JSON.stringify(groups));
    render();
};
document.getElementById('btn').onclick = function () {
    var nameGroup = document.querySelector("#nameGroup").value;
    var GroupImg = document.querySelector("#imgGroup").value;
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var _i = 0, markedCheckbox_1 = markedCheckbox; _i < markedCheckbox_1.length; _i++) {
        var checkbox = markedCheckbox_1[_i];
        arraysOfNames.push(checkbox.value);
    }
    var newGroup = new Group(nameGroup, GroupImg, arraysOfNames);
    arraysOfNames = [];
    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));
    render();
};
