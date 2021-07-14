var allColors = JSON.parse(localStorage.getItem("localSave"));
var IdColors = localStorage.getItem("saveColors");
var btnBack = document.querySelector('.btn');
var showColors = document.querySelector('.show2');
btnBack.addEventListener('click', redirectMainPage);
var colorsFilter = allColors.filter(function (elements) { return elements.id === IdColors; });
var rendeColors = function () {
    var html = '';
    colorsFilter.forEach(function (elements) {
        html += "<div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        <div class=\" container group-colors\" style=\"background-color: " + elements.color + "\">\n        \n        </div>\n        \n        \n        ";
    });
    showColors.innerHTML = html;
};
function redirectMainPage() {
    window.location.href = 'index.html';
}
rendeColors();
