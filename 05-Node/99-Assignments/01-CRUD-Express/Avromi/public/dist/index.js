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
var title = "title";
//create form handle to submit title....
axios.post('/newTask', { title: title })
    .then(function (res) {
    console.log(res.data);
})["catch"](function (e) {
    console.error(e);
});
