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
        let postsScreen = JSON.stringify(post); //YS: You should be setting the whole post array to localstorage instead of the individual post, so that in the next page you can display all the posts instead of just 1.

        localStorage.setItem("posts", postsScreen); 
        try{
            window.location.href = "posts.html";
            if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')   
        }catch(e){
            console.error(e)
        }
       
    }
}
inputFile.addEventListener("change", function(){
    // This converts the file to a DataURL
    const reader = new FileReader();

    reader.addEventListener("load", () =>{
        try{
        localStorage.setItem('image', JSON.stringify(reader.result));
    }catch(e){
        console.error(e)
    }
    })
   
       //Takes the file index 0
       reader.readAsDataURL(this.files[0]); //YS: Nice
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
const newPost = new PostList(); //YS: This should be defined before you use it (you use it in line 56 so this should be in line 46)