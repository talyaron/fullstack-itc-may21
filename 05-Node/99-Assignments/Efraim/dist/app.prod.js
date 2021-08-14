"use strict";function _defineProperties(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var express=require("express");app=express();var port=process.env.PORT||5e3;app.use(express.json());var Ajv=require("ajv"),ajv=new Ajv;app.use(express.static("public"));var toDOItems=function t(e,s,i){_classCallCheck(this,t),this.item=e,this.itemID=s,this.status=i},toDoList=function(){function t(){_classCallCheck(this,t),this.list=[]}return _createClass(t,[{key:"addListItem",value:function(t){try{this.list.push(t)}catch(t){console.error(t)}}},{key:"renderArrayToDom",value:function(t){try{t.forEach(function(t){'<div class="holder__item" id="'.concat(t.itemId,'">'),'<div class="holder__item__task">'.concat(t.item,"</div>"),'<div class="holder__item__ID">'.concat(t.itemID,"</div>"),'<div class="holder__item__status">'.concat(status,"</div>"),'<div class="holder__item__delete" onclick="deleteitem(\''.concat(t.itemId,"')\">x</div>")})}catch(t){console.error(t)}}},{key:"findListItemWithID",value:function(e){try{var t=this.list.filter(function(t){return t.itemID===parseInt(e)});return html='<div class="holder__student" id="'.concat(t[0].itemID,'">\n                <div class="holder__student__id">Student ID: ').concat(t[0].itemID,'</div>\n                <div class="holder__student__item">Student item: ').concat(t[0].item,'</div>\n                <div class="holder__student__age"> Student Age: ').concat(t[0].age,'</div>\n                <div class="holder__student__status"> Average Grade: ').concat(t[0].status,"%</div>\n                </div>")}catch(t){console.error(t)}}}]),t}(),list=new toDoList,html="";app.put("/addListItem",function(t,e){try{var s=ajv.compile({type:"object",properties:{item:{type:"string"},itemID:{type:"integer"},status:{type:"string"}},required:["item","itemID","status"],additionalProperties:!1}),i=t.body;if(!s(i))throw s.errors.forEach(function(t){return console.log(t.message)}),new Error("Invalid data was transferd");list.addListItem(new toDOItems(i.item,i.itemID,i.status)),list.renderArrayToDom(list),e.send(list)}catch(t){console.log(t),e.status(400).send({error:t.message})}}),app.get("/getListQuery",function(t,e){try{var s=t.query.id,i=i.findListItemWithID(s);e.send(i)}catch(t){console.error(t)}}),app.get("/getListItem",function(t,e){try{e.send({html:html})}catch(t){console.error(t)}}),app.listen(port,function(){console.log("Server listen on port",port)});