export type Project = {
  id: string;
  company: string;
  title: string;
  role: string;
  period: string;
  theme: string;
  industry: string;
  description: string;
  challenge: string;
  impact: string[];
  tags: string[];
  featured: boolean;
  links: string[];
  cover?: string;
};

export const projects: Project[] = [
  {
    id: "kaufman",
    company: "Kaufman & Broad",
    title: "Real Estate Platform Rebuild",
    role: "Fullstack Product Developer",
    theme: "Performance / CMS",
    period: "06/2025 – Present",
    industry: "Real Estate",
    description:
      "Complete digital transformation of a large-scale real estate platform focused on performance, search optimization and CMS autonomy.",
    challenge:
      "Refactor a legacy ecosystem into a scalable, modular architecture while improving property search performance and content management flexibility.",
    impact: [
      "Improved property search relevance and performance",
      "Enabled business teams to build pages autonomously via CMS",
      "Delivered scalable architecture for long-term growth",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Contentful",
      "Algolia",
      "Azure",
      "Terraform",
      "Vitest",
    ],
    featured: true,
    links: [],
    cover: "/assets/kaufman.png",
  },
  {
    id: "invivo",
    company: "InVivo",
    title: "CMS-Driven Agricultural Portal",
    role: "Fullstack Developer",
    theme: "CMS / Frontend",
    period: "11/2024 – 03/2025",
    industry: "Agriculture",
    description:
      "Development of a dynamic content platform powered by a headless CMS with reusable architecture.",
    challenge:
      "Create a flexible frontend architecture allowing marketing teams to update content independently.",
    impact: [
      "Reduced content deployment time",
      "Implemented reusable component architecture",
      "Improved release stability with CI integration",
    ],
    tags: ["Vue 3", "TypeScript", "Contentful", "Jest", "GitLab CI"],
    links: [],
    featured: false,
    cover: "/assets/invivo.png",
  },
  {
    id: "jurisdor",
    company: "Université de Montpellier",
    title: "Scientific Publication Platform",
    role: "Fullstack Developer",
    theme: "Fullstack / Performance",
    period: "07/2024 – 11/2024",
    industry: "Education",
    description:
      "Fullstack platform for managing and publishing scientific research content.",
    challenge:
      "Build a performant frontend and structured backend CMS for academic publishing workflows.",
    impact: [
      "Improved content management process",
      "Automated CI/CD deployment pipeline",
      "Integrated monitoring for production stability",
    ],
    tags: [
      "Next.js",
      "React",
      "Strapi",
      "Docker",
      "GitHub Actions",
      "Prometheus",
    ],
    links: [],
    featured: false,
    cover: "/assets/jurisdor.png",
  },
  {
    id: "carrefourai",
    company: "Carrefour",
    title: "AI Marketing Studio",
    theme: "AI / Marketing",
    role: "Fullstack Developer",
    period: "08/2023 – 06/2024",
    industry: "Retail / AI",
    description:
      "Internal AI-powered campaign generation tool integrated with Google Vertex AI.",
    challenge:
      "Enable marketing teams to generate automated radio campaigns using AI in a production environment.",
    impact: [
      "Reduced manual campaign production time",
      "Integrated AI workflows into enterprise infrastructure",
      "Delivered Kubernetes-based scalable deployment",
    ],
    tags: ["Vue 3", "TypeScript", "Tailwind", "GCP", "Kubernetes", "Vertex AI"],
    links: [],
    featured: true,
    cover: "/assets/carrefourai.png",
  },
];
