"use strict";function getInfo(){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(axios.get("/getData"));case 2:n=e.sent,console.log(n.data),renderBeverage(n);case 5:case"end":return e.stop()}})}function renderBeverage(e){console.log(e);var n="";e.data.forEach(function(e){n+="<p>".concat(e.name,'</p><img src="').concat(e.image,'">')}),document.getElementById("root").innerHTML=n}getInfo();