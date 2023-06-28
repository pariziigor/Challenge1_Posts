import { showPostPage } from "posts";

export interface Post {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
}

export interface Comment {
    id: number;
    postId: number;
    email: string;
    body: string;
}

export const posts: Post[] = [
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

export const comments: Comment[] = [
    {
        id: 1,
        postId: 1,
        email: 'teste@teste.com',
        body: 'teste teste teste'
    },
    {
        id: 2,
        postId: 2,
        email: 'teste@teste.com',
        body: 'teste teste teste'
    },
    {
        id: 3,
        postId: 3,
        email: 'teste@teste.com',
        body: 'teste teste teste'
    }
];

console.log(comments);
showPostPage();