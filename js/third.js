const blogs = document.getElementsByTagName("p");
// console.log(blogs)
for (const blog of blogs){
    console.log(blog);
    blog.style.backgroundColor="red";
    blog.style.color = "white"
}
const harun = document.getElementById("special");

const friends = document.getElementById("friends");
// console.log(friends.children);
const  two = friends.children[1];
friends.removeChild(two);
//create element
const friend = document.createElement("li");
friend.innerText = "friends-2";
friends.appendChild(friend);