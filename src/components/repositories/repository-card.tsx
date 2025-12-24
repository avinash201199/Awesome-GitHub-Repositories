"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Star, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/card";
import { formatStars, highlightMatch } from "@/lib/utils";
import { MouseEvent } from "react";

interface RepositoryCardProps {
  repo: {
    name: string;
    description: string;
    stars: number;
    techStack: string[];
    slug: string;
    githubUrl: string;
    homepage?: string;
  };
  highlight?: string;
}

export function RepositoryCard({ repo, highlight = "" }: RepositoryCardProps) {
  // Spotlight Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <Link href={`/repos/${repo.slug}`} className="block h-full">
        <GlassCard className="relative h-full overflow-hidden border-white/10 bg-white/5 p-6 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.07]">
          
          {/* Spotlight Gradient Overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 40%)`
              ),
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between gap-4">
            <div className="space-y-3">
              {/* Header: Title & Stars */}
              <div className="flex items-start justify-between gap-2">
                <h3 
                  className="text-xl font-bold text-white transition-colors group-hover:text-indigo-300"
                  dangerouslySetInnerHTML={{ __html: highlightMatch(repo.name, highlight) }}
                />
                <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-200 ring-1 ring-inset ring-amber-500/20">
                  <Star className="h-3.5 w-3.5 fill-amber-500" />
                  {formatStars(repo.stars)}
                </div>
              </div>

              {/* Description with Highlight */}
              <p 
                className="line-clamp-2 text-sm leading-relaxed text-slate-400"
                dangerouslySetInnerHTML={{ __html: highlightMatch(repo.description, highlight) }}
              />

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {repo.techStack.slice(0, 3).map((tech) => (
                  <Badge 
                    key={tech} 
                    className="border-white/5 bg-white/5 px-2 py-0 text-[10px] text-slate-300"
                  >
                    {tech}
                  </Badge>
                ))}
                {repo.techStack.length > 3 && (
                  <span className="text-[10px] text-slate-500">+{repo.techStack.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(repo.githubUrl, "_blank");
                  }}
                  className="text-slate-500 transition-colors hover:text-white"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-4.5 w-4.5" />
                </button>
                {repo.homepage && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(repo.homepage, "_blank");
                    }}
                    className="text-slate-500 transition-colors hover:text-white"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-4.5 w-4.5" />
                  </button>
                )}
              </div>
              
              <span className="flex items-center gap-1 text-xs font-semibold text-indigo-400 transition-all group-hover:gap-2 group-hover:text-indigo-300">
                View Details <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </GlassCard>
      </Link>
    </motion.article>
  );
}