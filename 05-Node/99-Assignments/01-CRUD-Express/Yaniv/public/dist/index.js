var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
getData(null, null);
var addToDoForm = document.querySelector('#add-todo-form');
var searchToDosForm = document.querySelector('#search-todos-form');
var searchToDosContentInput = document.querySelector('#search-todos-content');
var searchToDosStatusSelect = document.querySelector('#search-todos-status');
var editToDosAncestor = document.querySelector('.todos');
var editToDosform;
var resetBtn = document.querySelector('#reset');
// sorting should be on client side for quick response + not change the database order
// sort onclick on todo table header (status/due date. no need to sort be content)
var addToDoTimeInput = document.querySelector("#add-todo-due-date");
var ToDos = /** @class */ (function () {
    function ToDos(toDoList) {
        this.toDoList = toDoList;
    }
    ToDos.prototype.renderToDos = function () {
        try {
            var upcomingRoot = document.querySelector(".upcoming");
            var laterRoot = document.querySelector(".later");
            var dateInThirtyDays = new Date();
            dateInThirtyDays.setDate(dateInThirtyDays.getDate() + 30);
            var options_1 = { day: 'numeric', month: 'long' };
            var upcomingLimit = dateInThirtyDays.toLocaleDateString('en-US', options_1);
            for (var i = 0; i < searchToDosForm.children.length; i++) {
                searchToDosForm.children[i].disabled = false;
            }
            var upcomingHtml_1 = "<h2 class=\"upcoming__item upcoming__item--header upcoming__item--header-upcoming\">Up to " + upcomingLimit + "</h2>";
            var laterHtml_1 = "<h2 class=\"later__item later__item--header later__item--header-later\">After " + upcomingLimit + "</h2>";
            upcomingRoot.innerHTML = upcomingHtml_1;
            laterRoot.innerHTML = laterHtml_1;
            this.toDoList = this.toDoList.sort(function (a, b) { return Date.parse(a.dueDate) - Date.parse(b.dueDate); });
            this.toDoList = this.toDoList.sort(function (a, b) {
                var aId = a.status;
                var bId = b.status;
                if (aId > bId) {
                    return -1;
                }
                if (aId < bId) {
                    return 1;
                }
                return 0;
            });
            this.toDoList.forEach(function (toDo) {
                var toDoDueDate = new Date(toDo.dueDate);
                options_1 = { day: 'numeric', month: 'short', year: 'numeric' };
                var toDoDueDateString = toDoDueDate.toLocaleDateString('en-US', options_1);
                var statusClass = '';
                switch (toDo.status) {
                    case 'Pending...':
                        statusClass = 'todo__item--status-pending';
                        break;
                    case 'Done':
                        statusClass = 'todo__item--status-done';
                        break;
                    case 'In progress...':
                        statusClass = 'todo__item--status-in-progress';
                        break;
                    case 'Stuck':
                        statusClass = 'todo__item--status-stuck';
                        break;
                }
                var now = Date.now();
                var toDoDueDateNumber = toDoDueDate.getTime();
                var toDays = (1000 * 60 * 60 * 24);
                var inHowManyDays = (toDoDueDateNumber - now) / toDays;
                if (inHowManyDays < 30) {
                    var dueDateClass = '';
                    if (inHowManyDays < 8) {
                        dueDateClass = (inHowManyDays > 0) ? ' todo__item--due-date-soon' : ' todo__item--due-date-passed';
                    }
                    upcomingHtml_1 +=
                        "<div class=\"upcoming__item upcoming__item--upcoming todo\" id=\"" + toDo.uuid + "\">\n            <div class=\"todo__item todo__item--content\">" + toDo.content + "</div>\n            <div class=\"todo__item todo__item--status " + statusClass + "\">" + toDo.status + "</div>\n            <div class=\"todo__item todo__item--due-date" + dueDateClass + "\">" + toDoDueDateString + "</div>\n            <div class=\"todo__item todo__item--delete\"><i class=\"fa fa-trash\"></i></div>\n          </div>";
                }
                else {
                    laterHtml_1 +=
                        "<div class=\"later__item later__item--later todo\" id=\"" + toDo.uuid + "\">\n            <div class=\"todo__item todo__item--content\">" + toDo.content + "</div>\n            <div class=\"todo__item todo__item--status " + statusClass + "\">" + toDo.status + "</div>\n            <div class=\"todo__item todo__item--due-date\">" + toDoDueDateString + "</div>\n            <div class=\"todo__item todo__item--delete\"><i class=\"fa fa-trash\"></i></div>\n          </div>";
                }
            });
            upcomingRoot.innerHTML = upcomingHtml_1;
            laterRoot.innerHTML = laterHtml_1;
        }
        catch (error) {
            console.error(error);
        }
    };
    return ToDos;
}());
addToDoForm.addEventListener('submit', function (ev) { return handleAddToDo(ev); });
searchToDosContentInput.addEventListener('keyup', function (ev) { return handleSearchToDo(ev); });
searchToDosStatusSelect.addEventListener('change', function (ev) { return handleSearchToDo(ev); });
editToDosAncestor.addEventListener('click', function (ev) { return handleClickedToDo(ev); });
resetBtn.addEventListener('click', function (ev) { return handleReset(ev); });
addToDoTimeInput.addEventListener('click', function (ev) { return onlyFutureToDos(ev); });
var handleAddToDo = function (ev) { return __awaiter(_this, void 0, Promise, function () {
    var formElements, content, dueDate, toDo, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                ev.preventDefault();
                formElements = ev.target.elements;
                content = formElements.toDoContent.value;
                dueDate = new Date(formElements.toDoDueDate.value);
                toDo = { content: content, status: 'Pending...', dueDate: dueDate, uuid: null, createdDate: new Date(), editedDate: null };
                return [4 /*yield*/, postToDo(toDo)];
            case 1:
                _a.sent();
                return [4 /*yield*/, getData(null, null)];
            case 2:
                _a.sent();
                ev.target.reset();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleSearchToDo = function (ev) {
    try {
        var formElements = ev.target.parentElement.elements;
        var content = formElements.toDoContent.value;
        var status = formElements.toDoStatus.value;
        if ((content === '') && (status === ''))
            return;
        getData(content, status);
        resetBtn.style.display = 'unset';
    }
    catch (error) {
        console.error(error);
    }
};
var handleEditToDo = function (ev) { return __awaiter(_this, void 0, Promise, function () {
    var formElements, uuid, content, status, dueDate, toDo, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                ev.preventDefault();
                formElements = ev.target.elements;
                uuid = ev.target.getAttribute("id").replace('-edit-form', '');
                content = formElements.toDoContent.value;
                status = formElements.toDoStatus.value;
                dueDate = new Date(formElements.toDoDueDate.value);
                toDo = { content: content, status: status, dueDate: dueDate, uuid: uuid, createdDate: null, editedDate: new Date() };
                return [4 /*yield*/, putToDo(toDo)];
            case 1:
                _a.sent();
                return [4 /*yield*/, getData(null, null)];
            case 2:
                _a.sent();
                ev.target.reset();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleDeleteToDo = function (ev) { return __awaiter(_this, void 0, Promise, function () {
    var toDoAnsestor, uuid, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                toDoAnsestor = (ev.target.className === 'fa fa-trash') ? ev.target.parentElement.parentElement : ev.target.parentElement;
                uuid = toDoAnsestor.getAttribute("id");
                return [4 /*yield*/, deleteToDo(uuid)];
            case 1:
                _a.sent();
                return [4 /*yield*/, getData(null, null)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleReset = function (ev) {
    try {
        getData(null, null);
        resetBtn.style.display = 'none';
    }
    catch (error) {
        console.error(error);
    }
};
