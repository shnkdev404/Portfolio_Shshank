"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";

const sectionIds = navItems.map((i) => i.href.replace("#", ""));

export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5">
      {/* Main nav row */}
      <div className="flex justify-between items-center h-[52px] px-8">
        {/* SK favicon logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <div
            style={{
              width: 32,
              height: 32,
              background: "#0a0a0a",
              border: "1.5px solid #34d399",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 13,
              color: "#34d399",
              letterSpacing: "0.02em",
            }}
          >
            SK
          </div>
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

        {/* Right side: theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black text-[12px] font-bold px-5 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Let&apos;s Talk
            <span className="w-[22px] h-[22px] rounded-full bg-black flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="3,2 9,6 3,10" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div
          className="h-full bg-accent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}