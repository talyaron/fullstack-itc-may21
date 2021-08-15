"use strict";var _require=require("../models.js"),Survey=_require.Survey,users=_require.users,Ajv=require("ajv"),ajv=new Ajv;exports.delete_survey=function(e,r){try{var s=e.params.ID,n=e.cookies.admin,t=JSON.parse(n).selectedAdmin;t.createdSurvey=t.createdSurvey.filter(function(e){return e.surveyID!=s});var i=e.cookies.adminIndex,o=JSON.parse(i).selectedAdminIndex;users.users[o]=t;var a=JSON.stringify({selectedAdmin:t});r.cookie("admin",a,{maxAge:3e8,httpOnly:!0}),r.send(t)}catch(e){console.error(e)}},exports.send_survey=function(e,r){try{var s=e.query.id,n=JSON.stringify(s);r.cookie("surveyEditID",n,{maxAge:3e8,httpOnly:!0}),r.send(s)}catch(e){console.error(e)}},exports.add_survey=function(e,o){try{var r=ajv.compile({type:"object",properties:{adminEmail:{type:"string"},surveyName:{type:"string"}},required:["surveyName","adminEmail"],additionalProperties:!1}),a=e.body;if(!r(a))throw r.errors.forEach(function(e){return console.log(e.message)}),new Error("Invalid data was transferd");users.users.map(function(e,r){var s,n,t,i;e.email===a.adminEmail&&(users.users[r].createdSurvey.push(new Survey(a.surveyName,a.adminEmail)),s=users.users[r],n=r,t=JSON.stringify({selectedAdmin:s}),i=JSON.stringify({selectedAdminIndex:n}),o.cookie("admin",t,{maxAge:3e8,httpOnly:!0}),o.cookie("adminIndex",i,{maxAge:3e8,httpOnly:!0}),o.send(s),console.log(s))})}catch(e){console.log(e),o.status(400).send({error:e.message})}},exports.get_survey=function(e,r){try{var s=e.cookies.surveyEditID,n=JSON.parse(s),t=e.cookies.admin,i=JSON.parse(t).selectedAdmin;console.log(i,n);var o=i.createdSurvey.filter(function(e){return e.surveyID===n});r.send(o)}catch(e){console.error(e)}},exports.survey_to_answer=function(e,r){var s=e.cookies.admin,n=JSON.parse(s).selectedAdmin,t=e.query.id,i=n.createdSurvey.filter(function(e){return e.surveyID===t});r.send(i)};