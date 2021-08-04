// function allowDrop(ev) {
//     ev.preventDefault();
//   }
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
//   function drop(ev) {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }
var Title = /** @class */ (function () {
    function Title(title) {
        this.title = title;
    }
    return Title;
}());
var title = new Title('notwe one ');
//create form handle to submit title....
axios.post('/newTask', { title: title })
    .then(function (res) {
    console.log(res.data);
})["catch"](function (e) {
    console.error(e);
});
