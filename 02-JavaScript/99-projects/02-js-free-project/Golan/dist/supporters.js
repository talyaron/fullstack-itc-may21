// const array = [1, 2, 3, 4];
// const lastIndex = array.length - 1;
// console.log(array[lastIndex]);
// //render on 2nd page:
function showOnDOM() {
    var allUsers = JSON.parse(localStorage.getItem('AllUsers'));
    var lastUserIndex = allUsers.length - 1;
    var lastUser = allUsers[lastUserIndex];
    var data = document.querySelector(".data");
    console.log(lastUser);
    data.innerHTML = "<div>Hi " + lastUser.name + ", thanks for signing up! Your details are " + lastUser.email + ", " + lastUser.phone + ". We'll be in touch soon!</div>";
}
showOnDOM();
