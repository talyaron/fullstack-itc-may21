var Run = /** @class */ (function () {
    function Run(runDistance, runTime, runPace, runArea, runLocation, runMatch) {
        this.runId = "run" + Math.random().toString(16).slice(2);
        this.runRunnerId = JSON.parse(localStorage.getItem("currentRunner")).runnerId;
        this.runDistance = runDistance;
        this.runTime = runTime;
        this.runPace = runPace;
        this.runArea = runArea;
        this.runLocation = runLocation;
        this.runMatch = runMatch;
    }
    return Run;
}());
var RunsPool = /** @class */ (function () {
    function RunsPool(allRuns) {
        this.allRuns = allRuns;
    }
    RunsPool.prototype.updateToPool = function (run) {
        try {
            var runToUpdateIndex = this.allRuns.findIndex(function (runItem) { return runItem.runId === run.runId; });
            if (runToUpdateIndex === -1) {
                this.allRuns.push(run);
            }
            else {
                this.allRuns[runToUpdateIndex] = run;
            }
            this.allRuns = this.allRuns.sort(function (a, b) { return Date.parse(a.runTime) - Date.parse(b.runTime); });
            this.allRuns = this.allRuns.sort(function (a, b) { return a.runRunnerId - b.runRunnerId; });
            run.runMatch = this.findMatch(run);
            return run.runMatch;
        }
        catch (er) {
            console.error(er);
        }
    };
    RunsPool.prototype.deleteFromPool = function (runToDeleteId) {
        var runToDeleteIndex = this.allRuns.findIndex(function (runItem) { return runItem.runId === runToDeleteId; });
        this.allRuns = this.allRuns.splice(runToDeleteIndex, 1);
    };
    RunsPool.prototype.findMatch = function (run) {
        try {
            var runMatches = this.allRuns.filter(function (runItem) {
                return runItem.runRunnerId !== run.runRunnerId &&
                    Math.abs((runItem.runDistance - run.runDistance)) < 2 && // less than 2 Km dif
                    Math.abs((Date.parse(runItem.runTime) - Date.parse(run.runTime)) / (1000 * 60 * 60)) < 2 && // less than 2 hours dif
                    runItem.runPace === run.runPace &&
                    runItem.runArea === run.runArea;
            });
            if (runMatches.length > 0) {
                run.runMatch = true;
                var currentRunIndex = this.allRuns.findIndex(function (runItem) { return runItem.runId === run.runId; });
                this.allRuns[currentRunIndex].runMatch = true;
                this.showMatchesOnDON(runMatches);
            }
            return run.runMatch;
        }
        catch (er) {
            console.error(er);
        }
    };
    RunsPool.prototype.showMatchesOnDON = function (runMatches) {
        // in the future - the method will add a button to show matches to the run box, in case available.
        // clicking will open a modal of the matches
    };
    return RunsPool;
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
        this.runnerDistance = JSON.parse(localStorage.getItem("currentRunner")).runnerDistance;
    }
    LoggedInRunner.prototype.personalDetailsToDOM = function () {
        var mainTitle = document.querySelector("title");
        var runnerNameContainter = document.querySelector(".summary__item--runner_name");
        var runnerProfileImg = document.querySelector(".profile_image__item--profile_image");
        var ruunerTotalDistance = document.querySelector("#total_sum");
        var runnerRunsCounter = document.querySelector("#total_counts");
        mainTitle.insertAdjacentHTML("afterbegin", "" + this.runnerName);
        runnerNameContainter.insertAdjacentHTML("beforeend", this.runnerName + "!");
        runnerProfileImg.title = "" + this.runnerName;
        if (this.runnerProfImg === null) {
            runnerProfileImg.setAttribute("src", "images/togetheRun_logo.png");
        }
        else {
            runnerProfileImg.setAttribute("src", this.runnerProfImg);
        }
        ruunerTotalDistance.innerHTML = "" + this.runnerDistance;
        runnerRunsCounter.innerHTML = "" + this.runnerRuns.length;
        this.renderRunsToDOM();
        // window.location.href = `togetheRun_main.html?${currentRunner.runnerId}`; // causes endless loop of loading the page...can be solved by localSession.setItem("isFirstLoad",false) during first loading of the page
    };
    LoggedInRunner.prototype.updateRun = function (run) {
        var runToEditIndex = this.runnerRuns.findIndex(function (runItem) { return runItem.runId === run.runId; });
        if (runToEditIndex === -1) {
            this.runnerRuns.push(run);
        }
        else {
            this.runnerRuns[runToEditIndex] = run;
        }
        this.runnerRuns = this.runnerRuns.sort(function (a, b) { return a.runTime - b.runTime; });
        this.renderRunsToDOM();
        this.refreshDOMSummary(run.runDistance);
    };
    LoggedInRunner.prototype.deleteRun = function (runToDeleteId) {
        var runToDeleteIndex = this.runnerRuns.findIndex(function (runItem) { return runItem.runId === runToDeleteId; });
        var runToDeleteDistance = -this.runnerRuns[runToDeleteIndex].runDistance;
        this.runnerRuns.splice(runToDeleteIndex, 1);
        this.renderRunsToDOM();
        this.refreshDOMSummary(runToDeleteDistance);
    };
    LoggedInRunner.prototype.renderRunsToDOM = function () {
        try {
            var runsContainer_1 = document.querySelector(".runs");
            runsContainer_1.innerHTML = "";
            if (this.runnerRuns.length === 0) {
                runsContainer_1.innerHTML = "<h2>You have no scheduled runs.<br/>Take this opportunity to rest<br/>😌</h2>";
            }
            else {
                this.runnerRuns.forEach(function (run) {
                    var matchFAClass = run.runMatch ? "-double" : "";
                    var matchTitle = run.runMatch ? "Buddy found!" : "Pending buddy...";
                    var runColor = run.runMatch ? "aqua" : "orange";
                    var MatchesBtnText = run.runMatch ? "View Matches" : "No Matches Yet";
                    var MatchesBtnLook = run.runMatch ? "" : " disabled style=\"background-color:" + runColor + ";cursor:not-allowed";
                    var runFormatedDate = typeof run.runTime === 'object' ? "" + run.runTime.toISOString().substring(0, 16).replace("T", " ") : "" + run.runTime.substring(0, 16).replace("T", " ");
                    var runHTML = "\n          <div class=\"runs__item\" id=\"" + run.runId + "\">\n            <i class=\"run_edit fas fa-edit update_run_btn\"\"></i>\n            <i class=\"run_delete fas fa-trash\" onclick=\"handleDelete(event)\"></i>\n            <i class=\"match_status fas fa-2x fa-check" + matchFAClass + "\" title=\"" + matchTitle + "\" style=\"color: " + runColor + ";\"></i>\n            <div class=\"run_distance\" style=\"color: " + runColor + ";\">\n              " + Math.abs(run.runDistance) + " Km\n            </div>\n            <div class=\"run_time\">" + runFormatedDate + "</div>\n            <div class=\"run_pace\">" + run.runPace + "</div>\n            <div class=\"run_area\">" + run.runArea + "</div>\n            <button class=\"run_matches\"" + MatchesBtnLook + "\">" + MatchesBtnText + "</button>\n          </div>";
                    runsContainer_1.innerHTML += runHTML;
                });
            }
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
            if (this.runnerRuns.length > 4) {
                //49 - 4 only for easy testing
                runnerRunsCounter.style.color = "gold";
                togetherunBadge.setAttribute("src", "images/TR_G.png");
            }
            else if (this.runnerRuns.length > 1) {
                //19 - 1 only for easy testing
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
var runsMainPool = JSON.parse(localStorage.getItem("runsPool")) ? new RunsPool(JSON.parse(localStorage.getItem("runsPool")).allRuns) : new RunsPool([]);
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
            localStorage.setItem("runsPool", JSON.stringify(runsMainPool));
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
        var modalBox_1 = document.querySelector(".modalWrapper__item--update_run");
        var updateRunBtns = document.querySelectorAll(".update_run_btn");
        updateRunBtns.forEach(function (UpdtBtn) {
            return UpdtBtn.addEventListener("click", function (ev) {
                isModalOpen = true;
                modal_1.style.display = "flex";
                modalBox_1.style.display = "unset";
                console.log('hi');
                onlyFutureRuns();
                var runDiv = UpdtBtn.parentElement;
                setRunToUpdateData(runDiv);
            });
        });
    }
    catch (er) {
        console.error(er);
    }
};
var closeModal = function () {
    try {
        var modal_2 = document.querySelector(".modalWrapper");
        var modalBox_2 = document.querySelector(".modalWrapper__item--update_run");
        var close = document.querySelectorAll(".close");
        close.forEach(function (clsBtn) {
            return clsBtn.addEventListener("click", function (ev) {
                isModalOpen = false;
                modal_2.style.display = "none";
                modalBox_2.style.display = "none";
            });
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
var setRunToUpdateData = function (runDiv) {
    try {
        var runDistanceInput = document.querySelector("#run_distance_form");
        var runTimeInput = document.querySelector("#run_time_form");
        var runAreaSelect = document.querySelector("#run_area_form");
        var runLocationInput = document.querySelector("#run_location_form");
        var runPaceSelect = document.querySelector("#run_pace_form");
        var updateRunForm = document.querySelector(".update_run_form");
        var runDistanceDiv = runDiv.querySelector(".run_distance");
        var runTimeDiv = runDiv.querySelector(".run_time");
        var runAreaDiv_1 = runDiv.querySelector(".run_area");
        // const runLocationDiv: HTMLElement = docrunDivument.querySelector(`.run_location`);
        var runPaceDiv_1 = runDiv.querySelector(".run_pace");
        if (runDiv.className === 'runs__item') {
            runDistanceInput.setAttribute('value', runDistanceDiv.innerText.replace(' Km', ''));
            runTimeInput.setAttribute('value', runTimeDiv.innerText.replace(' ', 'T'));
            runAreaSelect.selectedIndex = Array.from(runAreaSelect.children).findIndex(function (child) { return child.getAttribute('value') === runAreaDiv_1.innerText; });
            // runLocationInput.setAttribute('value',runLocationDiv.innerHTML); TODO to be added to the run box
            runPaceSelect.selectedIndex = Array.from(runPaceSelect.children).findIndex(function (child) { return child.getAttribute('value') === runPaceDiv_1.innerText; });
            updateRunForm.setAttribute('id', "" + runDiv.getAttribute('id'));
        }
        else {
            runDistanceInput.setAttribute('value', '');
            runTimeInput.setAttribute('value', '');
            runAreaSelect.selectedIndex = 0;
            runLocationInput.setAttribute('value', '');
            runPaceSelect.selectedIndex = 0;
            updateRunForm.removeAttribute('id');
        }
    }
    catch (er) {
        console.error(er);
    }
};
currentRunner = new LoggedInRunner();
var updateRunSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runToUpdateId = ev.target.getAttribute('id');
        console.log(ev.target);
        var runDistance = Number(ev.target.elements.runDistance.value);
        var runTime = new Date(ev.target.elements.runTime.value);
        var runPace = ev.target.elements.runPace.value;
        var runArea = ev.target.elements.runArea.value;
        var runLocation = ev.target.elements.runLocation.value;
        var runMatch = false;
        var run = new Run(runDistance, runTime, runPace, runArea, runLocation, runMatch);
        console.log(runToUpdateId);
        console.log(run.runId);
        if (runToUpdateId !== null) {
            run.runId = runToUpdateId;
        }
        console.log(run.runId);
        run.runMatch = runsMainPool.updateToPool(run);
        localStorage.setItem("runsPool", JSON.stringify(runsMainPool));
        currentRunner.updateRun(run);
        localStorage.setItem("currentRunner", JSON.stringify(currentRunner));
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
var handleDelete = function (ev) {
    try {
        var runToDeleteId = ev.target.parentElement.getAttribute('id');
        runsMainPool.deleteFromPool(runToDeleteId);
        localStorage.setItem("runsPool", JSON.stringify(runsMainPool));
        currentRunner.deleteRun(runToDeleteId);
        localStorage.setItem("currentRunner", JSON.stringify(currentRunner));
    }
    catch (er) {
        console.error(er);
    }
};
currentRunner.personalDetailsToDOM();
logOut();
openModal();
closeModal();
