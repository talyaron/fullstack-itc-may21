let users = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users); //YS: Please dont leave console logs. 

let usersHTML = users.map((user) => {
  console.log(users); //YS: Please dont leave console logs. 
  let userName = user.name;    
  let userAge = user.age;                       /* All of these variables are not necessary. You couldve just wrote on your HTML ${user.name}, user.age, etc */
  let userGender = user.gender;
  let userDesc = user.desc;
  let userIntrested = user.intrested;  
  const container = document.querySelector(".container");
  container.innerHTML += `<div class="user"><a href="user.html?userId=${userName}">Profile: ${userName} is${userAge} years old ${userGender} who likes to ${userDesc} and intresten in ${userIntrested}</a></div>`; //YS: These links dont take me anywhere
});
