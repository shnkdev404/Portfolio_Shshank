"use client";

import { profile, projects } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

// Full literal class strings so Tailwind's JIT scanner picks them up.
const cardHoverClasses: Record<string, string> = {
  accent: "hover:shadow-accent/10 hover:shadow-xl hover:border-accent/40",
  violet: "hover:shadow-violet-400/10 hover:shadow-xl hover:border-violet-400/40",
  amber: "hover:shadow-amber-400/10 hover:shadow-xl hover:border-amber-400/40",
};

const tagClasses: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300",
  neutral: "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",
};

const knowMoreClasses: Record<string, string> = {
  accent: "hover:text-accent",
  violet: "hover:text-violet-400",
  amber: "hover:text-amber-400",
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
              {/* Browser chrome bar */}
              <div className="browser-chrome">
                <span className="browser-dot bg-red-400" />
                <span className="browser-dot bg-yellow-400" />
                <span className="browser-dot bg-green-400" />
                <span className="ml-3 text-[11px] text-gray-400 font-mono flex-1 truncate">
                  {project.pathLabel}
                </span>
              </div>

              {/* Gradient banner */}
              <div
                className={`bg-gradient-to-br ${project.gradient} h-28 flex items-center justify-center text-5xl`}
              >
                {project.emoji}
              </div>

              {/* Card body */}
              <div className="p-5 bg-white dark:bg-[#111] flex flex-col h-full">
                {/* Title row */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent text-xs font-mono ml-2 shrink-0 transition-colors"
                    >
                      {project.link.label}
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded-md ${tagClasses[tag.tone]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Know more button */}
                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.link?.href ?? profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-mono text-gray-400 transition-colors group ${knowMoreClasses[project.hoverTone]}`}
                  >
                    {/* GitHub icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.19.69-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                    Know more
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
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