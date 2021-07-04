// VARIABLES GLOBALES
let contactsGroup = JSON.parse(localStorage.getItem("contactos"));
let arraysOfNames:Array<any> = [];

contactsGroup.forEach(element => {  
    const names = element.name;
    arraysOfNames.push(names);
});   

console.log(arraysOfNames);

if(deleteChat){
    let deleteContactsGroup = JSON.parse(localStorage.getItem("contactos")).name;
    arraysOfNames = deleteContactsGroup;
}else if(handleContact){
    let addContactGroup = JSON.parse(localStorage.getItem("contactos")).name;
    arraysOfNames = addContactGroup;
}
