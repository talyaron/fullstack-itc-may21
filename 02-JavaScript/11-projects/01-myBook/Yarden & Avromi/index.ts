export{}
var handleSumbit = (ev:any): void =>{
    ev.preventDefault()

    console.dir(ev);
}

class Article{
    imgUrl:URL
    description:string
    articleId:string

    constructor(imgUrl:URL, description:string, articleId:string){
        this.imgUrl = imgUrl
        this.description = description
        this.articleId = articleId

    }

} 

class ArticleArray{
    article:Article
    constructor(article:Article){
        this.article = article
    }
}