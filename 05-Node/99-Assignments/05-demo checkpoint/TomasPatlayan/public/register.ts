const formPost = document.getElementById("formPost");
const userPost = async (event) => {
  event.preventDefault();
  let { name, color, image } = event.target.elements;
  name = name.value;
  color = color.value;
  image = image.value;

  const userData = { name, color, image };
  const postUser = await axios.post("/user/register", userData);
  event.target.reset()
  window.location.href = 'users.html'
  renderUser(postUser);
};
formPost.addEventListener("submit", userPost);