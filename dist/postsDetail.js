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
    postDetails.classList.add("details-div");
    const image = document.createElement("img");
    image.src = post.imageUrl;
    postDetails.appendChild(image);
    image.classList.add("details-img");
    const title = document.createElement("h2");
    title.textContent = post.title;
    postDetails.appendChild(title);
    title.classList.add("details-title");
    const body = document.createElement("p");
    body.textContent = post.body;
    postDetails.appendChild(body);
    body.classList.add("details-body");
    const comments = getCommentsByPostId(postId);
    if (comments.length > 0) {
        const commentsList = document.createElement("ul");
        postDetails.appendChild(commentsList);
        commentsList.classList.add("comment-ul");
        comments.forEach((comment) => {
            const commentItem = document.createElement("li");
            commentsList.appendChild(commentItem);
            commentItem.classList.add("comment-li");
            const email = document.createElement("strong");
            email.textContent = comment.email;
            commentItem.appendChild(email);
            email.classList.add("comment-email");
            const commentBody = document.createElement("p");
            commentBody.textContent = comment.body;
            commentItem.appendChild(commentBody);
            commentBody.classList.add("comment-body");
        });
    }
    const backButton = document.createElement("a");
    backButton.href = "index.html";
    backButton.textContent = "Go Back";
    postDetails.appendChild(backButton);
}
//# sourceMappingURL=postsDetail.js.map