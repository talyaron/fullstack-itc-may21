interface User {
    username: string;
    password: string;
}

async function postRegister(registeredUser) {
    try {
      const user = await axios.post("/register", registeredUser);
      return user;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function postLogin(loginUser) {
    try {
      const user = await axios.post("/login", loginUser);
      return user;
      
    } catch (error) {
      console.error(error);
    }
  }

const registerForm: HTMLFormElement = document.querySelector('#register_form');
const loginForm: HTMLFormElement = document.querySelector('#login_form');

registerForm.addEventListener('submit', ev => handleRegister(ev));
loginForm.addEventListener('submit', ev => handleLogin(ev));

const handleRegister = async (ev: any): Promise<void> => {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const registerUsername: string = formElements.registerUsername.value;
    const registerPassword: string = formElements.registerPassword.value;

    const registeredUser: User = { username: registerUsername, password: registerPassword};

    await postRegister(registeredUser);
    ev.target.reset();
    window.location.href = 'user.html';

  } catch (error) {
    console.error(error);
  }
}

const handleLogin = async (ev: any): Promise<void> => {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const loginUsername: string = formElements.loginUsername.value;
    const loginPassword: string = formElements.loginPassword.value;

    const loginUser: User = { username: loginUsername, password: loginPassword};

    const fetchedData = await postLogin(loginUser);
    const dataToHandle: User | string = fetchedData.data;

    if (typeof dataToHandle === "string") {
      const errorP: HTMLElement = document.querySelector('#error');
      errorP.innerHTML = dataToHandle;

    } else {
      await postLogin(loginUser);
      ev.target.reset();
      window.location.href = 'user.html';
      }

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}