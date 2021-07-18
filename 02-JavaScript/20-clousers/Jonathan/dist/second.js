var boardSecond = document.querySelector('#boardSecond');
var btnReturn = document.querySelector('.header__return');
var residentList = JSON.parse(localStorage.getItem('exercise'));
renderExerciseTwo(residentList);
function renderExerciseTwo(arrayToRenderTwo) {
    try {
        if (!boardSecond)
            throw new Error('It cant be possible to show the result of this exercise');
        function getResidents() {
            var arrayNames = [];
            return function _getName(name) {
                arrayNames.push(name);
                return arrayNames;
            };
        }
        var welcomeResident2 = getResidents();
        var result = void 0;
        var html_1 = '';
        for (var i = 0; i < arrayToRenderTwo.length; i++) {
            var name = arrayToRenderTwo[i].name;
            result = (welcomeResident2("" + name));
        }
        result.forEach(function (element) {
            html_1 += "<div class=\"boardSecond--resident\">" + element + "</div>";
        });
        boardSecond.innerHTML = html_1;
    }
    catch (e) {
        alert(e);
    }
}
btnReturn.addEventListener('click', returnPage);
function returnPage() {
    try {
        window.location.href = "index.html";
        if (!window.location.href)
            throw new Error("The page does not exist");
    }
    catch (e) {
        alert(e);
    }
}
