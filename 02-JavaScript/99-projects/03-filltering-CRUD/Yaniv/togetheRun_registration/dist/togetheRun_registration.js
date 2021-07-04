var newRunner = /** @class */ (function () {
    function newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg) {
        if (runnerGender === void 0) { runnerGender = 'Unknown'; }
        if (runnerAgeGroup === void 0) { runnerAgeGroup = 'Unknown'; }
        if (runnerChat === void 0) { runnerChat = 'Unknown'; }
        this.runnerId = "runner" + Math.random().toString(16).slice(2); // generated on registration
        this.runnerPref = { prefChat: 'All', prefCompetative: 'All', prefGender: 'All', prefAgeGroup: 'All' }; // default on registration
        this.runnerRuns = [];
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
var currentRunner = JSON.parse(localStorage.getItem("currentRunner")) ? JSON.parse(localStorage.getItem("currentRunner")) : null; //YS: Should be const
if (currentRunner !== null) {
    window.location.href = "../togetheRun_main/togetheRun_main.html?" + currentRunner.runnerId;
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
        var nameRegExRule = /^[^\s]([a-z]{2,}[ ]){1,3}[a-z]*[^\s]$/;
        var nameRegEx = new RegExp(nameRegExRule, 'gmi');
        if (!nameRegEx.test(runnerName)) {
            alert('Your name must contain 2-30 characters, first & middle names at least 2 characters, not start/end with a space and have up to 2 middle names. Please try again');
            throw new Error('Invalid name'); //YS: Instead of using alert, display the error.message that you get in your catch in your DOM, in red.
        }
        var emailRegExRule = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        var emailRegEx = new RegExp(emailRegExRule, 'gmi');
        if (!emailRegEx.test(runnerEmail)) {
            alert('Your Email seems to be wrong. Please correct it or use a different Email address'); //YS: Same as before
            throw new Error('Email not compliant to RFC 2822');
        }
        var passRegExRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        var passRegEx = new RegExp(passRegExRule, 'gm');
        if (!passRegEx.test(runnerPassword)) {
            alert('Your password must contain 8-10 characters, at least one uppercase letter, one lowercase letter, one number and one special character. Please try again');
            throw new Error('Password not secured enough');
        }
        if (runnerPassword != runnerPasswordVerify) {
            alert('You entered a different password in you verification field. Please try again');
            throw new Error('Password verification failed');
        }
        var runner = new newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg);
        localStorage.setItem("currentRunner", JSON.stringify(runner));
        window.location.href = "../togetheRun_main/togetheRun_main.html?" + runner.runnerId; //YS: Very nice
        // runners.addRunner(runner); // for the future - figure out how to manage runners array of type Array<Runner>
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
