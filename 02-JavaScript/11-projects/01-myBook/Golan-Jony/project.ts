class Article {
    imageURL: string;
    description: string;
    articleId: number;

    constructor(imageURL: string, description: string, articleId: number) {
        this.imageURL = imageURL;
        this.description = description;
        this.articleId = articleId;
    }

    changeDescription() {

    }

    changeImageURL() {

    }
}

class ArticleArray {

    articles: Array<string>

    constructor(articles: Array<string>) {
        this.articles = articles;

    }

    Add() {

    }

    Remove() { //articleId

    }

    renderArray() {

    }
    renderArticle() { //articleId

    }


}

function handlerSumbit(event) {

    event.preventDefault();

    var root: HTMLElement = document.querySelector('.inputDiv');

    var inputURL = event.target.elements.imageURL.value;
    var description = event.target.elements.description.value;

    var container:HTMLElement = document.querySelector(".container");
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.backgroundColor = "red";



}





