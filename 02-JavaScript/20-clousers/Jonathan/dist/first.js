var boardFirst = document.querySelector('#boardFirst');
var btnReturn = document.querySelector('.header__return');
var residentList = JSON.parse(localStorage.getItem('exercise'));
renderExerciseOne(residentList);
function renderExerciseOne(arrayToRenderFirst) {
    try {
        if (!boardFirst)
            throw new Error('It cant be possible to show the result of this exercise');
        function countMaker() {
            var count = 0;
            function _welcomeResident(name) {
                count++;
                return "<div class=\"boardFirst__resident\">\n                    <span class=\"boardFirst__resident--welcome\">Hello " + name + ", you are resident Nro: " + count + "</span>\n                    </div>";
            }
            return _welcomeResident;
        }
        var welcomeResident_1 = countMaker();
        var html_1 = '';
        arrayToRenderFirst.forEach(function (elem) {
            var name = elem.name;
            //if (name !== 'l') {
            html_1 += "" + welcomeResident_1(name);
            // }
        });
        boardFirst.innerHTML = html_1;
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
