// const array = [1, 2, 3, 4];
// const lastIndex = array.length - 1;
// console.log(array[lastIndex]);
// //render on 2nd page:
function showOnDOM() {
    var allUsers = JSON.parse(localStorage.getItem('AllUsers'));
    var data = document.querySelector(".data");
    console.log(allUsers);
    allUsers.forEach(function (user) {
        data.innerHTML += "<div class=\"allusers\">" + user.name + " entered the following data: " + user.email + ", " + user.phone + ", " + user.favsong + ". Keep rockin'!</div>";
    });
}
showOnDOM();
