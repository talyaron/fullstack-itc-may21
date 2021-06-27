let users = JSON.parse(localStorage.getItem("creatUsers"));

let usersHTML = users.map((user) => {
  let userName = user.name;
  let userAge = user.age;
  let userGender = user.gender;
  let userDesc = user.desc;
  let userIntrested = user.intrested;
  let userId = user.id;
  const container = document.querySelector(".container");
  container.innerHTML += `<div class="user"><h1><a href="user.html?userId=${userId}">Profile: ${userName} is a ${userAge} years old ${userGender} who likes to ${userDesc} and intresten in ${userIntrested}</a></h1></div>`;
});
