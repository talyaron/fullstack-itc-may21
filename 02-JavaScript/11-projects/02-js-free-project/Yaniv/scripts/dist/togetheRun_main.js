var Run = /** @class */ (function () {
    function Run(runDistance, runTime, runArea) {
        this.runMatch = false;
        this.runId = "run" + Math.random().toString(16).slice(2);
        this.runRunnerId = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerId; // TODO get logged in runner from localStorage
        this.runDistance = runDistance;
        this.runTime = runTime;
        this.runArea = runArea;
    }
    return Run;
}());
document.querySelector("#total_sum").innerHTML = "0"; // for the future - get from localStorage if registered
document.querySelector("#total_counts").innerHTML = "0"; // for the future - get from localStorage if registered
var LoggedInRunner = /** @class */ (function () {
    function LoggedInRunner() {
        // generated on the registration page - passed on to other pages via localStorage
        this.runnerName = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerName; // required on registration
        this.runnerId = JSON.parse(localStorage.getItem("currentRunner")).runnerId; // generated on registration
        this.runnerEmail = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerEmail; // required on registration
        this.runnerPassword = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerPassword; // required on registration
        this.runnerGender = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerGender; // Male, Female, Unknown (default) - TODO add method editDetails
        this.runnerAgeGroup = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerAgeGroup; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default) - TODO add method editDetails
        this.runnerChat = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerChat; // chatty, so so, only when necessary, Unknown (default) - TODO add method editDetails
        this.runnerPref = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerPref; // default on registration - TODO add method to edit
        this.runnerProfImg = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerProfImg; // TODO add method editDetails
        this.runnerRuns = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerRuns; // empy on registration
        this.runnerRunsHtml = document.querySelector(".runs").innerHTML; // DOM representation of all runs - new runs to DOM are added to this innerHTML
        this.runnerDistance = Number(document.querySelector("#total_sum").innerHTML);
    }
    LoggedInRunner.prototype.updatePersonalDetails = function () {
        var mainTitle = document.querySelector("title");
        var runnerNameContainter = document.querySelector(".summary__item--runner_name");
        var runnerProfImg = document.querySelector(".profile_image__item--profile_image");
        mainTitle.insertAdjacentHTML('afterbegin', "" + this.runnerName);
        runnerNameContainter.insertAdjacentHTML('beforeend', this.runnerName + "!");
        runnerProfImg.title = "" + this.runnerName;
    };
    LoggedInRunner.prototype.addRun = function (run) {
        this.runnerRuns.push(run);
        this.addRunToDOM(run);
        this.refreshTotalToDOM(run.runDistance);
    };
    LoggedInRunner.prototype.addRunToDOM = function (run) {
        // TODO adjust to this project
        try {
            var runsContainer = document.querySelector(".runs");
            var matchFAClass = run.runMatch ? "check-double" : "check";
            var matchTitle = run.runMatch ? "Partner found!" : "Pending partner...";
            var runColor = run.runMatch ? "aqua" : "orange";
            var runFormatedDate = run.runTime.getDate() + "-" + (run.runTime.getMonth() + 1) + "-" + run.runTime.getFullYear() + " " + run.runTime.getHours() + ":" + run.runTime.getMinutes();
            var runsHTML = "<div class=\"runs__item runs__item--action\">\n      <i id=\"match\" class=\"fas fa-2x fa-" + matchFAClass + "-circle\" title=\"" + matchTitle + "\" style=\"color: " + runColor + ";\"></i>\n      <div id=\"runs_amount\" style=\"color: " + runColor + ";\">\n        " + Math.abs(run.runDistance) + " Km\n      </div>\n      <div id=\"run_time\">" + runFormatedDate + "</div>\n      <div id=\"runs_area\">" + run.runArea + "</div>\n    </div>";
            runsContainer.insertAdjacentHTML("beforeend", runsHTML);
            var totalRunsContainer = document.querySelector("#total_counts");
            totalRunsContainer.innerText = "" + this.runnerRuns.length;
        }
        catch (er) {
            console.error(er);
        }
    };
    LoggedInRunner.prototype.refreshTotalToDOM = function (runDistance) {
        try {
            this.runnerDistance += runDistance;
            var domTotalDist = document.querySelector("#total_sum");
            domTotalDist.innerText = "" + this.runnerDistance;
            if (this.runnerDistance > 199) {
                domTotalDist.style.color = "gold"; // TODO add method to change the badge
            }
            else if (this.runnerDistance > 99) {
                domTotalDist.style.color = "silver";
            }
            else {
                domTotalDist.style.color = "#cd7f32";
            }
        }
        catch (er) {
            console.error(er);
        }
    };
    return LoggedInRunner;
}());
// let RunsPool : Array<Run> = []; // for the future - pool of all runners future runs, so matches can be made
var isModalOpen = false;
var logOut = function () {
    try {
        var logoutBtn = document.querySelector(".summary__item--logout");
        logoutBtn.addEventListener("click", function (ev) {
            console.log('hi');
            window.location.href = "togetheRun_registration.html";
        });
    }
    catch (er) {
        console.error(er);
    }
};
var openModal = function () {
    try {
        var modal_1 = document.querySelector(".modalWrapper");
        var modalBox_1 = document.querySelector(".modalBox");
        var addRunBtn = document.querySelector(".dashboard__item--add");
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
var runner = new LoggedInRunner();
var runSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runDistance = Number(ev.target.elements.runDistance.value);
        var runTime = new Date(ev.target.elements.runTime.value);
        var runArea = ev.target.elements.runArea.value;
        var run = new Run(runDistance, runTime, runArea);
        runner.addRun(run);
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
runner.updatePersonalDetails();
logOut();
openModal();
closeModal();
