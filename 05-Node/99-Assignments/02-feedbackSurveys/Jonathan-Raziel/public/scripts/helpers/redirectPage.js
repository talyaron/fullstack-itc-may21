const isRedirect = JSON.parse(localStorage.getItem("isRedirect"))

const params = new URLSearchParams(window.location.search);
const idSurvey = params.get('surveyId');

localStorage.setItem('id', JSON.stringify(idSurvey));

if (isRedirect !== 0) {
    localStorage.setItem('isRedirect', JSON.stringify(1))
    function redirectpage() {


        const location =  window.location.origin

        window.location.replace(`${location}/surveyLogIn.html`)
    }
    setTimeout('redirectpage()', 500)
}