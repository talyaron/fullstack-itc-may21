var newRunner = /** @class */ (function () {
    function newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg) {
        if (runnerGender === void 0) { runnerGender = 'Unknown'; }
        if (runnerAgeGroup === void 0) { runnerAgeGroup = 'Unknown'; }
        if (runnerChat === void 0) { runnerChat = 'Unknown'; }
        this.runnerId = "runner" + Math.random().toString(16).slice(2); // generated on registration
        this.runnerPref = { prefChat: 'All', prefGender: 'All', prefAgeGroup: 'All' }; // default on registration
        this.runnerRuns = [];
        this.runnerRunsHtml = ''; // DOM representation of all runs
        this.runnerDistance = 0;
        this.runnerName = runnerName;
        this.runnerEmail = runnerEmail;
        this.runnerPassword = runnerPassword;
        this.runnerGender = runnerGender;
        this.runnerAgeGroup = runnerAgeGroup;
        this.runnerChat = runnerChat;
        this.runnerProfImg = runnerProfImg;
    }
    return newRunner;
}());
var currentRunner = new newRunner(null, null, null, null, null, null, null);
localStorage.setItem("currentRunner", JSON.stringify(currentRunner));
var runnerSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runnerName = ev.target.elements.runnerName.value;
        var runnerEmail = ev.target.elements.runnerEmail.value;
        var runnerPassword = ev.target.elements.runnerPassword.value;
        var runnerGender = ev.target.elements.runnerGender.value;
        var runnerAgeGroup = ev.target.elements.runnerAgeGroup.value;
        var runnerChat = ev.target.elements.runnerChat.value;
        var runnerProfImg = ev.target.elements.runnerProfImg.value;
        currentRunner = new newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg);
        localStorage.setItem("currentRunner", JSON.stringify(currentRunner));
        window.location.href = 'togetheRun_main.html';
        // runners.addRunner(runner); // for the future - figure out how to manage runners array of type Array<Runner>
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
