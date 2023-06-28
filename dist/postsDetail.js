import { comments, posts } from "./app.js";
function getCommentsByPostId(postId) {
    return comments.filter((comment) => comment.postId === postId);
}
function getPostById(id) {
    return posts.find((post) => post.id === id);
}
export function showPostDetailsPage(postId) {
    const postsElement = document.getElementById("posts");
    if (!postsElement)
        return;
    const post = getPostById(postId);
    if (!post)
        return;
    const postDetails = document.createElement("div");
    postsElement.innerHTML = "";
    postsElement.appendChild(postDetails);
    const image = document.createElement("img");
    image.src = post.imageUrl;
    postDetails.appendChild(image);
    const title = document.createElement("h2");
    title.textContent = post.title;
    postDetails.appendChild(title);
    const body = document.createElement("p");
    body.textContent = post.body;
    postDetails.appendChild(body);
    const comments = getCommentsByPostId(postId);
    if (comments.length > 0) {
        const commentsList = document.createElement("ul");
        postDetails.appendChild(commentsList);
        comments.forEach((comment) => {
            const commentItem = document.createElement("li");
            commentsList.appendChild(commentItem);
            const email = document.createElement("strong");
            email.textContent = comment.email;
            commentItem.appendChild(email);
            const commentBody = document.createElement("p");
            commentBody.textContent = comment.body;
            commentItem.appendChild(commentBody);
        });
    }
    const backButton = document.createElement("a");
    backButton.href = "index.html";
    backButton.textContent = "Go Back";
    postDetails.appendChild(backButton);
}
//# sourceMappingURL=postsDetail.js.map