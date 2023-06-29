import { posts } from "./app";
import { showPostDetailsPage } from "./postsDetail";

export function showPostPage() {
    const postsElement = document.getElementById("posts")
    if (!postsElement) return;

    posts.forEach((posts) => {
        const postDiv = document.createElement("div");
        postsElement.appendChild(postDiv);

        const postImg = document.createElement("img");
        postImg.src = posts.imageUrl;
        postDiv.appendChild(postImg);
        
        const postTitle = document.createElement("h3");
        postTitle.textContent = posts.title;
        postDiv.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.textContent = posts.body;
        postDiv.appendChild(postBody);

        const postLink = document.createElement("a");
        postLink.href = "#";
        postLink.textContent = "Expand...";
        postBody.appendChild(postLink);

        postLink.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });
    });
}
