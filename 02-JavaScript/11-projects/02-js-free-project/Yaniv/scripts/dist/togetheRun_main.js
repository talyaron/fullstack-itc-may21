var Run = /** @class */ (function () {
    function Run(runDistance, runTime, runArea) {
        this.runMatch = false;
        this.runId = "run" + Math.random().toString(16).slice(2);
        this.runRunnerId = JSON.parse(localStorage.getItem("currentRunner"))
            .runnerId;
        this.runDistance = runDistance;
        this.runTime = runTime;
        this.runArea = runArea;
    }
    return Run;
}());
var LoggedInRunner = /** @class */ (function () {
    function LoggedInRunner() {
        // generated on the registration page - passed on to other pages via localStorage
        this.runnerName = JSON.parse(localStorage.getItem("currentRunner")).runnerName; // required on registration
        this.runnerId = JSON.parse(localStorage.getItem("currentRunner")).runnerId; // generated on registration
        this.runnerEmail = JSON.parse(localStorage.getItem("currentRunner")).runnerEmail; // required on registration
        this.runnerPassword = JSON.parse(localStorage.getItem("currentRunner")).runnerPassword; // required on registration
        this.runnerGender = JSON.parse(localStorage.getItem("currentRunner")).runnerGender; // Male, Female, Unknown (default) - TODO add method editDetails
        this.runnerAgeGroup = JSON.parse(localStorage.getItem("currentRunner")).runnerAgeGroup; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default) - TODO add method editDetails
        this.runnerChat = JSON.parse(localStorage.getItem("currentRunner")).runnerChat; // chatty, so so, only when necessary, Unknown (default) - TODO add method editDetails
        this.runnerPref = JSON.parse(localStorage.getItem("currentRunner")).runnerPref; // default on registration - TODO add method to edit
        this.runnerProfImg = JSON.parse(localStorage.getItem("currentRunner")).runnerProfImg; // TODO add method editDetails
        this.runnerRuns = JSON.parse(localStorage.getItem("currentRunner")).runnerRuns; // empty on registration
        this.runnerRunsHtml = JSON.parse(localStorage.getItem("currentRunner")).runnerRunsHtml; // DOM representation of all runs - new runs to DOM are added to this innerHTML
        this.runnerDistance = JSON.parse(localStorage.getItem("currentRunner")).runnerDistance;
    }
    LoggedInRunner.prototype.personalDetailsToDOM = function () {
        var mainTitle = document.querySelector("title");
        var runnerNameContainter = document.querySelector(".summary__item--runner_name");
        var runnerProfileImg = document.querySelector(".profile_image__item--profile_image");
        var runnerRunsDOM = document.querySelector(".runs");
        var ruunerTotalDistance = document.querySelector("#total_sum");
        var runnerRunsCounter = document.querySelector("#total_counts");
        mainTitle.insertAdjacentHTML('afterbegin', "" + this.runnerName);
        runnerNameContainter.insertAdjacentHTML('beforeend', this.runnerName + "!");
        runnerProfileImg.title = "" + this.runnerName;
        if (this.runnerProfImg === null) {
            runnerProfileImg.setAttribute("src", "images/togetheRun_logo.png");
        }
        else {
            runnerProfileImg.setAttribute("src", this.runnerProfImg);
        }
        runnerRunsDOM.innerHTML = this.runnerRunsHtml;
        ruunerTotalDistance.innerHTML = "" + this.runnerDistance;
        runnerRunsCounter.innerHTML = "" + this.runnerRuns.length;
        // window.location.href = `togetheRun_main.html?${currentRunner.runnerId}`; // causes endless loop of loading the page...can be solved by localSession.setItem("isFirstLoad",false) during first loading of the page
    };
    LoggedInRunner.prototype.addRun = function (run) {
        this.runnerRuns.push(run);
        this.runnerRuns = this.runnerRuns.sort(function (a, b) { return a.runTime - b.runTime; });
        this.renderRunsToDOM();
        this.refreshDOMSummary(run.runDistance);
    };
    LoggedInRunner.prototype.renderRunsToDOM = function () {
        try {
            var runsContainer_1 = document.querySelector(".runs");
            runsContainer_1.innerHTML = '';
            this.runnerRuns.forEach(function (run) {
                var matchFAClass = run.runMatch ? "check-double" : "check";
                var matchTitle = run.runMatch ? "Partner found!" : "Pending partner...";
                var runColor = run.runMatch ? "aqua" : "orange";
                var runFormatedDate = "" + run.runTime.toISOString().substring(0, 16).replace('T', ' ');
                var runHTML = "<div class=\"runs__item runs__item\">\n          <i id=\"match\" class=\"fas fa-2x fa-" + matchFAClass + "-circle\" title=\"" + matchTitle + "\" style=\"color: " + runColor + ";\"></i>\n          <div id=\"run_distance\" style=\"color: " + runColor + ";\">\n            " + Math.abs(run.runDistance) + " Km\n          </div>\n          <div id=\"run_time\">" + runFormatedDate + "</div>\n          <div id=\"run_area\">" + run.runArea + "</div>\n        </div>";
                runsContainer_1.innerHTML += runHTML;
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    LoggedInRunner.prototype.refreshDOMSummary = function (runDistance) {
        try {
            this.runnerDistance += runDistance;
            var ruunerTotalDistance = document.querySelector("#total_sum");
            var runnerRunsCounter = document.querySelector("#total_counts");
            var distanceBadge = document.querySelector("#distance_badge");
            var togetherunBadge = document.querySelector("#togetherun_badge");
            ruunerTotalDistance.innerText = "" + this.runnerDistance;
            runnerRunsCounter.innerHTML = "" + this.runnerRuns.length;
            if (this.runnerDistance > 199) {
                ruunerTotalDistance.style.color = "gold";
                distanceBadge.setAttribute("src", "images/TR_Kms_G.png");
            }
            else if (this.runnerDistance > 99) {
                ruunerTotalDistance.style.color = "silver";
                distanceBadge.setAttribute("src", "images/TR_Kms_S.png");
            }
            else {
                ruunerTotalDistance.style.color = "#cd7f32";
                distanceBadge.setAttribute("src", "images/TR_Kms_B.png");
            }
            if (this.runnerRuns.length > 4) { //49 - 4 only for easy testing
                runnerRunsCounter.style.color = "gold";
                togetherunBadge.setAttribute("src", "images/TR_G.png");
            }
            else if (this.runnerRuns.length > 1) { //19 - 1 only for easy testing
                runnerRunsCounter.style.color = "silver";
                togetherunBadge.setAttribute("src", "images/TR_S.png");
            }
            else {
                runnerRunsCounter.style.color = "#cd7f32";
                togetherunBadge.setAttribute("src", "images/TR_B.png");
            }
        }
        catch (er) {
            console.error(er);
        }
    };
    return LoggedInRunner;
}());
// let RunsPool : Array<Run>; // for the future - pool of all runners future runs, so matches can be made
var currentRunner = JSON.parse(localStorage.getItem("currentRunner")) ? JSON.parse(localStorage.getItem("currentRunner")) : null;
if (currentRunner === null) {
    window.location.href = "togetheRun_registration.html";
}
var isModalOpen = false;
var logOut = function () {
    try {
        var logoutBtn = document.querySelector(".summary__item--logout");
        logoutBtn.addEventListener("click", function (ev) {
            localStorage.clear();
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
            onlyFutureRuns();
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
var onlyFutureRuns = function () {
    try {
        var runTimeInput = document.querySelector("#run_time_form");
        var now = new Date();
        runTimeInput.setAttribute("min", now.toISOString().substring(0, 16));
    }
    catch (er) {
        console.error(er);
    }
};
currentRunner = new LoggedInRunner();
var runSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runDistance = Number(ev.target.elements.runDistance.value);
        var runTime = new Date(ev.target.elements.runTime.value);
        var runArea = ev.target.elements.runArea.value;
        var run = new Run(runDistance, runTime, runArea);
        currentRunner.addRun(run);
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
currentRunner.personalDetailsToDOM();
logOut();
openModal();
closeModal();
