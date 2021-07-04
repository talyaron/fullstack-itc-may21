console.log('dfsdgf')

//get the url query

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


console.log(params)
const userId = params.userId;
let users = JSON.parse(window.localStorage.getItem('users'));
console.log(users);
let user  = users.find(user=>user.id === userId);

console.log(user);

document.querySelector("#username").innerText = user.name
