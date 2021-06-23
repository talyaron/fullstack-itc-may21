const inputFile = document.querySelector('input[type="file"]');

class Post{
    title: string;
    file: string;
    description: string;
    constructor(title: string, file: string, description: string){
        this.title = title;
        this.file = file;
        this.description = description;
    } 
}
 
class PostList{
    posts: Array<Post> = [];
    addPost(post: Post) {
        this.posts.push(post);
        let postsScreen = JSON.stringify(post);

        localStorage.setItem("posts", postsScreen); 
        window.location.href = "posts.html";
    }
}
inputFile.addEventListener("change", function(){
    console.log(this.files);
    // This converts the file to a DataURL
    const reader = new FileReader();

    reader.addEventListener("load", () =>{
        localStorage.setItem('image', JSON.stringify(reader.result));
    })
   
       //Takes the file index 0
       reader.readAsDataURL(this.files[0]);
});


// Funcion para tomar info de formulario
const handleSubmit = (ev: any):void => {
    ev.preventDefault();
    try{
    const title: string= ev.target.elements.title.value;
    let file: string = ev.target.elements.file.value;
    const description:string = ev.target.elements.description.value;
    
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    const newPosts = new Post(title, file, description);

    newPost.addPost(newPosts);
    console.log(newPosts)
}
catch(e){
    console.error(e);
}
}
const newPost = new PostList();