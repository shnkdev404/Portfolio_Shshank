"use client";
import { useEffect, useRef } from "react";

export default function HeroBg() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const x = c.getContext("2d")!;
    const W = c.width, H = c.height;

    x.fillStyle = "#050005";
    x.fillRect(0, 0, W, H);

    // Magenta face glow — left
    const rL = x.createRadialGradient(W*.22,H*.38,10, W*.22,H*.38, W*.4);
    rL.addColorStop(0, "rgba(200,30,120,0.95)");
    rL.addColorStop(0.3, "rgba(160,10,80,0.7)");
    rL.addColorStop(0.7, "rgba(60,0,30,0.4)");
    rL.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = rL; x.fillRect(0,0,W,H);

    // Hair streaks left
    for (let i = 0; i < 20; i++) {
      const y0 = H*0.04 + i*H*0.052;
      x.beginPath();
      x.moveTo(0, y0);
      x.bezierCurveTo(W*.1, y0+H*.04, W*.25, y0-H*.02, W*.32, y0+H*.07);
      x.strokeStyle = `rgba(70,0,50,${0.12 + Math.random()*.2})`;
      x.lineWidth = 6 + Math.random()*14;
      x.stroke();
    }

    // Cyan face glow — right
    const rR = x.createRadialGradient(W*.78,H*.34,10, W*.78,H*.34, W*.42);
    rR.addColorStop(0, "rgba(20,200,220,0.9)");
    rR.addColorStop(0.28, "rgba(10,140,160,0.55)");
    rR.addColorStop(0.6, "rgba(0,55,75,0.35)");
    rR.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = rR; x.fillRect(0,0,W,H);

    // Hair streaks right
    for (let i = 0; i < 18; i++) {
      const y0 = H*0.02 + i*H*0.058;
      x.beginPath();
      x.moveTo(W, y0);
      x.bezierCurveTo(W*.9, y0+H*.05, W*.7, y0-H*.02, W*.63, y0+H*.08);
      x.strokeStyle = `rgba(0,70,90,${0.1 + Math.random()*.22})`;
      x.lineWidth = 7 + Math.random()*16;
      x.stroke();
    }

    // Lip warm glow left
    const lip = x.createRadialGradient(W*.19,H*.55,0, W*.19,H*.55, W*.05);
    lip.addColorStop(0, "rgba(220,60,80,0.5)"); lip.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = lip; x.fillRect(0,0,W,H);

    // Bottom darkening
    const bG = x.createLinearGradient(0,H*.65,0,H);
    bG.addColorStop(0,"rgba(0,0,0,0)"); bG.addColorStop(1,"rgba(0,0,0,0.95)");
    x.fillStyle = bG; x.fillRect(0,0,W,H);
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full" />;
}