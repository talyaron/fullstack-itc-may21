// //pg1 - Google search plus an I'm feeling lucky:
// 1. create a class/constructur
// 2. access hardcoded Data
// 3. put data in array
// pg2 -  search car data/JSON of data by passing a quarry and rendering results on another page
// And for more points we create a search history to access something. Idk , I want to use local storage two ways
//add class for individual srch querry
var Search = /** @class */ (function () {
    function Search(text) {
        this.textId = "id" + Math.random().toString(16).slice(2);
        this.text = text;
    }
    return Search;
}());
//class to provide an array of all srchs to local storage
var AllSrchs = /** @class */ (function () {
    function AllSrchs() {
        this.srchs = JSON.parse(localStorage.getItem('Allsrchs')) ? JSON.parse(localStorage.getItem('Allsrchs')) : [];
    }
    //method to push new srch to the array
    AllSrchs.prototype.addNewSrch = function (srch) {
        this.srchs.push(srch);
        localStorage.setItem("Allsrchs", JSON.stringify(this.srchs));
    };
    return AllSrchs;
}());
var allOfSrchs = new AllSrchs();
//function for collecting text input
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var text = ev.target.elements.text.value;
        var srch = new Search(text);
        allOfSrchs.addNewSrch(srch);
        // window.location.reload();
        // location.href = "results.html"
    }
    catch (er) {
        console.error(er);
    }
    //after collecting input, render it on DOM:
    function renderOnDOM() {
        try {
            var data_1 = document.querySelector(".data");
            allOfSrchs.srchs.forEach(function (srch) {
                data_1.insertAdjacentHTML('beforeend', "<div class=\"srch-q\"><p>" + srch.text + "</p></div>");
            });
            //     let contactForChat = JSON.parse(localStorage.getItem("contactForChat"));
            //     let groupForChat = JSON.parse(localStorage.getItem("groupForChat"));
            //     console.log(contactForChat);
            //     const headerContact = document.querySelector(".header_chat");
            //     if (contactForChat) {
            //         headerContact.insertAdjacentHTML('afterbegin', `<div class="info_chat"><img class="header_img_profile"
            //   src="${contactForChat.profileImg}"
            //   alt=""><h1 class="title_chat">${contactForChat.name}</h1><a href="index.html"><i class="far fa-arrow-alt-circle-left fa-4x arrow_icon"></i></a></div>`);
            //     } else if (groupForChat) {
            //         headerContact.insertAdjacentHTML('afterbegin', `<div class="info_chat"><img class="header_img_profile"
            //   src="${groupForChat.groupIMG}"
            //   alt=""><h1 class="title_chat">${groupForChat.groupName}</h1><a href="index.html"><i class="far fa-arrow-alt-circle-left fa-4x arrow_icon"></i></a></div>`);
            //     }
        }
        catch (e) {
            console.error(e);
        }
    }
    renderOnDOM();
}
;
