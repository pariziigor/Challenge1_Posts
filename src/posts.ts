import { posts } from "app";
import { showPostDetailsPage } from "postsDetail";

export function showPostPage() {
    const postsElement = document.getElementById("posts")
    if (!postsElement) return;

    const postDiv = document.createElement("div");
    postsElement.appendChild(postDiv);

    posts.forEach((posts) => {
        const postImg = document.createElement("img");
        postDiv.appendChild(postImg);
        
        const postTitle = document.createElement("h3");
        postImg.appendChild(postTitle);

        const postBody = document.createElement("p");
        postTitle.appendChild(postBody);

        const postLink = document.createElement("a");
        postLink.href = "";
        postLink.textContent = "Expand...";
        postBody.appendChild(postLink);

        postLink.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });
    });
}

console.log(posts);