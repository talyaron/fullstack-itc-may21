async function getUser() {
    try {
      const loggedInUser = await axios.get("/user");
      const { username } = loggedInUser.data;
      const h1Element: HTMLElement = document.querySelector('#hello');
      h1Element.insertAdjacentHTML('beforeend',username);
      return username;
  
    } catch (error) {
      console.error(error);
    }
  }

getUser();