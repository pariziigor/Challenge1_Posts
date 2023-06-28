import { Post } from "app";
import { showPostDetailsPage } from "postsDetail";

const posts: Post[] = [
    {
        id: 1,
        title: "First Post",
        imageUrl: "Test",
        body: "First post text",
    },

    {
        id: 2,
        title: "Second Post",
        imageUrl: "Test2",
        body: "Second post text",
    },

    {
        id: 3,
        title: "Third Post",
        imageUrl: "Test3",
        body: "Third post text",
    }
];

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