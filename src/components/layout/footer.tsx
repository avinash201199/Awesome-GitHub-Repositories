import type React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  project: [
    { label: "Home", href: "/" },
    { label: "Repositories", href: "/repositories" },
    { label: "Categories", href: "/categories" },
    { label: "GitHub Repository", href: "https://github.com/avinash201199/Awesome-GitHub-Repositories" },
  ],
  about: [
    { label: "About", href: "/about" },
    { label: "Contribution", href: "/contribute" },
  ],
  letsCode: [
    { label: "Roadmap", href: "https://www.lets-code.co.in/articles/roadmap/" },
    { label: "Interview Questions", href: "https://www.lets-code.co.in/interview/interviewquestions/" },
    { label: "PYQs", href: "https://www.lets-code.co.in/previousyearcodingquestion/pyqs/" },
    { label: "Interview Experience", href: "https://www.lets-code.co.in/interview-experience/" },
    { label: "Startups list", href: "https://www.lets-code.co.in/interview/interviewquestions/" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-sm text-slate-300 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-3">
          <h2 className="text-xl font-semibold text-white">Built for developers</h2>
          <p className="text-slate-400">
            Curated GitHub repositories across every tech stack. Fast search, filters, and a delightful UI to discover your next favorite project.
          </p>
          <p className="text-xs text-slate-500">Built with ❤️ for the open-source community.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <FooterColumn title="Project" links={footerLinks.project} />
          <FooterColumn title="About" links={footerLinks.about} />
          <FooterColumn title="Lets code" links={footerLinks.letsCode} />
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <SocialLink href="https://github.com/avinash201199" icon={<Github className="h-5 w-5" />} label="GitHub" />
          <SocialLink href="https://x.com/AvinashSingh_20" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
          <SocialLink href="https://www.linkedin.com/in/avinash-singh-bb0b8a371/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{title}</p>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
    >
      {icon}
    </Link>
  );
}
