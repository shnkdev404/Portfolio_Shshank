"use client";

import { profile, projects } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

// Full literal class strings so Tailwind's JIT scanner picks them up.
const cardHoverClasses: Record<string, string> = {
  accent: "hover:shadow-accent/10 hover:shadow-xl hover:border-accent/40",
  violet: "hover:shadow-violet-400/10 hover:shadow-xl hover:border-violet-400/40",
  amber: "hover:shadow-amber-400/10 hover:shadow-xl hover:border-amber-400/40",
};

const badgeClasses: Record<string, string> = {
  accent: "text-accent",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

const tagClasses: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300",
  neutral: "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",
};

export default function Projects() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-gray-100 dark:border-gray-800">
      <div ref={revealRef} className="reveal">
        <p className="section-label">Selected work</p>
        <h2 className="section-heading mb-3">My projects</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12 max-w-lg">
          A mix of real-world problems, competition builds, and experiments at the edge of software and hardware.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`proj-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm ${cardHoverClasses[project.hoverTone]}`}
            >
              <div className="browser-chrome">
                <span className="browser-dot bg-red-400" />
                <span className="browser-dot bg-yellow-400" />
                <span className="browser-dot bg-green-400" />
                <span className="ml-3 text-[11px] text-gray-400 font-mono flex-1 truncate">{project.pathLabel}</span>
              </div>
              <div className={`bg-gradient-to-br ${project.gradient} h-28 flex items-center justify-center text-5xl`}>
                {project.emoji}
              </div>
              <div className="p-5 bg-white dark:bg-[#111]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent text-xs font-mono ml-2 shrink-0 transition-colors"
                    >
                      {project.link.label}
                    </a>
                  ) : project.badge ? (
                    <span className={`text-xs font-mono ml-2 shrink-0 ${badgeClasses[project.badge.tone]}`}>
                      {project.badge.label}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded-md ${tagClasses[tag.tone]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 text-sm font-mono text-gray-500 dark:text-gray-400 hover:border-accent hover:text-accent transition-colors"
          >
            🐙 &nbsp;More projects on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
