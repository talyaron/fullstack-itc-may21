//get query color
function renderColors() {
    var urlSearchParams = new URLSearchParams(window.location.search);
    console.log(urlSearchParams);
    var color = Object.fromEntries(urlSearchParams.entries()).color;
    console.log(color);
    //render squares on the screen
    var rootSquares = document.querySelector('#rootSquares');
    var html = '';
    for (var i = 0; i < 25; i++) {
        console.log(i);
        html += "<div class=\"box\" style='background:#" + color + "'></div>";
    }
    rootSquares.innerHTML = html;
}
