"use client";

import { use } from "react";
import Link from "next/link";
import { roadmaps } from "@/data/roadmaps";
import { GlassCard } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, BookOpen, Github } from "lucide-react";
import { notFound } from "next/navigation";

export default function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ domain: string; role: string }>;
}) {
  const { domain: domainId, role: roleSlug } = use(params);

  // Find the domain
  const domain = roadmaps.find((d) => d.id === domainId);
  if (!domain) {
    notFound();
  }

  // Find the role by slug
  const role = domain.roles.find(
    (r) =>
      r.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === roleSlug
  );

  if (!role) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Roadmaps
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">{domain.icon}</div>
            <div>
              <div className="text-sm text-slate-400">{domain.title}</div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">{role.title}</h1>
            </div>
          </div>
          <p className="text-lg text-slate-300 mt-2">{role.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Learning Path</h2>
          </div>
          <p className="text-slate-400">
            Follow this curated roadmap with {role.sections.length} sections and hand-picked GitHub
            resources to master {role.title}.
          </p>
        </div>

        <div className="space-y-8">
          {role.sections.map((section, idx) => (
            <div key={idx}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {section.resources.map((resource, resIdx) => (
                  <a
                    key={resIdx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlassCard className="group h-full cursor-pointer border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20">
                      <div className="flex items-start gap-3">
                        <Github className="mt-1 h-5 w-5 flex-shrink-0 text-slate-400 transition-colors group-hover:text-indigo-400" />
                        <div className="flex-1 min-w-0">
                          <div className="mb-2 flex items-start justify-between gap-2">
                            <h4 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                              {resource.title}
                            </h4>
                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-slate-400 transition-colors group-hover:text-indigo-400" />
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-16">
          <GlassCard className="border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-amber-500/10 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h3>
              <p className="mx-auto mb-6 max-w-2xl text-slate-300">
                Begin your learning journey by exploring these resources in order. Build projects,
                contribute to open source, and join the community!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/repositories"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/20"
                >
                  Explore More Repositories
                </Link>
                <Link
                  href="/roadmaps"
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                >
                  View Other Roadmaps
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
