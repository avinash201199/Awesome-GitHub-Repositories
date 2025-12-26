"use client";

import Link from "next/link";
import { roadmaps, RoadmapDomain, RoadmapRole } from "@/data/roadmaps";
import { GlassCard } from "@/components/ui/card";
import { ArrowRight, BookOpen, Target } from "lucide-react";

function RoleCard({ role, domainId }: { role: RoadmapRole; domainId: string }) {
  // Create a URL-friendly slug from the role title
  const roleSlug = role.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  
  return (
    <Link href={`/roadmaps/${domainId}/${roleSlug}`}>
      <GlassCard className="group cursor-pointer border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            {role.title}
          </h3>
          <p className="text-sm text-slate-400">{role.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <BookOpen className="h-4 w-4" />
            <span>{role.sections.length} Learning Sections</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-400 group-hover:gap-3 transition-all">
            <span className="font-medium">View Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}

function DomainSection({ domain }: { domain: RoadmapDomain }) {
  return (
    <section id={domain.id} className="scroll-mt-20">
      <div className="mb-6 flex items-center gap-3">
        <div className="text-4xl">{domain.icon}</div>
        <div>
          <h2 className="text-3xl font-bold text-white">{domain.title}</h2>
          <p className="text-slate-400">{domain.description}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {domain.roles.map((role, idx) => (
          <RoleCard key={idx} role={role} domainId={domain.id} />
        ))}
      </div>
    </section>
  );
}

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="border-b border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-amber-500/10 px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Target className="h-4 w-4" />
            Career Development Roadmaps
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Complete Career Roadmaps with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
              GitHub Resources
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
            Comprehensive guides to becoming a professional in various tech domains - completely
            free using curated GitHub resources!
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-16 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4">
          <div className="flex gap-2 py-4">
            {roadmaps.map((domain) => (
              <a
                key={domain.id}
                href={`#${domain.id}`}
                className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-indigo-500/30 hover:bg-white/10 hover:text-white"
              >
                <span className="mr-2">{domain.icon}</span>
                {domain.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Roadmap Sections */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-16">
          {roadmaps.map((domain) => (
            <DomainSection key={domain.id} domain={domain} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-amber-500/10 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-300">
            Choose your path, follow the roadmap systematically, and build real-world projects.
            Everything you need is on GitHub - completely free!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/repositories"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/20"
            >
              Browse All Repositories
            </a>
            <a
              href="/contribute"
              className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
            >
              Contribute Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
