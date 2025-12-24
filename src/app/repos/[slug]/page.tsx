import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  Star, 
  ArrowLeft, 
  Code2, 
  Shield, 
  History,
  Terminal,
  Share2
} from "lucide-react";
import { repositories } from "@/data/repositories";
import { categoryMap } from "@/lib/categories";
import { buildPageMetadata } from "@/lib/seo";
import { formatStars } from "@/lib/utils";
import { GlassCard, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return repositories.map((repo) => ({ slug: repo.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const repo = repositories.find((r) => r.slug === slug);
  if (!repo) return buildPageMetadata("Repository Not Found");

  return buildPageMetadata(
    repo.name,
    repo.description,
    `/repos/${repo.slug}`
  );
}

export default async function RepositoryDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const repo = repositories.find((r) => r.slug === slug);

  if (!repo) notFound();

  const category = categoryMap.get(repo.category);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-8">
      {/* --- Breadcrumbs & Actions --- */}
      <nav className="mb-8 flex items-center justify-between">
        <Link 
          href="/repositories" 
          className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Directory
        </Link>
        <Button variant="ghost" size="sm" className="gap-2 text-slate-400">
          <Share2 className="h-4 w-4" /> Share
        </Button>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* --- Left Column: Main Info --- */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-6">
            <div className="space-y-4">
              <Badge tone="info" className="px-3 py-1">
                {category?.name ?? repo.category}
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                {repo.name}
              </h1>
              <p className="text-xl leading-relaxed text-slate-300">
                {repo.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href={repo.githubUrl} target="_blank" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full gap-2 rounded-xl bg-white text-slate-950 hover:bg-slate-200">
                  <Github className="h-5 w-5" /> View on GitHub
                </Button>
              </Link>
              {repo.homepage && (
                <Link href={repo.homepage} target="_blank" className="flex-1 sm:flex-none">
                  <Button size="lg" variant="outline" className="w-full gap-2 rounded-xl border-white/10 text-white hover:bg-white/5">
                    <ExternalLink className="h-5 w-5" /> Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </section>

          {/* Detailed Overview */}
          <GlassCard className="bg-white/5">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-white">
                <Terminal className="h-5 w-5 text-indigo-400" />
                <h2 className="text-lg font-semibold">Project Overview</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  This repository has been curated for its exceptional code quality and community impact. 
                  It represents a top-tier example of <span className="text-indigo-300 font-medium">{repo.techStack.join(", ")}</span> integration.
                </p>
                <div className="mt-6 rounded-xl bg-slate-950/50 p-6 border border-white/5">
                  <p className="text-sm text-slate-400 italic">
                    "README preview functionality is currently under development. Please visit GitHub for full documentation, 
                    contribution guides, and security policies."
                  </p>
                </div>
              </div>
            </CardContent>
          </GlassCard>
        </div>

        {/* --- Right Column: Stats & Metadata --- */}
        <aside className="space-y-6">
          {/* Quick Stats Card */}
          <GlassCard className="bg-indigo-500/5 border-indigo-500/20">
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Star className="h-3 w-3 text-amber-400" /> Stars
                </p>
                <p className="text-2xl font-bold text-white">{formatStars(repo.stars)}</p>
              </div>
              <div className="space-y-1">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Code2 className="h-3 w-3 text-indigo-400" /> Language
                </p>
                <p className="text-2xl font-bold text-white">{repo.techStack[0]}</p>
              </div>
            </CardContent>
          </GlassCard>

          {/* Tech Stack Card */}
          <GlassCard className="bg-white/5">
            <CardContent className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {repo.techStack.map((tech) => (
                  <Badge key={tech} className="bg-indigo-500/10 text-indigo-300 border-indigo-500/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </GlassCard>

          {/* Metadata List */}
          <GlassCard className="bg-white/5">
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-400">
                  <Shield className="h-4 w-4" /> License
                </span>
                <span className="font-medium text-white">MIT</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-400">
                  <History className="h-4 w-4" /> Last Updated
                </span>
                <span className="font-medium text-white">Recently</span>
              </div>
            </CardContent>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}