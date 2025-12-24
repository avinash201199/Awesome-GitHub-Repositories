"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Rocket, Star, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { StatsSection } from "@/components/sections/stats";
import { repositories } from "@/data/repositories";
import { categories } from "@/lib/categories";
import { formatStars } from "@/lib/utils";

// Variants for staggered entrance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function HomePage() {
  // Get top 3 repositories by stars for the "Featured" section
  const featuredRepos = [...repositories]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden px-4 pt-20 md:px-8 md:pt-32">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
            <Rocket className="h-4 w-4" />
            <span>Discover your next favorite project</span>
          </motion.div>

          <motion.h1 variants={item} className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:leading-[1.1]">
            The Ultimate Directory of <br />
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              GitHub Excellence
            </span>
          </motion.h1>

          <motion.p variants={item} className="mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            A hand-picked collection of high-quality repositories. Filter by tech stack, 
            explore categories, and build faster with curated open-source excellence.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <Link href="/repositories">
              <Button size="lg" className="h-12 gap-2 rounded-full bg-indigo-600 px-8 hover:bg-indigo-500">
                Explore Directory <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/avinash201199/Awesome-GitHub-Repositories" target="_blank">
              <Button size="lg" variant="outline" className="h-12 gap-2 rounded-full border-white/10 text-white hover:bg-white/5">
                <Github className="h-4 w-4" /> Star on GitHub
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <StatsSection />

      {/* --- FEATURED REPOS --- */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-bold">Trending</p>
              <h2 className="text-3xl font-bold text-white">Featured Repositories</h2>
            </div>
            <Link href="/repositories" className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredRepos.map((repo) => (
              <GlassCard key={repo.slug} className="group flex flex-col justify-between bg-white/5 p-6 hover:bg-white/[0.08]">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-amber-200">
                      <Star className="h-4 w-4 fill-amber-500" />
                      {formatStars(repo.stars)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                      {repo.description}
                    </p>
                  </div>
                </div>
                <Link href={`/repos/${repo.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- CATEGORIES PREVIEW --- */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-12 border border-white/5">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Browse by Category</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Explore specialized collections tailored to your development needs.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}>
                <GlassCard className="flex flex-col items-center gap-3 p-6 text-center bg-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all">
                  <Layers className="h-6 w-6 text-indigo-400" />
                  <span className="text-sm font-semibold text-white">{cat.name}</span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}