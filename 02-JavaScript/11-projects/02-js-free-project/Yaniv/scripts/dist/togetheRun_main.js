var Run = /** @class */ (function () {
    function Run(runDistance, runTime) {
        this.runMatch = false;
        this.runId = "run" + Math.random().toString(16).slice(2);
        this.runRunnerId = JSON.parse(localStorage.getItem('currentRunner')).runnerId;
        this.runDistance = runDistance;
        this.runTime = runTime;
    }
    ; // TODO get logged in runner from localStorage
    return Run;
}());
document.querySelector("#total_sum").innerHTML = "0"; // for the future - get from localStorage if registered
document.querySelector("#total_counts").innerHTML = "0"; // for the future - get from localStorage if registered
var Runner = /** @class */ (function () {
    function Runner() {
        this.runnerId = JSON.parse(localStorage.getItem('currentRunner')).runnerId; // generated on registration
        this.runnerEmail = JSON.parse(localStorage.getItem('currentRunner')).runnerEmail; // required on registration
        this.runnerPassword = JSON.parse(localStorage.getItem('currentRunner')).runnerPassword; // required on registration
        this.runnerGender = JSON.parse(localStorage.getItem('currentRunner')).runnerGender; // Male, Female, Unknown (default) - TODO add method editDetails
        this.runnerAgeGroup = JSON.parse(localStorage.getItem('currentRunner')).runnerAgeGroup; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default) - TODO add method editDetails
        this.runnerChat = JSON.parse(localStorage.getItem('currentRunner')).runnerChat; // chatty, so so, only when necessary, Unknown (default) - TODO add method editDetails
        this.runnerPref = JSON.parse(localStorage.getItem('currentRunner')).runnerPref; // default on registration - TODO add method to edit
        this.runnerProfImg = JSON.parse(localStorage.getItem('currentRunner')).runnerProfImg; // TODO add method editDetails
        this.runnerRuns = JSON.parse(localStorage.getItem('currentRunner')).runnerRuns; // empy on registration
        this.runnerRunsHtml = document.querySelector('.runs').innerHTML; // DOM representation of all runs - new runs to DOM are added to this innerHTML
        this.runnerDistance = Number(document.querySelector("#total_distance").innerHTML.replace(" Km", ""));
    }
    Runner.prototype.addRun = function (run) {
        this.runnerRuns.push(run);
        this.addRunToDOM(run);
        this.refreshTotal(run.runDistance);
    };
    Runner.prototype.addRunToDOM = function (run) {
        try {
            var runsContainer = document.querySelector(".runs");
            var signFAClass = run.runDistance >= 0 ? "plus" : "minus";
            var signTitle = run.runDistance >= 0 ? "Income" : "Expense";
            var runColor = run.runDistance >= 0 ? "green" : "red";
            var runFormatedDate = run.runTime.getDate() + "-" + (run.runTime.getMonth() + 1) + "-" + run.runTime.getFullYear() + " " + run.runTime.getHours() + ":" + run.runTime.getMinutes();
            var totalBeforeContainer = document.querySelector("#total_distance");
            var runsHTML = "<div class=\"runs__item runs__item--action\">\n      <i id=\"sign\" class=\"fas fa-2x fa-" + signFAClass + "-circle\" title=\"" + signTitle + "\" style=\"color: " + runColor + ";\"></i>\n      <div id=\"runs_amount\" style=\"color: " + runColor + ";\">\n        " + Math.abs(run.runDistance) + " Km\n      </div>\n      <div id=\"temp_total\">Balace: " + (Number(totalBeforeContainer.innerHTML.replace(' Km', '')) + run.runDistance) + " Km</div>\n      <div id=\"runs_date\">" + runFormatedDate + "</div>\n      <div id=\"runs_business\">" + run.runBiz + "</div>\n      <div id=\"runs_id\">" + run.runId + "</div>\n    </div>";
            runsContainer.insertAdjacentHTML('beforeend', runsHTML);
            var totalRunsContainer = document.querySelector("#total_togetheruns");
            totalRunsContainer.innerText = runFormatedDate + " TogetheRuns";
        }
        catch (er) {
            console.error(er);
        }
    };
    Runner.prototype.refreshTotal = function (runDistance) {
        this.runnerDistance += runDistance;
        this.updateDOMTotal(this.runnerDistance);
    };
    Runner.prototype.updateDOMTotal = function (runnerDistance) {
        try {
            var domTotalDist = document.querySelector("#total_distance");
            domTotalDist.innerText = runnerDistance + " Km";
            if (runnerDistance > 0) {
                domTotalDist.style.color = "green";
            }
        }
        catch (er) {
            console.error(er);
        }
    };
    Runner.prototype.logout = function () {
        localStorage.setItem('currentRunner', null);
        window.location.href = 'togetheRun_registration.html';
    };
    return Runner;
}());
var RunsPull = []; // for the future - pull of all runners future runs, so matches can be made
var isModalOpen = false;
var addRunBtn = document.querySelector(".dashboard__item--add");
var openModal = function () {
    try {
        var modal_1 = document.querySelector(".modalWrapper");
        var modalBox_1 = document.querySelector(".modalBox");
        addRunBtn.addEventListener("click", function (ev) {
            isModalOpen = true;
            modal_1.style.display = "flex";
            modalBox_1.style.display = "unset";
        });
    }
    catch (er) {
        console.error(er);
    }
};
var closeModal = function () {
    try {
        var close = document.querySelector(".close");
        var modal_2 = document.querySelector(".modalWrapper");
        var modalBox_2 = document.querySelector(".modalBox");
        close.addEventListener("click", function (ev) {
            isModalOpen = false;
            modal_2.style.display = "none";
            modalBox_2.style.display = "none";
        });
    }
    catch (er) {
        console.error(er);
    }
};
var runs = new Runner();
var runSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runDistance = Number(ev.target.elements.runDistance.value);
        var runTime = ev.target.elements.runTime.value;
        var run = new Run(runDistance, runTime);
        runs.addRun(run);
        var modal = document.querySelector(".modalWrapper");
        var modalBox = document.querySelector(".modalBox");
        isModalOpen = false;
        modal.style.display = "none";
        modalBox.style.display = "none";
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
openModal();
closeModal();
