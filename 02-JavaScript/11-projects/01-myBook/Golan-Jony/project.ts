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

<<<<<<< HEAD
    articles: Array<string>

    constructor(articles: Array<string>) {
        this.articles = articles;

    }

    Add() {
=======
    articles:Array<Article>

    constructor(){

    }

    Add(article:Article){
>>>>>>> main

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

<<<<<<< HEAD
    var container:HTMLElement = document.querySelector(".container");
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.backgroundColor = "red";
=======
    var article:HTMLElement = document.createElement('div'); 
    article.className = "divArt";
    article.style.width = "100px";
    article.style.height = "100px";
    article.style.backgroundColor = "red";
    
    var container = document.createElement('.container');

    container.appendChild(container);



>>>>>>> main



}





