"use client";
import dynamic from "next/dynamic";
import { profile } from "@/lib/data";

const HeroBg = dynamic(() => import("./HeroBg"), { ssr: false });
const RibbonCanvas = dynamic(() => import("./RibbonCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-[#050005] overflow-hidden">

      {/* Painted dark photo background */}
      <HeroBg />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/50 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none" />

      {/* Eyebrow */}
      <p className="absolute top-20 left-8 z-30 font-mono text-[9px] tracking-[0.22em] uppercase text-white/40">
        POWERED BY CURIOSITY
      </p>

      {/* Giant headline — behind the knot */}
      <div className="absolute bottom-44 left-0 z-[4] leading-none overflow-hidden">
              <span className="block font-black text-[clamp(72px,13vw,130px)] leading-[0.88] tracking-[-0.03em] uppercase whitespace-nowrap pl-2 text-white">
          Shsh<span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent">ank</span>
        </span>
        <span className="block font-black text-[clamp(72px,13vw,130px)] leading-[0.88] tracking-[-0.03em] uppercase whitespace-nowrap pl-2">
          <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">Kum</span>
          <span className="text-white">ar</span>
        </span>

        <span className="block font-black text-[clamp(13vw,130px)] leading-[0.88] tracking-[-0.03em] uppercase whitespace-nowrap pl-2 text-white">
          DEVELO<span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent">PER+</span>
                    <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">ROBOT</span>
          <span className="text-white">ICS_</span>
        </span>

      </div>
      

      {/* 3D knot — overlapping the headline text */}
      <div className="absolute z-[10] pointer-events-none"
           style={{ bottom: "140px", left: "calc(42% - 140px)" }}>
        <RibbonCanvas width={280} height={280} cameraZ={3.6} speed={1} p={2} q={3} />
      </div>

      {/* Body copy — bottom right */}
      <div className="absolute bottom-24 right-8 z-30 max-w-[260px] text-right">
        <p className="text-[12px] leading-[1.85] text-white/60">
          {profile.summary}
        </p>
      </div>

      {/* Scroll hint */}
      <p className="absolute bottom-7 right-8 z-30 font-mono text-[9px] tracking-[0.18em] text-white/25">
        ( Scroll down )
      </p>

    </section>
  );
}