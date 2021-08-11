const root = document.querySelector('#root');

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/userInfo');
    const {email , nameUser} = userInfo.data.cookie
    renderuserInfo(email,nameUser);
};

getUserInfoFromCookie();

function renderuserInfo(email,nameUser) {
    const toRender = `<h1>Welcome to the spy <span class="root__title">${nameUser}</span></h1>
                      <p>Soon you will receive instructions in your email <span class="root__title">${email}</span></p>`
    root.innerHTML = toRender;
};