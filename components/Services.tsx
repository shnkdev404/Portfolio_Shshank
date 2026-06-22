"use client";

import { services } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

// Written out as full literal strings (not built with template literals) so
// Tailwind's JIT scanner can find and generate each class.
const accentClasses: Record<string, string> = {
  accent: "hover:border-accent dark:hover:border-accent hover:bg-accent/[0.03]",
  violet: "hover:border-violet-400 dark:hover:border-violet-400 hover:bg-violet-400/[0.03]",
  amber: "hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400/[0.03]",
};

export default function Services() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      <div ref={revealRef} className="reveal">
        <p className="section-label">Capabilities</p>
        <h2 className="section-heading mb-12">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card border border-gray-200 dark:border-gray-800 rounded-2xl p-6 ${accentClasses[service.accent]}`}
            >
              <div className="text-2xl mb-4">{service.emoji}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                {service.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
