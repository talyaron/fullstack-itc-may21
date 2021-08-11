const getUser = async () => {
  const getUser = await axios.get("/users/getUsers");
  const { name } = getUser.data;
  // const getIt = await getUser.json();
  render(name);
};
const render = (name) => {
  const root = document.querySelector(".root");

  const renderIt = `<h2>Hello ${name} and Welcome!</h2>`;
  root.innerHTML = renderIt;
};

getUser();
