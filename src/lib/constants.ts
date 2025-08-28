export const navItems: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  // { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  // { name: "PostgreSQL", level: 65, category: "backend" },
  // { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  //   { name: "Docker", level: 70, category: "tools" },
  // { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  // { name: "React Testing Library", level: 85, category: "tools" },
  // { name: "Zod", level: 80, category: "tools" },
];

export const categories = ["all", "frontend", "backend", "tools"];

export const projects = [
  {
    id: 1,
    title: "WearlWolf - E-commerce",
    description:
      "A full-stack e-commerce platform built with MERN Stack, TypeScript, TailwindCSS, and Stripe. Designed for performance, scalability, and a smooth user experience.",
    image: "/projects/wearwolf.png",
    tags: ["MERN", "Typescript", "Stripe"],
    demoUrl: "https://wearwolf.onrender.com",
    githubUrl: "https://github.com/makwanachirag427/WearWolf",
  },
  {
    id: 2,
    title: "talkNow - Chat App",
    description:
      "A full-stack real-time one-to-one chat application built with MERN Stack, Socket.IO, TailwindCSS, DaisyUI, and TypeScript.",
    image: "/projects/talkNow.png",
    tags: ["MERN", "Typescript", "Socket.io"],
    demoUrl: "https://talknow-68hf.onrender.com",
    githubUrl: "https://github.com/makwanachirag427/talkNow",
  },
  {
    id: 3,
    title: "Zwitter - Social",
    description:
      "Zwitter is a full-stack social media web application inspired by Twitter. It allows users to register, login, post tweets, follow other users, and interact with posts in real-time.",
    image: "/projects/zwitter.png",
    tags: ["MERN", "Javascript", "TailwindCSS"],
    demoUrl: "https://zwitter-km14.onrender.com",
    githubUrl: "https://github.com/makwanachirag427/zwitter",
  },
];
