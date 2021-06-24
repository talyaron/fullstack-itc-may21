"use strict";

//method for adding user info:
var UserInfo =
/** @class */
function () {
  function UserInfo(name, email, phone) {
    this.userId = "id" + Math.random().toString(16).slice(2);
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  return UserInfo;
}(); //Method for displaying the information in an array:


var InfoArray =
/** @class */
function () {
  function InfoArray(name) {
    this.infoArray = [];
    this.name = "";
    this.name = name;
  } //method for adding new user info:


  InfoArray.prototype.addNewFormSubmit = function (name, email, phone) {
    var newUserInfo = new UserInfo(name, email, phone);
    this.infoArray.push(newUserInfo);
    return newUserInfo.userId;
  };

  return InfoArray;
}(); //test array - 


var infoArray = new UserInfo("Garth");
var userID = infoArray.addNewFormSubmit("Garth", "g", "+97244000000");
infoArray.addNewFormSubmit("Garth", "g", "+97244000000");
console.log(infoArray); //method for injecting the info from the form to the DOM//

function handleSubmit(event) {
  event.preventDefault();
  console.dir(event.target);
  var name = event.target.elements.name.value;
  var email = event.target.elements.email.value;
  var phone = event.target.elements.phone.value;
  console.log(name, email, phone); // document.getElementById("data").innerHTML = `${name} transferred a secret amount of funds from bank number ${banknum}, branch number ${branch}, account number ${acc}.`;
}