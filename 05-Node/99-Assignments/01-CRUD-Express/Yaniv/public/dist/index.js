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
getData(null, null);
var newToDoform = document.querySelector('#todos-form');
var searchToDosform = document.querySelector('#search-todos-form');
var resetBtn = document.querySelector('#reset');
// sorting should be on client side for quick response + not change the database order
newToDoform.addEventListener('submit', function (ev) { return handleNewToDo(ev); });
searchToDosform.addEventListener('keyup', function (ev) { return handleToDoSearch(ev); });
resetBtn.addEventListener('click', function (ev) { return handleReset(ev); });
function handleNewToDo(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var formElements, content, dueDate, toDo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    formElements = ev.target.elements;
                    content = formElements.toDoContent.value;
                    dueDate = Date.parse(formElements.toDoDueDate.value);
                    toDo = { content: content, status: 'Pending...', dueDate: dueDate };
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
    });
}
function handleToDoSearch(ev) {
    try {
        ev.preventDefault();
        var formElements = ev.target.elements;
        var content = formElements.toDoContent.value;
        var status = formElements.toDoStatus.value;
        if ((content === '') && (status === ''))
            return;
        getData(content, status);
        resetBtn.style.display = 'unset';
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function getData(toDoContent, toDoStatus) {
    return __awaiter(this, void 0, Promise, function () {
        var dataToFetch, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((!toDoContent) && (!toDoStatus))) return [3 /*break*/, 2];
                    return [4 /*yield*/, getToDos()];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, searchToDos(toDoContent, toDoStatus)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    dataToFetch = _a;
                    renderData(dataToFetch);
                    return [2 /*return*/];
            }
        });
    });
}
function renderData(dataToRender) {
    try {
        var upcomingRoot = document.querySelector(".upcoming");
        var laterRoot = document.querySelector(".later");
        var dateInThirtyDays = new Date();
        dateInThirtyDays.setDate(dateInThirtyDays.getDate() + 30);
        var options = { day: 'numeric', month: 'short' };
        var upcomingLimit = dateInThirtyDays.toLocaleDateString('en-US', options);
        var upcomingHtml_1 = "<h2 class=\"upcoming__item upcoming__item--header\">Todos due up to " + upcomingLimit + "</h2>";
        var laterHtml_1 = "<h2 class=\"later__item later__item--header\">Todos due after " + upcomingLimit + "</h2>";
        upcomingRoot.innerHTML = upcomingHtml_1;
        laterRoot.innerHTML = laterHtml_1;
        if (typeof dataToRender.data === "string") {
            upcomingRoot.innerHTML = "<h3>" + dataToRender.data + "</h3>";
            return;
        }
        var now_1 = Date.now();
        dataToRender.data.forEach(function (toDo) {
            if (((toDo.dueDate - now_1) * (1000 * 60 * 60 * 24)) < 30) {
                upcomingHtml_1 +=
                    "<div class=\"upcoming__item todo\" id=\"" + toDo.uuid + "\">\n          <div class=\"todo__item todo__item--content\">" + toDo.content + "</div>\n          <div class=\"todo__item todo__item--status\">" + toDo.status + "</div>\n          <div class=\"todo__item todo__item--due-date\">" + toDo.dueDate + "</div>\n          <button class=\"todo__item todo__item--edit\"><i class=\"fa fa-edit\"></i>div>\n          <button class=\"todo__item todo__item--delete\"><i class=\"fa fa-remove\"></i>div>\n        </div>";
            }
            else {
                laterHtml_1 +=
                    "<div class=\"later__item todo\" id=\"" + toDo.uuid + "\">\n          <div class=\"todo__item todo__item--content\">" + toDo.content + "</div>\n          <div class=\"todo__item todo__item--status\">" + toDo.status + "</div>\n          <div class=\"todo__item todo__item--due-date\">" + toDo.dueDate + "</div>\n          <button class=\"todo__item todo__item--edit\"><i class=\"fa fa-edit\"></i>div>\n          <button class=\"todo__item todo__item--delete\"><i class=\"fa fa-remove\"></i>div>\n        </div>";
            }
        });
        upcomingRoot.innerHTML = upcomingHtml_1;
        laterRoot.innerHTML = laterHtml_1;
    }
    catch (error) {
        console.error(error);
    }
}
function handleReset(ev) {
    try {
        ev.preventDefault();
        getData(null, null);
        resetBtn.style.display = 'none';
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
