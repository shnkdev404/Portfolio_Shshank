"use client";

import { awards } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

const toneClasses: Record<string, { card: string; badge: string; org: string }> = {
  yellow: {
    card: "border-yellow-200 dark:border-yellow-800/40 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10",
    badge: "bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 border-yellow-400/30",
    org: "text-yellow-600 dark:text-yellow-400",
  },
  violet: {
    card: "border-violet-200 dark:border-violet-800/40 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10",
    badge: "bg-violet-400/20 text-violet-700 dark:text-violet-300 border-violet-400/30",
    org: "text-violet-500 dark:text-violet-400",
  },
};

export default function Achievements() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="achievements" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-gray-100 dark:border-gray-800">
      <div ref={revealRef} className="reveal">
        <p className="section-label">Recognition</p>
        <h2 className="section-heading mb-12">Hackathons &amp; Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {awards.map((award) => {
            const tone = toneClasses[award.tone];
            return (
              <div
                key={award.title}
                className={`award-card relative overflow-hidden rounded-2xl border p-6 ${tone.card}`}
              >
                <div className="absolute -top-4 -right-4 text-7xl opacity-10 select-none">{award.emoji}</div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{award.emoji}</span>
                  <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full border uppercase tracking-widest ${tone.badge}`}>
                    {award.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                <p className={`text-sm font-mono mb-3 ${tone.org}`}>{award.org}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{award.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
