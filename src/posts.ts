import { posts } from "./app";
import { showPostDetailsPage } from "./postsDetail";

export function showPostPage() {
    const postsElement = document.getElementById("div")
    if (!postsElement) return;

    const postDiv = document.createElement("section");
    postsElement.appendChild(postDiv);

    posts.forEach((posts) => {
        const postImg = document.createElement("img");
        postImg.textContent = posts.imageUrl;
        postDiv.appendChild(postImg);
        
        const postTitle = document.createElement("h3");
        postTitle.textContent = posts.title;
        postImg.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.textContent = posts.body;
        postTitle.appendChild(postBody);

        const postLink = document.createElement("a");
        postLink.href = "";
        postLink.textContent = posts.title;
        postBody.appendChild(postLink);

        postLink.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });
    });
}
