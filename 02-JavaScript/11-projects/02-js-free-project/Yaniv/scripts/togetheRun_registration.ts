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
  
    constructor (runnerName: string, runnerEmail: string, runnerPassword: string, runnerGender: string = 'Unknown', runnerAgeGroup: string = 'Unknown', runnerChat: string = 'Unknown', runnerProfImg : any) {
      this.runnerName = runnerName;
      this.runnerEmail = runnerEmail;
      this.runnerPassword = runnerPassword;
      this.runnerGender = runnerGender;
      this.runnerAgeGroup = runnerAgeGroup;
      this.runnerChat = runnerChat;
      this.runnerProfImg = runnerProfImg;
    }
  }

let currentRunner = new newRunner(null,null,null,null,null,null,null);

localStorage.setItem("currentRunner", JSON.stringify(currentRunner));

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

      if (runnerPassword != runnerPasswordVerify) {
        alert('Your entered different passwords, please try again');
        throw new Error('Password verification failed');
      }

      currentRunner = new newRunner(runnerName, runnerEmail, runnerPassword, runnerGender, runnerAgeGroup, runnerChat, runnerProfImg);
      localStorage.setItem("currentRunner", JSON.stringify(currentRunner));

      window.location.href = `togetheRun_main.html?${currentRunner.runnerId}`;
      // runners.addRunner(runner); // for the future - figure out how to manage runners array of type Array<Runner>
    
      ev.target.reset();
    } catch (er) {
      console.error(er);
    }
  };