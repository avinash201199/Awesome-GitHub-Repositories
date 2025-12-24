"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, SlidersHorizontal, rotateCcw } from "lucide-react";
import { RepositoryCard } from "@/components/repositories/repository-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { repositories } from "@/data/repositories";
import { categories } from "@/lib/categories";
import { cn } from "@/lib/utils";

const sorters = {
  "stars-desc": (a: any, b: any) => b.stars - a.stars,
  "stars-asc": (a: any, b: any) => a.stars - b.stars,
  alphabetical: (a: any, b: any) => a.name.localeCompare(b.name),
  recent: (a: any, b: any) =>
    new Date(b.lastUpdated ?? "2024-01-01").getTime() - new Date(a.lastUpdated ?? "2024-01-01").getTime(),
};

type SortKey = keyof typeof sorters;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function RepositoriesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [tech, setTech] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("stars-desc");

  const techOptions = useMemo(() => {
    const set = new Set<string>();
    repositories.forEach((repo) => repo.techStack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return repositories
      .filter((repo) => {
        const matchesQuery =
          !q ||
          repo.name.toLowerCase().includes(q) ||
          repo.description.toLowerCase().includes(q) ||
          repo.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          repo.techStack.some((tag) => tag.toLowerCase().includes(q));
        const matchesCategory = category === "all" || repo.category === category;
        const matchesTech = tech === "all" || repo.techStack.some((t) => t === tech);
        return matchesQuery && matchesCategory && matchesTech;
      })
      .sort(sorters[sort]);
  }, [category, query, sort, tech]);

  const resetFilters = () => {
    setCategory("all");
    setTech("all");
    setSort("stars-desc");
    setQuery("");
  };

  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Header Section */}
        <header className="flex flex-col gap-4">
          <motion.p 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium"
          >
            Explorer
          </motion.p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                The Directory
              </h1>
              <p className="max-w-xl text-slate-400">
                Discover curated open-source projects across {techOptions.length} technologies.
              </p>
            </div>
            <div className="flex items-center gap-3">
               <Badge tone="info" className="px-4 py-1.5 text-sm">
                {filtered.length} {filtered.length === 1 ? 'Repository' : 'Repositories'}
               </Badge>
            </div>
          </div>
        </header>

        {/* Filter Toolbar */}
        <GlassCard className="grid gap-4 border-white/10 bg-white/5 p-4 shadow-2xl md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              placeholder="Search by name, tech, or tags..."
              className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/50 pl-10 pr-3 text-sm text-white outline-none transition-all focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 placeholder:text-slate-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <Select value={category} onChange={setCategory} label="Category" 
            options={[{ label: "All Categories", value: "all" }, ...categories.map((c) => ({ label: c.name, value: c.slug }))]} 
          />
          
          <Select value={tech} onChange={setTech} label="Technology" 
            options={[{ label: "All Tech", value: "all" }, ...techOptions.map((t) => ({ label: t, value: t }))]} 
          />
          
          <Select
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
            label="Sort By"
            options={[
              { label: "Most Stars", value: "stars-desc" },
              { label: "Fewest Stars", value: "stars-asc" },
              { label: "A-Z Index", value: "alphabetical" },
              { label: "Latest Update", value: "recent" },
            ]}
          />
        </GlassCard>

        {/* Results Grid */}
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex h-80 flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/10 bg-white/5 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                  <SlidersHorizontal className="h-6 w-6 text-slate-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-medium text-white">No results found</p>
                  <p className="text-sm text-slate-400">Try adjusting your search terms or filters.</p>
                </div>
                <Button variant="secondary" onClick={resetFilters} className="mt-2 gap-2">
                  Reset All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
              >
                {filtered.map((repo) => (
                  <motion.div
                    key={repo.slug}
                    layout
                    variants={itemVariants}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <RepositoryCard repo={repo} highlight={query} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}

// Optimized Select Component for reuse
function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 ml-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-slate-950/50 px-3 text-sm text-white outline-none transition-all hover:border-white/20 focus:border-indigo-500/50 appearance-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='MD 19l-7-7-7 7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-slate-900 text-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}