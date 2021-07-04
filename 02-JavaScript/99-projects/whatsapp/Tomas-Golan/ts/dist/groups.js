// VARIABLES GLOBALES
var contactsGroup = JSON.parse(localStorage.getItem("contactos"));
var arraysOfNames = [];
contactsGroup.forEach(function (element) {
    var names = element.name;
    arraysOfNames.push(names);
});
console.log(arraysOfNames);
// if(deleteChat){
//     let deleteContactsGroup = JSON.parse(localStorage.getItem("contactos")).name;
//     arraysOfNames = deleteContactsGroup;
// }else if(handleContact){
//     let addContactGroup = JSON.parse(localStorage.getItem("contactos")).name;
//     arraysOfNames = addContactGroup;
// }
