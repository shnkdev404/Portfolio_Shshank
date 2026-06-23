"use client";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";

const sectionIds = navItems.map((i) => i.href.replace("#", ""));

export default function Navbar() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center h-[52px] px-8">
      <Link href="#home" className="font-mono text-sm font-bold tracking-[0.05em] text-white">
        Shshank<sup className="text-white/40 text-[8px]">©</sup>
      </Link>

      <ul className="hidden sm:flex items-center gap-6 list-none m-0 p-0">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[12px] tracking-[0.04em] transition-colors ${
                  active === id
                    ? "text-white underline underline-offset-4"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* FIXED SECTION BELOW */}
      <a
        href="#contact"
        className="flex items-center gap-2 bg-white text-black text-[12px] font-bold px-5 py-2 rounded-full hover:bg-accent transition-colors"
      >
        Let&apos;s Talk
        <span className="w-[22px] h-[22px] rounded-full bg-black flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="3,2 9,6 3,10"/>
          </svg>
        </span>
      </a>
    </nav>
  );
}