var inputFile = document.querySelector('input[type="file"]');
var Post = /** @class */ (function () {
    function Post(title, file, description) {
        this.title = title;
        this.file = file;
        this.description = description;
    }
    return Post;
}());
var PostList = /** @class */ (function () {
    function PostList() {
        this.posts = [];
    }
    PostList.prototype.addPost = function (post) {
        this.posts.push(post);
        var postsScreen = JSON.stringify(post);
        localStorage.setItem("posts", postsScreen);
        try {
            window.location.href = "posts.html";
            if (!window.location.href)
                throw new Error('The page where you want to redirect it doesn´t exist!');
        }
        catch (e) {
            console.error(e);
        }
    };
    return PostList;
}());
inputFile.addEventListener("change", function () {
    // This converts the file to a DataURL
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        try {
            localStorage.setItem('image', JSON.stringify(reader.result));
        }
        catch (e) {
            console.error(e);
        }
    });
    //Takes the file index 0
    reader.readAsDataURL(this.files[0]);
});
// Funcion para tomar info de formulario
var handleSubmit = function (ev) {
    ev.preventDefault();
    try {
        var title = ev.target.elements.title.value;
        var file = ev.target.elements.file.value;
        var description = ev.target.elements.description.value;
        // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
        var newPosts = new Post(title, file, description);
        newPost.addPost(newPosts);
        console.log(newPosts);
    }
    catch (e) {
        console.error(e);
    }
};
var newPost = new PostList();
