class User {
  name: string;
  age: number;
  gender: string;
  desc: string;
  intrested: string;
  id: string = "id" + Math.random();
  constructor(name, age, gender, desc, intrested) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.desc = desc;
    this.intrested = intrested;
  }
}

let users = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users);
console.log(users);

let usersHTML = users.map((user) => {
  let userName = user.name;
  let userAge = user.age;
  let userGender = user.gender;
  let userDesc = user.desc;
  let userIntrested = user.intrested;
  let userId = user.id;
  const container = document.querySelector(".container");
  container.innerHTML += `<div class="user"><h1><a href="user.html?userId=${userId}">Profile:
   ${userName} is a ${userAge} years old ${userGender} who describes himself as ${userDesc} and intresten in
   ${userIntrested}</a></h1><button class="removeFromDOM">Remove ID:${userId}</button></div>`;
  const removeBTN = document.querySelectorAll(".removeFromDOM");
  for (const button of removeBTN) {
    button.addEventListener("click", (event) => {
      if ((button.innerHTML === "Remove ID:", `${userId}`)) {
        button.parentElement.remove();
      }
    });
  }
});

// button.setAttribute("alt", userId)
