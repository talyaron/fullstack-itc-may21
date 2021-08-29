const button = document.querySelector("#submit");
const name = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

const handleNewUser = async (e) => {
  e.preventDefault();

  const newUser = {
    userName: name.value,
    email: email.value,
    password: password.value,
    repassword: repassword.value,
  };
  await signUserUp(newUser);
};

const signUserUp = async (newUser) => {
  try {
    const response = await axios.post("users/register", newUser);
    const message = response.data;
    if (message) {
      window.location.href = "http://localhost:8000/login.html";
    }
  } catch (err) {
    console.log(err.response);
  }
};


button.addEventListener("click", (e) => handleNewUser(e));
