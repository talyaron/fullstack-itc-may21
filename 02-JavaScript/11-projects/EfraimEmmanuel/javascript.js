

class Article {
    constructor(imageURL, description, articleID, width, height){
        this.imageURL = imageURL;
        this.description = description;
        this.articleID = "id" + Math.random().toString(16).slice(2);;
        this.width = width;
        this.height = height;
        this.boardGamed = document.querySelector('#boardGame');
        this.creatImage();
        this.createDescription()
    }

    creatImage() {
        try {
            this.box = document.createElement('img');
            this.box.setAttribute('ID', this.articleID);
            this.box.setAttribute('src', this.imageURL);
            this.box.setAttribute('width', this.width);
            this.box.setAttribute('height', this.height);
            this.box.classList.add("box");
            this.boardGamed.appendChild(this.box);
        } catch (e) {
            console.error(e)
        }
    }
    createDescription(){
        this.box2 = document.createElement('p');
        this.box2.setAttribute('width', '200px');
        this.box2.setAttribute('height', '20px');
        this.box2.classList.add("box2");
        this.box2.innerHTML = this.description;
        this.boardGamed.appendChild(this.box2);

    }
  
}
class ArticlesList {
    articles = [];


    add(article) {
        this.articles.push(article);
    }


    removeArticle(articleId){

    }

    updateArticle(articleId){

    }

   
}
const articles = new ArticlesList();
function handleSubmit(ev) {
    ev.preventDefault();
    let enterURL = ev.target.children.enterURL.value;
    let imageDescription = ev.target.children.description.value;
    const newArticle = new Article(`${enterURL}`, `${imageDescription}`, `${this.articleID}`, '200px', '200px');
    articles.add(article);
    console.log(articles);
    ev.target.reset();
}
