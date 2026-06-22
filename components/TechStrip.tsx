import { techStack } from "@/lib/data";

function TechRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex gap-8 items-center shrink-0" aria-hidden={ariaHidden}>
      {techStack.map((tech, i) => (
        <span key={`${tech.label}-${ariaHidden ? "dup" : "orig"}`} className="contents">
          <span className="flex items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <span className="text-base">{tech.emoji}</span> {tech.label}
          </span>
          {i < techStack.length - 1 && <span className="text-gray-300 dark:text-gray-700">·</span>}
        </span>
      ))}
      <span className="mx-6 text-gray-300 dark:text-gray-700">✦</span>
    </div>
  );
}

export default function TechStrip() {
  return (
    <div className="w-full overflow-hidden border-y border-gray-100 dark:border-gray-800 py-4 bg-gray-50/60 dark:bg-[#0d0d0d]/60 backdrop-blur-sm">
      <div className="flex gap-8 w-max animate-scroll-left hover:[animation-play-state:paused]">
        <TechRow />
        <TechRow ariaHidden />
      </div>
    </div>
  );
}
