async function addUser(fname, lname, company, email, password, repassword) {
    try {
        const res = await axios.post('/users/register', { fname, lname, company, email, password, repassword })


        swal(`Hello ${fname}, you're registration is complete!`)
    } catch (error) {
        swal(error.response.data);
    }
}


const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", loginFormSubmit);

async function loginFormSubmit(ev) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    await loginUser(email, password);
    //validate??? 
}

async function loginUser(email, password) {
    try {


        const res = await axios.post('/users/login', { email, password });
        console.log(res.data)
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = "store.html"
    } catch (error) {
        console.log(error.response);
    }
}

const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", handleRegisterSubmit)

function handleRegisterSubmit(ev) {
    ev.preventDefault();
    const fname = event.target.elements.fname.value;
    const lname = event.target.elements.lname.value;
    const company = event.target.elements.company.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const repassword = event.target.elements.repassword.value;
    addUser(fname, lname, company, email, password, repassword);

    ev.target.reset();
}




const login = document.querySelector("#login")
login.style.display = "none";
function dispLogin() {

    login.style.display = "block";

}


