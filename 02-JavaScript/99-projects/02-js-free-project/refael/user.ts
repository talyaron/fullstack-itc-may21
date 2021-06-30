const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);
const userId = params.userId;
let users = JSON.parse(window.localStorage.getItem("creatUsers"));
console.log(users);  //YS: No console.logs
let user = users.find((user) => user.id === userId); //YS: A parenthesis in (user) is not necessary if you only have 1 parameter. 

console.log(user); //YS: No console.logs

const userOnPage = document.querySelector(".username");
userOnPage.innerHTML = `${user.name} is a ${user.age} years old ${user.gender}, who likes ${user.desc} and looking for a ${user.intrested}`; //YS: Would have liked to see more syling here
