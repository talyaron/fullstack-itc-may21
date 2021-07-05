//grab info from contacts page
function showOnDOM() {
    const allUsers = JSON.parse(localStorage.getItem('AllUsers'));
    const lastUserIndex = allUsers.length - 1;
    const lastUser = allUsers[lastUserIndex];
    const data = document.querySelector(".data");
    console.log(lastUser);
    data.innerHTML = `<div>Hi ${lastUser.name}, thanks for signing up! Your details are ${lastUser.email}, ${lastUser.phone}. We'll be in touch soon!</div>`;

}

showOnDOM();
//grab info from chat-bar and display as a message