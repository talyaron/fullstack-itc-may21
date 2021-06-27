class newRunner {
  runnerName: string; // required on registration
  runnerId: string = "runner" + Math.random().toString(16).slice(2); // generated on registration
  runnerEmail: string; // required on registration
  runnerPassword: string; // required on registration
  runnerGender: string; // Male, Female, Unknown (default)
  runnerAgeGroup: string; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default)
  runnerChat: string; // chatty, so so, only when necessary, Unknown (default)
  runnerPref: Preferences = {prefChat: 'All', prefGender: 'All', prefAgeGroup: 'All'}; // default on registration
  runnerProfImg: any;
  runnerShoes: Shoes;
  runnerRuns: Array<Run> = [];
  runnerRunsHtml: string = ''; // DOM representation of all runs
  runnerDistance: number = 0;

  constructor (runnerName: string, runnerEmail: string, runnerPassword: string, runnerGender: string = 'Unknown', runnerAgeGroup: string = 'Unknown', runnerChat: string = 'Unknown', runnerProfImg: any) {
    this.runnerName = runnerName;
    this.runnerEmail = runnerEmail;
    this.runnerPassword = runnerPassword;
    this.runnerGender = runnerGender;
    this.runnerAgeGroup = runnerAgeGroup;
    this.runnerChat = runnerChat;
    this.runnerProfImg = runnerProfImg;
  }
}

let currentRunner: newRunner = JSON.parse(localStorage.getItem("currentRunner")) ? JSON.parse(localStorage.getItem("currentRunner")) : null;
if (currentRunner !== null) {window.location.href = `togetheRun_main.html?${currentRunner.runnerId}`;}

const readURL = (input: any) => { // CREDIT TO LEONARDO FOR THIS ONE!!
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = (e)=> {
     document.querySelector('#runnerProfImg').setAttribute("src", `${e.target.result}`);
      return e.target.result
    }
    reader.readAsDataURL(input.files[0]);
  }
}

const runnerSubmit = (ev: any) => {
    try {
      ev.preventDefault();
  
      const runnerName: string = ev.target.elements.runnerName.value;
      const runnerEmail: string = ev.target.elements.runnerEmail.value;
      const runnerPassword: string = ev.target.elements.runnerPassword.value;
      const runnerPasswordVerify: string = ev.target.elements.runnerPasswordVerify.value;
      const runnerGender: string = ev.target.elements.runnerGender.value;
      const runnerAgeGroup: string = ev.target.elements.runnerAgeGroup.value;
      const runnerChat: string = ev.target.elements.runnerChat.value;
      const runnerProfImg: any = document.querySelector('#runnerProfImg').getAttribute("src");

      const nameRegExRule = /^[^\s]([a-z]{2,}[ ]){1,3}[a-z]*[^\s]$/;
      const nameRegEx = new RegExp(nameRegExRule,'gmi');
      if (!nameRegEx.test(runnerName)) {
        alert('Your name must contain 2-30 characters, first & middle names at least 2 characters, not start/end with a space and have up to 2 middle names. Please try again');
        throw new Error('Invalid name');
      }

      const emailRegExRule = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      const emailRegEx = new RegExp(emailRegExRule,'gmi');
      if (!emailRegEx.test(runnerEmail)) {
        alert('Your Email seems to be wrong. Please correct it or use a different Email address');
        throw new Error('Email not compliant to RFC 2822');
      }

      const passRegExRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
      const passRegEx = new RegExp(passRegExRule,'gm');
      if (!passRegEx.test(runnerPassword)) {
        alert('Your password must contain 8-10 characters, at least one uppercase letter, one lowercase letter, one number and one special character. Please try again');
        throw new Error('Password not secured enough');
      }

      if (runnerPassword != runnerPasswordVerify) {
        alert('You entered a different password in you verification field. Please try again');
        throw new Error('Password verification failed');
      }

      const runner = new newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg);
      localStorage.setItem("currentRunner", JSON.stringify(runner));

      window.location.href = `togetheRun_main.html?${runner.runnerId}`;
      // runners.addRunner(runner); // for the future - figure out how to manage runners array of type Array<Runner>
    
      ev.target.reset();
    } catch (er) {
      console.error(er);
    }
  };