async function addUser(fname, lname, company, email, password, repassword) {
    try {
        const res = await axios.post('/users/register', { fname, lname, company, email, password, repassword })
        
        if(res.status === 400){
           console.log(res.data);
        }
        swal(`Hello ${fname}, you're registration is complete!`)
    } catch (error) {
        console.log(error);
    }
}


const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", loginFormSubmit);

function loginFormSubmit(ev){
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    //validate??? 
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