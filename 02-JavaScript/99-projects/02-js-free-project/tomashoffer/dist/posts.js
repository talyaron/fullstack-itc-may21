var root = document.querySelector('.posts');
var renderPost = JSON.parse(localStorage.getItem("posts"));
console.log(renderPost);
var img = JSON.parse(localStorage.getItem("image"));
root.innerHTML = "<div class=\"posts_items\"><h1 class=\"posts_title\">" + renderPost.title + "</h1><img class=\"posts_img\" src='' alt=\"\"><p>" + renderPost.description + "</p></div>";
document.querySelector(".posts_img").setAttribute('src', img);
//YS: I would have liked to see all posts here instead of just one. 
