"use client";

import { profile, terminalLines, currentlyBuilding } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="min-h-[calc(100vh-60px)] flex items-center px-5 sm:px-8 max-w-6xl mx-auto">
      <div ref={revealRef} className="reveal w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <p className="section-label">{profile.greeting}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">{profile.intro}</p>
          <h1 className="font-mono text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] mb-5 text-gray-900 dark:text-white">
            Developer
            <br />
            &amp; Robotics
            <br />
            <span className="text-accent">
              Engineer<span className="animate-blink">_</span>
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-6">{profile.education}</p>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md mb-8">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-accent text-black text-sm font-semibold rounded-full hover:bg-green-300 transition-colors"
            >
              See my work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-sm font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.19.69-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-sm font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="hidden lg:block">
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="browser-chrome">
              <span className="browser-dot bg-red-400" />
              <span className="browser-dot bg-yellow-400" />
              <span className="browser-dot bg-green-400" />
              <span className="ml-3 text-[11px] text-gray-500 font-mono">~/shshank/whoami</span>
            </div>
            <div className="bg-[#0d1117] p-6 font-mono text-sm leading-7">
              {terminalLines.map((line) => (
                <div key={line.label}>
                  <p className="text-gray-500"># {line.label}</p>
                  <p className={line.color}>{line.value}</p>
                  <br />
                </div>
              ))}
              <p className="text-gray-500"># currently_building</p>
              {currentlyBuilding.map((item) => (
                <p key={item} className="text-amber-400">
                  {item}
                </p>
              ))}
              <br />
              <p className="text-gray-500"># status</p>
              <p>
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                <span className="text-accent">Open to collaborate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
