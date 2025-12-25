"use client";

import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/repositories", label: "Repositories" },
  { href: "/categories", label: "Categories" },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 p-[2px] shadow-lg shadow-indigo-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-xs font-semibold uppercase tracking-widest text-white/90">
              AGR
            </div>
          </div>
          <div className="leading-tight">
            <Link href="/" className="text-lg font-semibold text-white">
              Awesome GitHub Repositories
            </Link>
            <p className="text-xs text-slate-400">Curated open source excellence</p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-slate-200 shadow-lg shadow-indigo-500/10 backdrop-blur md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 transition-colors",
                  active ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/avinash201199/Awesome-GitHub-Repositories"
            target="_blank"
            className="hidden h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.01] hover:border-white/40 hover:bg-white/20 md:inline-flex"
          >
            <Github className="h-4 w-4" />
            Contribute
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    active ? "bg-white/10 text-white" : "text-slate-200 hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="https://github.com/avinash201199/Awesome-GitHub-Repositories"
              target="_blank"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.01] hover:border-white/40 hover:bg-white/20"
            >
              <Github className="h-4 w-4" />
              Contribute
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
