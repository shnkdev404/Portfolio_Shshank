"use client";

import Link from "next/link";
import { navItems } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-[60px]">
          <Link href="#home" className="font-mono text-base font-bold tracking-widest text-gray-900 dark:text-white">
            SK<span className="text-accent">.</span>
          </Link>
          <ul className="hidden sm:flex items-center gap-8 m-0 p-0 list-none">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${active === id ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
