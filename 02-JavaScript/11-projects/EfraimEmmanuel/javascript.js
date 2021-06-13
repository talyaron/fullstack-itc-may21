function handleSubmit(ev) {
    ev.preventDefault();
    let enterURL = ev.target.children.enterURL.value;
    let imageDescription = ev.target.children.description.value;
    const newArticle = new Article(`${enterURL}`, `${imageDescription}`, `ID`, '200px', '200px');
    ev.target.reset();
}

class Article {
    constructor(imageURL, description, articleID, width, height){
        this.imageURL = imageURL;
        this.description = description;
        this.articleID = articleID;
        this.width = width;
        this.height = height;
        this.boardGamed = document.querySelector('#boardGame');
        this.creatImage();
        this.createDescription()
    }

    creatImage() {
        try {
            this.box = document.createElement('img');
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
    changeImageURL(){

    }
    changeDescription(){

    }
}
class ArticleArray{
    constructor(imageURLArray, descriptionArray) {
    this.imageURLArray = imageURLArray;
    this.descriptionArray = descriptionArray;
}
}
