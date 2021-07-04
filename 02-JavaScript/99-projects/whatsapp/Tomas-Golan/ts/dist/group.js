// VARIABLES GLOBALES
var contactsGroup = JSON.parse(localStorage.getItem("contactos"));
var arraysOfNames = [];
// contactsGroup.forEach(element => {  
//     const names = element.name;
//     arraysOfNames.push(names);
// });   
// console.log(arraysOfNames);
function renderModalGroupData() {
    var containerContact = document.querySelector("#contacts_group");
    var modalContact = "";
    contactsGroup.forEach(function (el) {
        modalContact += "\n        <div class=\"contacts_chat_modal\">\n            <img class=\"contacts_img_modal\" src=\"" + el.profileImg + "\" alt=\"\">\n  \n            <div class=\"contacts_info_modal\">\n                <h3 class=\"contacts_name_modal\">" + el.name + "</h3>\n                <p>" + el.phone + "</p>\n            </div>\n            <input type=\"checkbox\" class=\"check\" value=\"" + el.name + "\">\n        </div>";
    });
    containerContact.innerHTML = modalContact;
}
renderModalGroupData();
var handleGroup = function (ev) {
    ev.preventDefault();
    var nameGroup = ev.target.elements.nameGroup.value;
    var GroupImg = ev.target.elements.imgGroup.value;
    // const newContacto = new Contact(name, phone, profileImg);
    // allContacts.unshift(newContacto);
    // localStorage.setItem("contactos", JSON.stringify(allContacts));
    // renderData();
};
// const getNames = ()=>{
//     let checks = document.querySelector('.check');
//     let str = "";
//     for(let i = 0;i < 2000; i++ ){
//         if(checks[i].checked === true){
//             str += checks[i].value + " ";
//             console.log(str);
//         }
//     }
// }
