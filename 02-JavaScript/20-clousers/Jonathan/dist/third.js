var boardThird = document.querySelector('#boardThird');
var btnReturn = document.querySelector('.header__return');
var residentList = JSON.parse(localStorage.getItem('exercise'));
renderExerciseThree(residentList);
function renderExerciseThree(arrayToRenderThree) {
    try {
        if (!boardThird)
            throw new Error('It cant be possible to show the result of this exercise');
        function getResidents() {
            var buildingA = [];
            var buildingB = [];
            return function _getName(name, building) {
                if (building === 'A') {
                    buildingA.push(name);
                }
                else {
                    buildingB.push(name);
                }
                return [
                    buildingA,
                    buildingB
                ];
            };
        }
        var getNames = getResidents();
        var result = void 0;
        var html_1 = '';
        for (var i = 0; i < arrayToRenderThree.length; i++) {
            var _a = arrayToRenderThree[i], name = _a.name, building = _a.building;
            result = (getNames("" + name, "" + building));
        }
        var buildingA = result[0], buildingB = result[1];
        html_1 += "<div>\n            <div class=\"boardThird__building\">Building A </div>";
        buildingA.forEach(function (element) {
            html_1 += "<div  class = \"boardThird__building--resident\">" + element + "</div>";
        });
        html_1 += '</div>';
        html_1 += "<div>\n            <div class=\"boardThird__building\">Building B</div>";
        buildingB.forEach(function (element) {
            html_1 += "<div class = \"boardThird__building--resident\">" + element + "</div>";
        });
        html_1 += '</div>';
        boardThird.innerHTML = html_1;
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
