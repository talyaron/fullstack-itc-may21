//Handle the form to create a new user:
const handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

async function doingSubmitCreate(ev) {
    try {
        const errorMessage = document.querySelector('#errorMessage');
        if (!errorMessage) throw new Error('There is a problem findind the container for the error message')
        ev.preventDefault();
        let { username, email, password, passwordVerify } = ev.target.elements
        username = username.value;
        email = email.value;
        password = password.value;
        passwordVerify = passwordVerify.value;
        if (!username || !email || !password) throw new Error("Please complete all the fields");
        
        const passRegExRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
        const passRegEx = new RegExp(passRegExRule,'gm');
        if (!passRegEx.test(password)) {
          alert('Your password must contain 6-8 characters, at least one uppercase letter, one lowercase letter, one number and one special character. Please try again');
          throw new Error('Password not secured enough');
        }
        
        if (password != passwordVerify) {
            alert('Your entered different passwords, please try again');
            throw new Error('Password verification failed');
          }
    
        ev.target.reset();
        const userDetails = { username, email, password };
        const userCreated = await axios.post('/user/register', userDetails);
        if (userCreated.data.user != null) {
            location.href = `03- surveys.html?email=${userCreated.data.user.email}`;
        } else {
            errorMessage.innerHTML = userCreated.data.message;
        }
    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = error;
    }
};