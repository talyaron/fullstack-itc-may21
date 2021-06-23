
// const array = [1, 2, 3, 4];
// const lastIndex = array.length - 1;
// console.log(array[lastIndex]);

// //render on 2nd page:
function showOnDOM() {
    const allUsers = JSON.parse(localStorage.getItem('AllUsers'));
    const lastUserIndex = allUsers.length - 1;
    const lastUser = allUsers[lastUserIndex];
    const data = document.querySelector(".data");
    console.log(lastUser);
    data.innerHTML = `<div>Hi ${lastUser.name}, thanks for signing up! Your details are ${lastUser.email}, ${lastUser.phone}. We'll be in touch soon!</div>`;

}

showOnDOM();