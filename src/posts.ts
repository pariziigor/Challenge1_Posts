import { posts } from "app";
import { showPostDetailsPage } from "postsDetail";

export function showPostPage() {
    const postsElement = document.getElementById("posts")
    if (!postsElement) return;

    const postList = document.createElement("ul");
    postsElement.appendChild(postList);

    posts.forEach((posts) => {
        const postItem = document.createElement("li");
        postList.appendChild(postItem);

        const postLink = document.createElement("a");
        postLink.href = "";
        postLink.textContent = posts.title;
        postItem.appendChild(postLink);

        postLink.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });
    });
}

console.log(posts);