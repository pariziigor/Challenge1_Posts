import { posts } from "./app";
import { showPostDetailsPage } from "./postsDetail";

export function showPostPage() {
    const postsElement = document.getElementById("posts");
    if (!postsElement) return;

    posts.forEach((posts) => {
        const postDiv = document.createElement("div");
        postsElement.appendChild(postDiv);
        postDiv.classList.add("post-div");
        postDiv.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });

        
        const postImg = document.createElement("img");
        postImg.src = posts.imageUrl;
        postDiv.appendChild(postImg);
        postImg.classList.add("post-img")
        
        const postTitle = document.createElement("h3");
        postTitle.textContent = posts.title;
        postDiv.appendChild(postTitle);
        postTitle.classList.add("post-title");

        const postBody = document.createElement("p");
        postBody.textContent = posts.body;
        postDiv.appendChild(postBody);
        postBody.classList.add("post-body");

        const divLink = document.createElement("div");
        postDiv.appendChild(divLink);
        divLink.classList.add("div-link");
        const postLink = document.createElement("a");
        postLink.href = "#";
        postLink.textContent = "Expand...";
        divLink.appendChild(postLink);
        postLink.classList.add("post-link");

        postLink.addEventListener("click", (event) => {
            event.preventDefault();
            showPostDetailsPage(posts.id);
        });
    });
}
