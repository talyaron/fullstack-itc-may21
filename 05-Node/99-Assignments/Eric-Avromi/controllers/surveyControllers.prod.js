"use strict";var fs=require("fs"),_require=require("uuid"),uuidv4=_require.v4,surveys=require("../survey.json");function getAllSurveys(e,r){console.log("getAllSurveys"),console.log(e.user);var s,u=e.user;u?(s=surveys.filter(function(e){return e.admin===u.email}),r.send({surveys:s})):r.send({surveys:[],error:"No user was found"})}exports.getAllSurveys=getAllSurveys;