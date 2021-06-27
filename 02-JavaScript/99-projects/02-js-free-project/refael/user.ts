const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);
const userId = params.userId;
let users = JSON.parse(window.localStorage.getItem("creatUsers"));
console.log(users);
let user = users.find((user) => user.id === userId);

console.log(user);

const userOnPage = document.querySelector(".username");
userOnPage.innerHTML = `${user.name} is a ${user.age} years old ${user.gender}, who likes ${user.desc} and looking for a ${user.intrested}`;
