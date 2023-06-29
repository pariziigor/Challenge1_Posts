import { showPostPage } from "./posts";

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
        title: "Discovering the Magic of Los Angeles",
        imageUrl: "https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        body: "Los Angeles, often referred to as the City of Angels, is a vibrant and diverse metropolis located on the west coast of the United States. Known for its sunny weather, palm-lined streets, and iconic landmarks, Los Angeles offers a unique blend of culture, entertainment, and natural beauty.",
    },

    {
        id: 2,
        title: "New York: The City That Never Sleeps",
        imageUrl: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        body: "The city's skyline is dominated by the majestic Empire State Building, offering breathtaking views of the bustling streets below. Take a leisurely stroll through Central Park, an oasis of green in the heart of the concrete jungle, or explore the trendy neighborhoods of SoHo and Greenwich Village, known for their art galleries, boutiques, and cozy cafes.",
    },

    {
        id: 3,
        title: "San Francisco: A City of Contrasts",
        imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        body: "Nestled on the picturesque California coastline, San Francisco is a city of contrasts, blending stunning natural beauty with a rich cultural heritage. Known for its iconic landmarks, vibrant neighborhoods, and progressive mindset, San Francisco offers a unique and unforgettable experience.",
    },

    {
        id: 4,
        title: "Chicago: The Windy City's Dynamic Charm",
        imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80",
        body: "Chicago, known as the Windy City, exudes a dynamic charm that captivates visitors from near and far. Situated on the shores of Lake Michigan, this vibrant metropolis offers a blend of architectural marvels, cultural richness, and a thriving arts scene."
    },

    {
        id: 5,
        title: "Las Vegas: The Glittering Playground",
        imageUrl: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
        body: "Las Vegas, often referred to as the Entertainment Capital of the World, is a dazzling city that beckons visitors with its vibrant lights, extravagant hotels, and non-stop entertainment. Nestled in the heart of the Nevada desert, Las Vegas is a playground for those seeking excitement, indulgence, and unforgettable experiences."
    }
];

export const comments: Comment[] = [
    {
        id: 1,
        postId: 1,
        email: 'adventure.seeker@email.com',
        body: 'I thoroughly enjoyed reading about Los Angeles! The descriptions of the citys iconic landmarks and diverse neighborhoods have piqued my curiosity.'
    },

    {
        id: 2,
        postId: 1,
        email: 'sunsetdreamer@example.com',
        body: 'Your article beautifully captures the essence of Los Angeles, a city Ive always dreamed of visiting. The mention of the stunning beaches and picturesque sunsets has me yearning for a relaxing stroll along the shoreline.'
    },
    
    {
        id: 3,
        postId: 1,
        email: 'hollywoodfanatic@example.com',
        body: 'The descriptions of the famous Hollywood Walk of Fame and the glamorous Sunset Boulevard have fueled my excitement to explore the heart of the film industry.'
    },

    {
        id: 4,
        postId: 2,
        email: 'urbanexplorer@example.com',
        body: 'he descriptions of the bustling streets, towering skyscrapers, and vibrant atmosphere have me eager to explore every corner of the Big Apple.'
    },

    {
        id: 5,
        postId: 2,
        email: 'broadwayfanatic@email.com',
        body: 'Reading about New York has filled me with excitement, especially as a theater enthusiast. The mention of Broadway and the renowned shows has me daydreaming about catching a live performance in the heart of the theater district.'
    },

    {
        id: 6,
        postId: 2,
        email: 'foodieexplorer@example.com',
        body: 'our article about New York has left me hungry for more than just travel! The diverse culinary scene, from the famous street food to upscale dining options, has me yearning to embark on a culinary adventure through the city.'
    },

    {
        id: 7,
        postId: 3,
        email: 'natureexplorer@example.com',
        body: 'our description of San Francisco has ignited my love for nature and exploration. The mention of the beautiful Golden Gate Park and the opportunity to take a leisurely stroll along the bay has me yearning for an adventure in the city.'
    },

    {
        id: 8,
        postId: 3,
        email: 'historybuff@example.com',
        body: 'The mention of Alcatraz Island and its fascinating stories, along with the iconic cable cars traversing the citys hilly streets, has me eager to explore the citys past.'
    },

    {
        id: 9,
        postId: 3,
        email: 'foodenthusiast@example.com',
        body: 'I cant wait to indulge in the citys renowned sourdough bread, sample fresh produce at the Ferry Building Marketplace, and discover hidden foodie gems in the vibrant neighborhoods. '
    },

    {
        id: 10,
        postId: 4,
        email: 'cityexplorer@example.com',
        body: 'Chicago has always been on my travel wishlist, and your post has further fueled my desire to visit this incredible city.'
    },

    {
        id: 11,
        postId: 4,
        email: 'jazzlover@example.com',
        body: 'Im thrilled to learn about Chicagos rich musical heritage. The mention of live jazz clubs and the citys contribution to the genre has me eager to experience the vibrant jazz scene firsthand.'
    },

    {
        id: 12,
        postId: 4,
        email: 'foodieexplorer@email.com',
        body: 'The mention of deep-dish pizza and diverse cuisines in neighborhoods like Little Italy and Chinatown has me ready to embark on a foodie adventure.'
    },

    {
        id: 13,
        postId: 5,
        email: 'casinolover@example.com',
        body: 'The description of the vibrant Strip and its iconic resorts has me eager to try my luck at the gaming tables and experience the lively atmosphere. '
    },

    {
        id: 14,
        postId: 5,
        email: 'showtimefanatic@example.com',
        body: 'I cant wait to be swept away by the acrobatics, music, and artistry that Las Vegas has to offer. Thank you for highlighting the captivating entertainment scene of this incredible city!'
    },

    {
        id: 15,
        postId: 5,
        email: 'foodieexplorer@example.com',
        body: 'The mention of renowned celebrity-chef restaurants and the famous buffets has me eager to indulge in a culinary feast. I cant wait to explore the diverse dining options, from fine dining to innovative fusion cuisine.'
    },
];

console.log(comments);
showPostPage();