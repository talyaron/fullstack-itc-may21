"use strict";var express=require("express"),cookieParser=require("cookie-parser"),Ajv=require("ajv"),_require=require("./models.js"),User=_require.User,Users=_require.Users,Survey=_require.Survey,Surveys=_require.Surveys,Question=_require.Question,Questions=_require.Questions,loginRoute=require("./routes/loginRoute"),questionsRoute=require("./routes/questionsRoute"),surveysRoute=require("./routes/surveysRoute"),usersRoute=require("./routes/usersRoute"),adminRoute=require("./routes/adminRoute"),app=express(),port=process.env.PORT||3e3;app.use(express.json());var _require2=require("ajv/dist/vocabularies/applicator/dependencies"),error=_require2.error,ajv=new Ajv;app.use(express.static("public")),app.use(cookieParser());var users=new Users;app.post("/createUser",function(e,s){try{var r,o,n,t,i=ajv.compile({type:"object",properties:{username:{type:"string"},password:{type:"string"},email:{type:"string"}},required:["username","password","email"],additionalProperties:!1}),u=e.body;if(!i(u))throw i.errors.forEach(function(e){return console.log(e.message)}),new Error("Invalid data was transferd");void 0===users.users.find(function(e){return e.email===u.email})&&""===u.password?(users.newUser(new User(u.username,u.email,u.password)),r=users.users[users.users.length-1],o=JSON.stringify({guestUser:r}),s.cookie("guest",o,{maxAge:3e8,httpOnly:!0}),s.send(r)):null!=users.users.find(function(e){return e.email===u.email&&""===e.password})?(users.users.find(function(e){return e.email===u.email}).password=u.password,users.users.find(function(e){return e.email===u.email}).name=u.username,console.log(users),s.send(users)):null!=users.users.find(function(e){return e.email===u.email&&""!=e.password&&""===u.password})?(n=users.users.find(function(e){return e.email===u.email}),t=JSON.stringify({guestUser:n}),s.cookie("guest",t,{maxAge:3e8,httpOnly:!0}),s.send(n)):null!=users.users.find(function(e){return e.email===u.email})?s.send("Email already taken!"):(users.newUser(new User(u.username,u.email,u.password)),s.send(users))}catch(e){console.log(e),s.status(400).send({error:e.message})}}),app.get("/getAllUsers",function(e,s){s.send(users)}),app.post("/login",function(e,s){try{var r=ajv.compile({type:"object",properties:{password:{type:"string"},email:{type:"string"}},required:["password","email"],additionalProperties:!1}),o=e.body;if(!r(o))throw r.errors.forEach(function(e){return console.log(e.message)}),new Error("Invalid data was transferd");console.log(users),console.log(users.users);var n=users.users.find(function(e){return e.email===o.email&&e.password===o.password}),t=JSON.stringify({selectedAdmin:n});s.cookie("admin",t,{maxAge:3e8,httpOnly:!0}),console.log(n),s.send(n)}catch(e){console.log(e),s.status(400).send({error:e.message})}}),app.post("/addSurvey",function(e,i){try{var s=ajv.compile({type:"object",properties:{adminEmail:{type:"string"},surveyName:{type:"string"}},required:["surveyName","adminEmail"],additionalProperties:!1}),u=e.body;if(!s(u))throw s.errors.forEach(function(e){return console.log(e.message)}),new Error("Invalid data was transferd");users.users.map(function(e,s){var r,o,n,t;e.email===u.adminEmail&&(users.users[s].createdSurvey.push(new Survey(u.surveyName,u.adminEmail)),r=users.users[s],o=s,n=JSON.stringify({selectedAdmin:r}),t=JSON.stringify({selectedAdminIndex:o}),i.cookie("admin",n,{maxAge:3e8,httpOnly:!0}),i.cookie("adminIndex",t,{maxAge:3e8,httpOnly:!0}),i.send(r))})}catch(e){console.log(e),i.status(400).send({error:e.message})}}),app.post("/postQuestions",function(e,s){try{var r=e.body,o=e.cookies.admin,n=JSON.parse(o).selectedAdmin,t=e.cookies.adminIndex,i=JSON.parse(t).selectedAdminIndex,u=r.questions,a=r.surveyID;u.forEach(function(e){n.createdSurvey.find(function(e){return e.surveyID===a}).questions.push(new Question(e))}),users.users[i]=n;var d=JSON.stringify({selectedAdmin:n});s.cookie("admin",d,{maxAge:3e8,httpOnly:!0}),console.log(users.users),s.send(n)}catch(e){console.log(e),s.status(400).send({error:e.message})}}),app.get("/selectedAdminUser",function(e,s){var r=e.cookies.admin,o=JSON.parse(r).selectedAdmin;s.send(o)}),app.use("/createUser",usersRoute),app.use("/login",loginRoute),app.use("/addSurvey",surveysRoute),app.use("/postQuestions",questionsRoute),app.use("/selectedAdminUser",adminRoute),app.get("/sendSurvey",function(e,s){try{var r=e.query.id;console.log(r);var o=JSON.stringify(r);s.cookie("surveyEditID",o,{maxAge:3e8,httpOnly:!0}),s.send(r)}catch(e){console.error(e)}}),app.get("/getSurvey",function(e,s){try{var r=e.cookies.surveyEditID,o=JSON.parse(r),n=e.cookies.admin,t=JSON.parse(n).selectedAdmin;console.log(t,o);var i=t.createdSurvey.filter(function(e){return e.surveyID===o});s.send(i)}catch(e){console.error(e)}}),app.get("/surveyToAnswer",function(e,s){var r=e.cookies.admin,o=JSON.parse(r).selectedAdmin,n=e.query.id,t=o.createdSurvey.filter(function(e){return e.surveyID===n});s.send(t)}),app.get("/guestVoter",function(e,s){var r=e.cookies.guest;console.log(r);var o=JSON.parse(r);console.log(o);var n=o.guestUser;console.log(n),s.send(n)}),app.post("/postVotes",function(a,d){try{!function(){var e=ajv.compile({type:"object",properties:{ID:{type:"string"},votes:{type:"array"},votersID:{type:"string"}},required:["ID","votes","votersID"],additionalProperties:!1}),s=a.body;if(!e(s))throw e.errors.forEach(function(e){return console.log(e.message)}),new Error("Invalid data was transferd");console.log(s.ID,s.votes);var r=a.cookies.adminIndex,o=JSON.parse(r).selectedAdminIndex,n=a.cookies.admin,t=JSON.parse(n).selectedAdmin;for(i=0;i<s.votes.length;i++)t.createdSurvey.find(function(e){return e.surveyID===s.ID}).questions[i].voters.score.push(s.votes[i]),t.createdSurvey.find(function(e){return e.surveyID===s.ID}).questions[i].voters.voterID.push(s.votersID);users.users[o]=t;var u=JSON.stringify({selectedAdmin:t});d.cookie("admin",u,{maxAge:3e8,httpOnly:!0}),d.send(t)}()}catch(e){console.log(e),d.status(400).send({error:e.message})}}),app.listen(port,function(){console.log("Server listen on port",port)});