"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|;:,.<>?/~`=-".split("");
const COLORS = ["#8b5cf6", "#a78bfa", "#64748b", "#cbd5e1", "#4c1d95", "#334155"];
const FONT_SIZE = 16;

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);
  themeRef.current = resolvedTheme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops: number[] = [];
    let columns = 0;
    let animationId: number;
    let lastTime = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / FONT_SIZE) + 1;
      drops = new Array(columns).fill(0).map(() => Math.random() * canvas!.height);
    }

    function draw(time: number) {
      animationId = requestAnimationFrame(draw);
      // Throttle to roughly the original 35ms cadence.
      if (time - lastTime < 35) return;
      lastTime = time;

      const isDark = themeRef.current === "dark";
      ctx!.fillStyle = isDark ? "rgba(15, 23, 42, 0.1)" : "rgba(255, 255, 255, 0.1)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.font = FONT_SIZE + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx!.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)];
        ctx!.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full opacity-25 dark:opacity-40 transition-opacity duration-300"
    />
  );
}
