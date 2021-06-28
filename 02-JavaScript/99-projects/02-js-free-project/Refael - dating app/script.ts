// let userinfo = JSON.parse(localStorage.getItem("creatUsers"));
// console.log(userinfo);

const letsGoBTN = document.querySelector(".lts-btn");
letsGoBTN.addEventListener("click", (event) => {
  const form = document.querySelector(".form__container");
  const welcome_hi = document.querySelector(".hi");
  const welcome_hi2 = document.querySelector(".hi__welcome");
  const welcome_hi3 = document.querySelector(".hi__welcome2");
  letsGoBTN.classList.remove("lts-btn");
  letsGoBTN.textContent = " ";
  form.style.display = "block";
  welcome_hi.style.display = "none";
  welcome_hi2.style.display = "none";
  welcome_hi3.style.display = "none";
  JSON.parse(localStorage.getItem("creatUsers"));
});

class User {
  name: string;
  age: number;
  gender: string;
  desc: string;
  intrested: string;
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
    this.users = []; //YS: Why did you remove the localstorage array? 
  }
  addUser(user: User) {
    this.users.push(user);
    localStorage.setItem("creatUsers", JSON.stringify(this.users));
  }
}
const creatUsers = new UserList();

const submit = document.querySelector(".submitButton");
submit.addEventListener("click", (ev) => {
  ev.preventDefault();
  let name: any = document.querySelector("#name");
  let age: any = document.querySelector("#age");
  let gender: any = document.querySelector('input[name="gender"]:checked');
  let desc: any = document.querySelector("#desc");
  let intrested: any = document.querySelector(
    'input[name="intrested"]:checked'
  );
  name = name.value;
  age = age.value;
  gender = gender.value;
  desc = desc.value;
  intrested = intrested.value;
  const creatNewUser = new User(name, age, gender, desc, intrested);

  creatUsers.addUser(creatNewUser);
  //YS: Add some sort of approval message that the user was added. Even an alert. 

  // window.location.href = "userList.html";
});
