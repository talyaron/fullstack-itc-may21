// GET USER FOR WELCOME
const getUser = async () => {
  const getUser = await axios.get("/users/getUsers");
  const { name } = getUser.data;
  render(name);
};
const render = (name) => {
  const root = document.querySelector(".root");

  const renderIt = `<h2>Hello ${name} and Welcome!</h2>`;
  root.innerHTML = renderIt;
};
getUser();

// GET SURVAYS

const getLogInUser = async () => {
  const getUser = await axios.get("/survey/logUser");
  const dataUser = getUser.data;
  console.log(dataUser);
};
// const render = (name) => {
//   const root = document.querySelector(".root");

//   const renderIt = `<h2>Hello ${name} and Welcome!</h2>`;
//   root.innerHTML = renderIt;
// };
getLogInUser();
