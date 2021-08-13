"use strict";function getAdminUser(){var r,t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("h1"),e.next=3,regeneratorRuntime.awrap(axios.get("/selectedAdminUser"));case 3:return t=e.sent,e.next=6,regeneratorRuntime.awrap(console.log(t.data[0]));case 6:return e.next=8,regeneratorRuntime.awrap(t.data.name);case 8:return r.innerText=e.sent,e.next=11,regeneratorRuntime.awrap(renderArrayToDom(t.data.createdSurvey));case 11:case"end":return e.stop()}})}function handleSurvey(r){var t,n,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=r.target.elements.survey.value,e.next=4,regeneratorRuntime.awrap(axios.get("/selectedAdminUser"));case 4:return n=e.sent,e.next=7,regeneratorRuntime.awrap(axios.post("/addSurvey",{surveyName:t,adminEmail:n.data.email}));case 7:return a=e.sent,e.next=10,regeneratorRuntime.awrap(console.log(a));case 10:return e.next=12,regeneratorRuntime.awrap(renderArrayToDom(a.data.createdSurvey));case 12:r.target.reset();case 13:case"end":return e.stop()}})}function renderArrayToDom(e){try{var r=document.querySelector(".holder"),t="";e.forEach(function(e){t+='<div class="holder__survey" onclick=\'moveToSurveyEdit("'.concat(e.surveyID,"\")' id='").concat(e.surveyID,'\'>\n                    <div class="holder__survey__header">Survey:</div>\n                    <div class="holder__survey__taskDisplay">').concat(e.title,"</div>\n                </div>")}),r.innerHTML=t}catch(e){console.error(e)}}function moveToSurveyEdit(e){axios.get("/sendSurvey?id=".concat(e)),window.location.href="/surveyedit.html"}window.addEventListener("load",getAdminUser());