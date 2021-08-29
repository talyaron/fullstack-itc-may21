const email = document.querySelector('#email');
const password = document.querySelector('#password');

const handleLogIn = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value,
  };
  await login(user);
};

const login = async (user) => {
  try {
    const res = await axios.post('users/login', user);
    if (res.data.token) {
      localStorage.setItem('token', JSON.stringify(res.data.token));
      window.location.href = 'http://localhost:8000/todosPage.html';
    }
  } catch (e) {
    console.log(e.response);
  }
};

document.querySelector('#submit').addEventListener('click', (e) => handleLogIn(e));
