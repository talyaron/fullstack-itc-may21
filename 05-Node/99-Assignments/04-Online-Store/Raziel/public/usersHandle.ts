

//--------------------------------------------------------------------------<Register>-----------------------------------------------------------------//


// register pop up

function openRegisterForm(){
    document.body.classList.add("showRegisterForm");
  }
  function closeRegisterForm(){
    document.body.classList.remove("showRegisterForm");
  }
  // end-----
  
  
  const handelReg=document.querySelector('#registerForm');
  
  handelReg.addEventListener('submit',handelRegistration);
  async function handelRegistration(event) {
  
    try {
      event.preventDefault();
      let{username,email,password,role}=event.target.elements;
      username=username.value;
      email=email.value
      password=password.value;
      // to check if check if its an admin ect.
      if(role.checked){
        role="admin";
        password=username+"admin123";
      }
      else{
        role="user"
      }
      
      if(!username||!email||!password) throw new Error("Please fill all the the fields!")
  
      event.target.reset();
      const regUser={username,email,password,role};
     
      const createdUser=await axios.post('/user/register',regUser);
  
      if(createdUser.data.user.role==="user"){
        window.location.href=`./index.html`
      }
      else if(createdUser.data.user.role==="admin"){
        window.location.href=`./admin.html`
      }
      console.log(regUser);
    } catch (error) {
      console.error(error);
  
    }
  }
  
  
  //--------------------------------------------------------------------------<Register End>-----------------------------------------------------------------//
  
  
  
  //--------------------------------------------------------------------------<Log In>-----------------------------------------------------------------//
  
  //  Login pop up
  function openLoginForm(){
    document.body.classList.add("showLoginForm");
  }
  function closeLoginForm(){
    document.body.classList.remove("showLoginForm");
  }
  
  
  // end-----
  
  
  
  const handelLogIn=document.querySelector("#loginForm");
  handelLogIn.addEventListener("submit",handelLoggingIn);
  
  async function handelLoggingIn(event){
  
   try {
     event.preventDefault();
     let{email,password}=event.target.elements;
     email=email.value;
     password=password.value;
     if ((!email) || (!password)) throw new Error("Please complete all the fields");
        event.target.reset();
        const userInfo={email,password}
        const userLogin=await axios.post('/user/login',userInfo);

        if (userLogin.data.user.role === 'user') {
          window.location.href = `index.html`;

      } else if (userLogin.data.user.role === 'admin') {
              window.location.href = `./admin.html`;
          
      }






   } catch (error) {
    console.error(error);

   }
  }
  
  
  //--------------------------------------------------------------------------<Log In End>-----------------------------------------------------------------//
  