var Run = /** @class */ (function () {
    function Run(runDistance, runDate) {
        this.runId = "id" + Math.random().toString(16).slice(2);
        this.runDistance = runDistance;
        this.runDate = runDate;
    }
    return Run;
}());
document.querySelector("#total_distance").innerHTML = "0 Km";
var Runner = /** @class */ (function () {
    function Runner() {
        this.allRuns = [];
        this.totalDistance = Number(document.querySelector("#total_distance").innerHTML.replace(" Km", ""));
    }
    // constructor (profImageUrl : string) {
    //     this.profImageUrl = profImageUrl;
    // }
    Runner.prototype.addRun = function (run) {
        this.allRuns.push(run);
        this.addRunToDOM(run);
        this.refreshTotal(run.runDistance);
    };
    Runner.prototype.addRunToDOM = function (run) {
        try {
            var runsContainer = document.querySelector(".runs");
            var signFAClass = run.runDistance >= 0 ? "plus" : "minus";
            var signTitle = run.runDistance >= 0 ? "Income" : "Expense";
            var runColor = run.runDistance >= 0 ? "green" : "red";
            var runFormatedDate = run.runDate.getDate() + "-" + (run.runDate.getMonth() + 1) + "-" + run.runDate.getFullYear() + " " + run.runDate.getHours() + ":" + run.runDate.getMinutes();
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
        this.totalDistance += runDistance;
        this.updateDOMTotal(this.totalDistance);
    };
    Runner.prototype.updateDOMTotal = function (totalDistance) {
        try {
            var domTotalDist = document.querySelector("#total_distance");
            domTotalDist.innerText = totalDistance + " Km";
            if (totalDistance >= 0) {
                domTotalDist.style.color = "green";
            }
            else {
                domTotalDist.style.color = "red";
            }
        }
        catch (er) {
            console.error(er);
        }
    };
    return Runner;
}());
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
        var runDate = ev.target.elements.runDate.value;
        var run = new Run(runDistance, runDate);
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
