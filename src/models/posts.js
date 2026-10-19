// ============================================
// posts.js
// ============================================
const posts = [
    {
        id: 101,
        userId: 1,
        title: "Getting Started with React Hooks",
        body: "Hooks let you use state and lifecycle features in function components...",
        tags: ["react", "javascript", "frontend"],
        likes: 42,
        published: true,
        createdAt: "2024-05-01T10:00:00Z",
    },
    {
        id: 102,
        userId: 1,
        title: "CSS Grid in 10 Minutes",
        body: "Grid is a two-dimensional layout system that makes complex layouts easy...",
        tags: ["css", "layout"],
        likes: 27,
        published: true,
        createdAt: "2024-05-08T12:20:00Z",
    },
    {
        id: 103,
        userId: 2,
        title: "Building REST APIs with Express",
        body: "Express is a minimal and flexible Node.js web framework...",
        tags: ["node", "express", "backend"],
        likes: 63,
        published: true,
        createdAt: "2024-05-12T16:45:00Z",
    },
    {
        id: 104,
        userId: 3,
        title: "Design Systems That Scale",
        body: "A design system is more than a component library...",
        tags: ["design", "ui"],
        likes: 19,
        published: false,
        createdAt: "2024-05-15T08:10:00Z",
    },
    {
        id: 105,
        userId: 4,
        title: "TypeScript Generics Explained",
        body: "Generics allow you to write reusable, type-safe code...",
        tags: ["typescript", "javascript"],
        likes: 88,
        published: true,
        createdAt: "2024-05-20T11:00:00Z",
    },
    {
        id: 106,
        userId: 2,
        title: "Deploying Node Apps to Docker",
        body: "Containerizing your app makes deployments reproducible...",
        tags: ["docker", "devops", "node"],
        likes: 34,
        published: true,
        createdAt: "2024-05-22T09:25:00Z",
    },
];

module.exports = posts;