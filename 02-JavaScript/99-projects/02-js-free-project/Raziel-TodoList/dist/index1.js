var Task = /** @class */ (function () {
    function Task(task, date) {
        this.task = task;
        this.date = date;
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Task;
}());
var List = /** @class */ (function () {
    function List() {
        this.toDoList = [];
    }
    List.prototype.addTask = function (task) {
        try {
            this.toDoList.push(task);
            localStorage.setItem("taskList", JSON.stringify(this.toDoList));
        }
        catch (e) {
            console.log("Error");
        }
    };
    List.prototype.displayList = function () {
        var root = document.querySelector('#root');
        var html = this.toDoList.map(function (el) {
            return (" <li class=\"Test\">" + el.task + "  " + el.date + " <button onclick='handelRemove(\"" + el.id + "\")'><i class=\"fas fa-trash\"></i></button> </li>");
        }).join('');
        root.innerHTML = html;
    };
    List.prototype.deleteList = function (id) {
        this.toDoList = this.toDoList.filter(function (ev) { return ev.id !== id; });
        this.displayList();
    };
    return List;
}());
var list = new List();
function handelTask(ev) {
    ev.preventDefault();
    var task = ev.target.elements.task.value;
    var date = ev.target.elements.date.value;
    var newTask = new Task(task, date);
    list.addTask(newTask);
    list.displayList();
    ev.target.reset();
}
var handelRemove = function (listId) {
    list.deleteList(listId);
};
