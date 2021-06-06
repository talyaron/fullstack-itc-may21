"use strict";

var container = document.querySelector(".container");
console.log(container);
var myDiv = document.createElement("div");
myDiv.style.position = "absolute";
myDiv.style.backgroundColor = "red";
myDiv.style.width = "50px";
myDiv.style.height = "100px";
myDiv.style.positionTop = "20px";
myDiv.style.positionRight = "50px";
container.appendChild(myDiv); // const boxCreator = (box) => {
//   let left = 0;
//   let right = 0;
//   let top = 0;
//   let bottom = 0;
//   creatBox.style.left = `${Math.floor(Math.random() * 60)}`;
//   creatBox.style.right = `${Math.floor(Math.random() * 60)}`;
//   creatBox.style.top = `${Math.floor(Math.random() * 60)}`;
//   creatBox.style.bottom = `${Math.floor(Math.random() * 60)}`;
// };
// boxCreator();