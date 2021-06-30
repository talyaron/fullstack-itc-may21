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

class UserList {
  users: Array<User>;
  constructor() {
    this.users = [];
  }
  addUser(user: User) {
    this.users.push(user);
    localStorage.setItem("creatUsers", JSON.stringify(this.users));
  }
  usersFromStorage() {
    let usersStorage = JSON.parse(localStorage.getItem("creatUsers"));
    if (usersStorage) {
      this.users = usersStorage;
    }
  }
  renderUsers() {
    // loop over array and show on dom
  }
}

let users: UserList = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users);
console.log(users);

let usersHTML = users.map((user) => { // this should take place on the renderUsers() method - users.renderUsers();
  let userName = user.name;
  let userAge = user.age;
  let userGender = user.gender;  /* All of these variables are not necessary. You couldve just wrote on your HTML ${user.name}, ${user.age}, etc */
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
