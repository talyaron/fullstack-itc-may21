var colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', function (ev) {
    ev.preventDefault();
    var color = ev.target.value;
    var bodyElement = document.querySelector('body');
    bodyElement.style.backgroundColor = color;
    // shoud be on the server ??
    axios.post('/', { color: color }) // ??
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
    });
});
axios.get(); // ??
