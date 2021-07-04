
var handleSumbit = (ev:any): void =>{
    ev.preventDefault()

    console.dir(ev);
}

class Article{
    imgUrl:string
    description:string
    articleId:string

    constructor(imgUrl:string, description:string, articleId:string){
        this.imgUrl = imgUrl
        this.description = description
        this.articleId = "id" + Math.random().toString(16).slice(2)

    }

} 

class ArticleArray{
    article:Article[]
    constructor(){}
       
}