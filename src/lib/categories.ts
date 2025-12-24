"use client";
import { useState } from "react";
import { categories } from "@/data/categories"; 
import { RepoCard } from "@/components/RepoCard"; 
import { GlassCard } from "@/components/ui/card";

export default function HomePage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const fetchGithub = async (query: string, isCategory = false) => {
    setLoading(true);
    if (isCategory) setActiveCategory(query);
    
    try {
      // If it's a category, we search by "topic", otherwise by general keyword
      const url = isCategory 
        ? `https://api.github.com/search/repositories?q=topic:${query}&sort=stars`
        : `https://api.github.com/search/repositories?q=${query}&sort=stars`;
        
      const res = await fetch(url);
      const data = await res.json();
      setRepos(data.items || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Awesome <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">GitHub</span> Repos
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          One-click discovery for the best open-source projects across different tech stacks.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button key={cat.slug} onClick={() => fetchGithub(cat.slug, true)}>
              <GlassCard className={`h-full text-left transition-all hover:scale-[1.02] border-white/5 bg-white/[0.02] ${activeCategory === cat.slug ? 'ring-2 ring-indigo-500' : ''}`}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.description}</p>
              </GlassCard>
            </button>
          );
        })}
      </div>

      {/* Results Section */}
      {repos.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-indigo-500 rounded-full" />
            Showing Results for {activeCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo: any) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}