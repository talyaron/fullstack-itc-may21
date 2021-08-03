"use strict";function handleTask(t){t.preventDefault();try{var n=t.target.elements.task.value;return new Promise(function(e,a){axios.post("/addListItem",{task:n}).then(function(t){e(t.data.list),renderArrayToDom(t.data.list),alert("Submitted Succesfuly!")}).catch(function(t){a(t)}),t.target.reset()})}catch(t){console.error(t)}}window.addEventListener("load",function(){try{return new Promise(function(e,a){axios.get("/getList").then(function(t){e(t.data.list),renderArrayToDom(t.data.list)}).catch(function(t){a(t)})})}catch(t){console.error(t)}});var form=document.querySelector("form");function deleteTask(t){try{return new Promise(function(e,a){axios.delete("/deleteTask/".concat(t)).then(function(t){e(t.data.list),renderArrayToDom(t.data.list)}).catch(function(t){a(t)})})}catch(t){console.error(t)}}function updateTask(t){try{var n=document.getElementById("".concat(t,"update")).value;return new Promise(function(e,a){axios.put("/updateTask",{id:t,newTaskName:n}).then(function(t){e(t.data.list.list),renderArrayToDom(t.data.list.list),alert("updated succefully!")}).catch(function(t){a(t)})})}catch(t){console.error(t)}}function updateStatus(t){try{return new Promise(function(e,a){axios.put("/updateStatus",{id:t}).then(function(t){e(t.data.list.list),renderArrayToDom(t.data.list.list)}).catch(function(t){a(t)})})}catch(t){console.error(t)}}function renderArrayToDom(t){try{var e=document.querySelector(".holder"),a="";t.forEach(function(t){"Incomplete"===t.status?a+='<div class="holder__item" id=\''.concat(t.itemID,'\'>\n                <div class="holder__item__header">Task:</div>\n                <div class="holder__item__taskDisplay">').concat(t.item,'</div>\n                <input class="holder__item__task" id="').concat(t.itemID,'update" placeholder="Edit Task, Click Update!"  value="">\n                <div class=\'button button--update\' onclick=\'updateTask("').concat(t.itemID,'")\'>UPDATE</div>\n                <div class="holder__item__header">Status:</div>\n                <div class="holder__item__status" id="').concat(t.itemID,'status">').concat(t.status,"</div>\n                <div class='button button--update-status' id=\"").concat(t.itemID,'status-button" onclick=\'updateStatus("').concat(t.itemID,'")\'>Mark as Complete!</div>\n                <div class="button button--delete" onclick=\'deleteTask("').concat(t.itemID,"\")'>DELETE</div>\n                </div>"):a+='<div class="holder__item" id=\''.concat(t.itemID,'\'>\n                    <div class="holder__item__header">Task:</div>\n                    <div class="holder__item__taskDisplay">').concat(t.item,'</div>\n                    <input class="holder__item__task" id="').concat(t.itemID,'update" placeholder="Edit Task, Click Update!" value="">\n                    <div class=\'button button--update\' onclick=\'updateTask("').concat(t.itemID,'")\'>UPDATE</div>\n                    <div class="holder__item__header">Status:</div>\n                    <div class="green" id="').concat(t.itemID,'status">').concat(t.status,'</div>\n                    <div class="button button--delete" onclick=\'deleteTask("').concat(t.itemID,"\")'>DELETE</div>\n                    </div>")}),e.innerHTML=a}catch(t){console.error(t)}}form.addEventListener("submit",handleTask);