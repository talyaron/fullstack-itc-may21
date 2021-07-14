//get query color


function renderColors() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(urlSearchParams);
    const { color } = Object.fromEntries(urlSearchParams.entries());
    console.log(color);

    //render squares on the screen
    const rootSquares = document.querySelector('#rootSquares');
    let html = '';

    for (let i: number = 0; i < 25; i++) {
        console.log(i);
        html += `<div class="box" style='background:#${color}'></div>`;
    }
    rootSquares.innerHTML = html;
}

