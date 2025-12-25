import type React from "react";
import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Hexagon,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Wrench,
  Blocks,
  Server
} from "lucide-react";
import type { RepoCategory } from "@/data/repositories";

export type CategoryInfo = {
  slug: RepoCategory;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};

export const categories: CategoryInfo[] = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    description: "Large language models, multimodal AI, and intelligent systems.",
    icon: Brain,
    gradient: "from-indigo-500 via-fuchsia-500 to-amber-400",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Next.js starters, design systems, and modern web stacks.",
    icon: Globe2,
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    slug: "devops",
    name: "DevOps & Cloud",
    description: "CI/CD, infrastructure as code, cloud platforms, and automation.",
    icon: GitBranch,
    gradient: "from-orange-400 via-amber-500 to-pink-500",
  },
  {
    slug: "data-science",
    name: "Data Science & ML",
    description: "Machine learning algorithms, datasets, and hands-on projects.",
    icon: Database,
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description: "Offensive security, tooling, and defensive playbooks.",
    icon: ShieldCheck,
    gradient: "from-red-500 via-rose-500 to-orange-500",
  },
  {
    slug: "system-design",
    name: "System Design",
    description: "Scalable architectures and interview prep.",
    icon: TerminalSquare,
    gradient: "from-blue-400 via-slate-500 to-slate-800",
  },
  {
    slug: "programming-tools",
    name: "Programming Tools",
    description: "Language ecosystems, awesome lists, and core toolchains.",
    icon: Sparkles,
    gradient: "from-emerald-400 via-teal-500 to-indigo-500",
  },
  {
    slug: "open-source-tools",
    name: "Open Source Tools",
    description: "CLIs, utilities, and developer productivity boosters.",
    icon: Wrench,
    gradient: "from-slate-400 via-gray-500 to-zinc-500",
  },
  {
    slug: "mobile",
    name: "Mobile Development",
    description: "React Native, Flutter, and mobile-first starter kits.",
    icon: Smartphone,
    gradient: "from-amber-400 via-pink-500 to-red-500",
  },
  {
    slug: "blockchain",
    name: "Blockchain & Web3",
    description: "Smart contracts, DeFi, NFTs, and decentralized applications.",
    icon: Blocks,
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
  },
  {
    slug: "backend",
    name: "Backend Development",
    description: "Server-side frameworks, APIs, databases, and backend tools.",
    icon: Server,
    gradient: "from-green-400 via-emerald-500 to-cyan-600",
  },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c]));
