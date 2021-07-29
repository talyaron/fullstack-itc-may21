var form = document.querySelector('#jokes-form');
form.addEventListener('submit', function (ev) { return handleJoke(ev); });
function handleJoke(ev) {
    ev.preventDefault();
    var joke = ev.target.elements.newJoke.value;
    console.log(joke);
    axios.post('/addJoke', { joke: joke })
        .then(function (res) {
        console.log(res.data);
    })["catch"](function (e) {
        console.error(e);
    });
    ev.target.reset();
}
;
