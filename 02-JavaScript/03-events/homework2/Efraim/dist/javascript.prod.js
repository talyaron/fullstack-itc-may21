"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function handleSubmit(t){t.preventDefault(),console.dir(t.target.children);for(var e,i=t.target.children.id.value,o=document.querySelectorAll(".image-select"),s=document.querySelectorAll(".image-chosen"),n=0;n<o.length;n++)o[n].checked&&(e=s[n].src);if(void 0===e)throw new Error("No player selected!");var r=t.target.children.posix.value;96<r&&(r=96);var c=t.target.children.posiy.value;95<c&&(c=95),console.log(i,e,r,c);new GamePiece("#".concat(i),"".concat(e),"50px","38px",{x:"".concat(r),y:"".concat(c)});t.target.reset()}var GamePiece=function(){function r(t,e,i,o,s){var n=this;_classCallCheck(this,r);try{if("object"!==_typeof(s))throw new Error("position is not an object");if(!("x"in s&&"y"in s))throw new Error("starting point should have this format {x:0, y:0}");this.height=o,this.width=i,this.pieceId=t,this.imagePhoto=e,this.position={},this.position.x=s.x,this.position.y=s.y,this.boardGamed=document.querySelector("#boardGame"),this.createPeice(),this.step=2}catch(t){console.error(t)}document.addEventListener("keyup",function(t){return n.listener(t)})}return _createClass(r,[{key:"createPeice",value:function(){try{this.piece=document.createElement("img"),this.piece.setAttribute("src",this.imagePhoto),this.piece.setAttribute("width",this.width),this.piece.setAttribute("height",this.height),this.piece.classList.add("piece"),this.piece.style.left="".concat(this.position.x,"%"),this.piece.style.top="".concat(this.position.y,"%"),this.boardGamed.appendChild(this.piece)}catch(t){console.error(t)}}},{key:"moveRight",value:function(){this.step+this.position.x<96&&(this.position.x+=this.step,this.piece.style.left="".concat(this.position.x,"%"))}},{key:"moveLeft",value:function(){-1<this.position.x-this.step&&(this.position.x-=this.step,this.piece.style.left="".concat(this.position.x,"%"))}},{key:"moveDown",value:function(){this.position.y+this.step<95&&(this.position.y+=this.step,this.piece.style.top="".concat(this.position.y,"%"))}},{key:"moveUp",value:function(){-2<this.position.y-this.step&&(this.position.y-=this.step,this.piece.style.top="".concat(this.position.y,"%"))}},{key:"listener",value:function(t){switch(t.key){case"ArrowLeft":this.moveLeft();break;case"ArrowRight":this.moveRight();break;case"ArrowDown":this.moveDown();break;case"ArrowUp":this.moveUp()}}}]),r}();