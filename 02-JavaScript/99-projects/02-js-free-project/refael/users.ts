let users = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users);

let usersHTML = users.map((user) => {
  console.log(users);
  let userName = user.name;
  let userAge = user.age;
  let userGender = user.gender;
  let userDesc = user.desc;
  let userIntrested = user.intrested;
  const container = document.querySelector(".container");
  container.innerHTML += `<div class="user"><a href="user.html?userId=${userName}">Profile: ${userName} is${userAge} years old ${userGender} who likes to ${userDesc} and intresten in ${userIntrested}</a></div>`;
});
