"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function handleSubmit(ev) {
  ev.preventDefault();
  var enterURL = ev.target.children.enterURL.value;
  var imageDescription = ev.target.children.description.value;
  var newArticle = new Article("".concat(enterURL), "".concat(imageDescription), "".concat(this.articleID), '200px', '200px');
  ev.target.reset();
}

var Article =
/*#__PURE__*/
function () {
  function Article(imageURL, description, articleID, width, height) {
    _classCallCheck(this, Article);

    this.imageURL = imageURL;
    this.description = description;
    this.articleID = "id" + Math.random().toString(16).slice(2);
    ;
    this.width = width;
    this.height = height;
    this.boardGamed = document.querySelector('#boardGame');
    this.creatImage();
    this.createDescription();
  }

  _createClass(Article, [{
    key: "creatImage",
    value: function creatImage() {
      try {
        this.box = document.createElement('img');
        this.box.setAttribute('ID', this.articleID);
        this.box.setAttribute('src', this.imageURL);
        this.box.setAttribute('width', this.width);
        this.box.setAttribute('height', this.height);
        this.box.classList.add("box");
        this.boardGamed.appendChild(this.box);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "createDescription",
    value: function createDescription() {
      this.box2 = document.createElement('p');
      this.box2.setAttribute('width', '200px');
      this.box2.setAttribute('height', '20px');
      this.box2.classList.add("box2");
      this.box2.innerHTML = this.description;
      this.boardGamed.appendChild(this.box2);
    }
  }, {
    key: "changeImageURL",
    value: function changeImageURL() {}
  }, {
    key: "changeDescription",
    value: function changeDescription() {}
  }]);

  return Article;
}();

var ArticleArray = function ArticleArray(imageURLArray, descriptionArray) {
  _classCallCheck(this, ArticleArray);

  this.imageURLArray = imageURLArray;
  this.descriptionArray = descriptionArray;
};