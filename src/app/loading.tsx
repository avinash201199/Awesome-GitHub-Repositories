import { GlassCard } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-8">
      <div className="flex flex-col gap-8">
        {/* Header Skeleton */}
        <header className="space-y-4">
          <div className="h-3 w-24 animate-pulse rounded-full bg-indigo-500/20" />
          <div className="space-y-2">
            <div className="h-10 w-64 animate-pulse rounded-xl bg-white/10 md:h-12" />
            <div className="h-4 w-96 animate-pulse rounded-lg bg-white/5" />
          </div>
        </header>

        {/* Filter Toolbar Skeleton */}
        <GlassCard className="grid gap-4 border-white/5 bg-white/5 p-4 md:grid-cols-4">
          <div className="h-11 animate-pulse rounded-xl bg-white/5" />
          <div className="h-11 animate-pulse rounded-xl bg-white/5" />
          <div className="h-11 animate-pulse rounded-xl bg-white/5" />
          <div className="h-11 animate-pulse rounded-xl bg-white/5" />
        </GlassCard>

        {/* Grid Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <GlassCard className="h-[200px] border-white/5 bg-white/5 p-6">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="h-6 w-32 animate-pulse rounded-lg bg-white/10" />
            <div className="h-6 w-16 animate-pulse rounded-full bg-white/5" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded-md bg-white/5" />
            <div className="h-4 w-2/3 animate-pulse rounded-md bg-white/5" />
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-12 animate-pulse rounded-full bg-white/5" />
            <div className="h-5 w-16 animate-pulse rounded-full bg-white/5" />
            <div className="h-5 w-14 animate-pulse rounded-full bg-white/5" />
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-3">
            <div className="h-5 w-5 animate-pulse rounded-full bg-white/10" />
            <div className="h-5 w-5 animate-pulse rounded-full bg-white/10" />
          </div>
          <div className="h-4 w-20 animate-pulse rounded-md bg-white/10" />
        </div>
      </div>
    </GlassCard>
  );
}