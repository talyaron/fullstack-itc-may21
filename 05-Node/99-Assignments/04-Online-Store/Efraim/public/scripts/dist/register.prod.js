"use strict";function handleRegister(t){var r,a,s,n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=t.target.elements.email.value,a=t.target.elements.password.value,s=t.target.elements.repassword.value,e.next=7,regeneratorRuntime.awrap(axios.post("/publicUsers/addUser",{email:r.toLowerCase(),password:a,repassword:s,role:"public"}));case 7:n=e.sent,console.log(n.data),"Register Succesful!"===n.data?alert("".concat(n.data," ").concat(r)):alert("Email taken or Passwords don't match!"),t.target.reset(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}},null,null,[[1,13]])}document.querySelector(".form-field").addEventListener("submit",handleRegister);