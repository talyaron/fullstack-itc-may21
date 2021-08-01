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
var newStudentform = document.querySelector('#students-form');
var searchStudentform = document.querySelector('#search-student-form');
var resetBtn = document.querySelector('#reset');
newStudentform.addEventListener('submit', function (ev) { return handleNewStudent(ev); });
searchStudentform.addEventListener('submit', function (ev) { return handleSearchStudent(ev); });
resetBtn.addEventListener('click', function (ev) { return handleReset(ev); });
function handleNewStudent(ev) {
    try {
        ev.preventDefault();
        var formElements = ev.target.elements;
        var name = formElements.studentName.value;
        var age = formElements.studentAge.valueAsNumber;
        var gradesAvg = formElements.studentGradesAvg.valueAsNumber;
        var student = { name: name, age: age, gradesAvg: gradesAvg };
        postStudent(student);
        getData(null, null);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearchStudent(ev) {
    try {
        ev.preventDefault();
        var formElements = ev.target.elements;
        var studentUuid = formElements.studentUuid.value;
        var searchType = formElements.searchType.value;
        getData(searchType, studentUuid);
        resetBtn.style.display = 'unset';
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function getData(searchType, studentUuid) {
    return __awaiter(this, void 0, Promise, function () {
        var dataToFetch, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(searchType === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getStudents()];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getStudent(searchType, studentUuid)];
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
    var root = document.querySelector(".students");
    var html = "";
    root.innerHTML = html;
    if (typeof dataToRender.data === "string") {
        root.innerHTML = dataToRender.data;
        return;
    }
    dataToRender.data.forEach(function (student) {
        html += "\n    <div class=\"students__item\">\n      <p id=\"" + student.uuid + "\">" + student.uuid + "</p>\n      <p id=\"" + student.uuid + "-name\">" + student.name + "</p>\n      <p id=\"" + student.uuid + "-age\">" + student.age + "</p>\n      <p id=\"" + student.uuid + "-gradesAvg\">" + student.gradesAvg + "</p>\n    </div>";
    });
    root.innerHTML = html;
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
