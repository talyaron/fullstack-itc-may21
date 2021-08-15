function handleGuestLogin(event){
    event.preventDefault()
    try{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const surveyID = params.surveyId
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value
    const result = axios.post('/users', {
                    username: username,
                    password: "",
                    email: email
                })
                if(result.data.password !== ""){
        alert(`Welcome Back ${username}!`)
       window.location.href=`/surveyvote.html?surveyId=${surveyID}`;
    }else{
    
    alert(`Login succesful, ${username}!`)
            window.location.href=`/surveyvote.html?surveyId=${surveyID}`;}
}catch (e) {
    console.error(e)
}}
document.querySelector(".guest-login").addEventListener("submit", handleGuestLogin)