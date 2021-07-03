console.log('dfsdgf');
//get the url query
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
var userId = params.userId;
var users = JSON.parse(window.localStorage.getItem('users'));
console.log(users);
var user = users.find(function (user) { return user.id === userId; });
console.log(user);
document.querySelector("#username").innerText = user.name;
