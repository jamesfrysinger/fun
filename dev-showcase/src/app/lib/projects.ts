import { Project } from "../types/project";

export const projects: Project = [
  {
    id: "1",
    title: "Dev Portfolio",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/yourname/dev-portfolio",
    liveUrl: "https://yourportfolio.com",
  },
  {
    id: "2",
    title: "Blog CMS",
    description: "Markdown blog with custom admin dashboard.",
    tech: ["Next.js", "Prisma", "NextAuth"],
    repoUrl: "https://github.com/yourname/blog-cms",
  },
];
