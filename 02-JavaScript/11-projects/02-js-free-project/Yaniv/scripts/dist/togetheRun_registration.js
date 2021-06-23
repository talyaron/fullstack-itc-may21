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
var currentRunner = JSON.parse(localStorage.getItem("currentRunner")) ? JSON.parse(localStorage.getItem("currentRunner")) : null;
if (currentRunner !== null) {
    window.location.href = "togetheRun_main.html?" + currentRunner.runnerId;
}
var readURL = function (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('#runnerProfImg').setAttribute("src", "" + e.target.result);
            return e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};
var runnerSubmit = function (ev) {
    try {
        ev.preventDefault();
        var runnerName = ev.target.elements.runnerName.value;
        var runnerEmail = ev.target.elements.runnerEmail.value;
        var runnerPassword = ev.target.elements.runnerPassword.value;
        var runnerPasswordVerify = ev.target.elements.runnerPasswordVerify.value;
        var runnerGender = ev.target.elements.runnerGender.value;
        var runnerAgeGroup = ev.target.elements.runnerAgeGroup.value;
        var runnerChat = ev.target.elements.runnerChat.value;
        var runnerProfImg = document.querySelector('#runnerProfImg').getAttribute("src");
        if (runnerPassword != runnerPasswordVerify) {
            alert('Your entered different passwords, please try again');
            throw new Error('Password verification failed');
        }
        var runner = new newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg);
        localStorage.setItem("currentRunner", JSON.stringify(runner));
        window.location.href = "togetheRun_main.html?" + runner.runnerId;
        // runners.addRunner(runner); // for the future - figure out how to manage runners array of type Array<Runner>
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
