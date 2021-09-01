async function getUserDetails() {
    try {
        const userDetails = await axios.get('/user/details');
        const { user } = userDetails.data;
        
        const headerElement: HTMLElement = document.querySelector('.header');
        headerElement.style.backgroundColor = user.favColor;
        
        const usernameElement: HTMLElement = document.querySelector('.header__item--username');
        usernameElement.innerText = `Logged in as ${user.username}`;
        
        const imgElement: HTMLElement = document.querySelector('.header__item--img');
        imgElement.setAttribute('src', user.imageUrl);
        
    } catch (error) {
        console.error(error.message);
    }
}

getUserDetails();

const logoutBtn: HTMLElement = document.querySelector('#logout');

logoutBtn.addEventListener('click', ev => logout(ev));

function logout(ev: any) {
  try {
      swal({
          title: `Bye!`,
          text: `Hope to see you again soon!`,
          buttons: ["Stay", "Byeee"],
          dangerMode: true
        }).then( async (willLogout) => {
            if (willLogout) {
                const doLogout = await axios.get('/user/logout');
                const { username } = doLogout.data;
                swal(`${username}, you are now logged out 🖐`, {
                    icon: "success",
                    button: "🖐"
                }).then( () => {window.location.href = '/';});
            }
        });

    } catch (error) {
    console.error(error.message);
    }
}
