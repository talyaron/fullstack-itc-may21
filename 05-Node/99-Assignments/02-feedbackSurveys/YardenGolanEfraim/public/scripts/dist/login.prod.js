"use strict";function handleLogin(r){var t,n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,t=r.target.elements.password.value,n=r.target.elements.email.value,e.next=6,regeneratorRuntime.awrap(axios.get("/users"));case 6:if(null!=e.sent.data.users.find(function(e){return e.email===n&&e.password===t}))return e.next=10,regeneratorRuntime.awrap(axios.post("/login",{password:t,email:n}));e.next=16;break;case 10:e.sent,r.target.reset(),alert("login success!!"),window.location.href="/surveylist.html",e.next=18;break;case 16:throw alert("incorrect email or password!"),new Error("incorrect email or password");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.error(e.t0);case 23:case"end":return e.stop()}},null,null,[[1,20]])}document.querySelector(".form-field").addEventListener("submit",handleLogin);