"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var express=require("express"),router=express.Router(),_require=require("uuid"),uuidv4=_require.v4,_require2=require("../models/surveyModel.js"),addSurvey=_require2.addSurvey,_require3=require("../controllers/surveyControllers"),getAllSurveys=_require3.getAllSurveys,_require4=require("../models/userModels.js"),getAllUsers=_require4.getAllUsers,_require5=require("../middlewares/user"),getUser=_require5.getUser,Survey=function e(r){_classCallCheck(this,e),console.log("sdgdfgdfhdfh"),this.title="",this.id=uuidv4(),this.questions=[],this.admin=r};router.post("/newSurvey",function(e,r){try{var s=e.cookies.cookie.email;console.log(s);var u=new Survey(s);addSurvey(u),r.send({ok:!0,newSurvey:u})}catch(e){r.status(500).send(e.message)}}),router.get("/allSurveys",getUser,getAllSurveys),module.exports=router;