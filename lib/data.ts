// Centralized content for the portfolio.
// Edit this file to update copy, projects, awards, or links — no JSX required.

export const profile = {
  name: "Shshank Kumar",
  tagline: "Developer & Robotics Engineer",
  greeting: "Hello, world 👋",
  intro: "Hi, I'm Shshank Kumar",
  education: "B.Tech IT · Army Institute of Technology, Pune",
  summary:
    "I bridge software and hardware — building full-stack platforms, flood prediction models, autonomous micromouse bots, and swarm drone systems.",
  location: "Pune, Maharashtra, India",
  email: "kumarshshank75@gmail.com",
  github: "https://github.com/shnkdev404",
  linkedin: "https://linkedin.com/in/shshank-kumar-a639b1373",
  instagram: "https://instagram.com/_mobile.pixels_",
};

export const terminalLines = [
  { label: "whoami", value: "Shshank Kumar", color: "text-accent" },
  { label: "role", value: "Full Stack Dev + Hardware Engineer", color: "text-white" },
  { label: "education", value: "AIT Pune · B.Tech IT · 2nd Year", color: "text-violet-400" },
];

export const currentlyBuilding = ["ZenGrip Micromouse Bot 🤖", "AI Fintech Platform 💸"];

export type TechItem = { label: string; emoji: string };

export const techStack: TechItem[] = [
  { label: "Next.js", emoji: "⚡" },
  { label: "React", emoji: "⚛" },
  { label: "Node.js", emoji: "🟢" },
  { label: "TypeScript", emoji: "🔷" },
  { label: "Tailwind CSS", emoji: "🎨" },
  { label: "Firebase", emoji: "🔥" },
  { label: "Arduino", emoji: "🤖" },
  { label: "ESP32", emoji: "🔌" },
  { label: "Raspberry Pi", emoji: "🫐" },
  { label: "STM32", emoji: "⚙️" },
  { label: "QGIS", emoji: "🗺️" },
  { label: "Git", emoji: "🐙" },
  { label: "Vercel", emoji: "▲" },
  { label: "C / C++", emoji: "©️" },
];

export type Service = {
  emoji: string;
  title: string;
  items: string[];
  accent: "accent" | "violet" | "amber";
};

export const services: Service[] = [
  {
    emoji: "🌐",
    title: "Full-Stack Web",
    accent: "accent",
    items: [
      "Single Page Applications",
      "Next.js & React platforms",
      "Firebase / Vercel backend",
      "Blockchain-secured payments",
    ],
  },
  {
    emoji: "🤖",
    title: "Embedded & Robotics",
    accent: "violet",
    items: [
      "Arduino / STM32 / ESP32",
      "PID control & sensor fusion",
      "Autonomous maze-solving bots",
      "Swarm drone coordination",
    ],
  },
  {
    emoji: "🗺️",
    title: "GIS & Data Modelling",
    accent: "amber",
    items: [
      "QGIS hydrological analysis",
      "Flood path prediction models",
      "Tactical GIS mapping",
      "Spatial data visualisation",
    ],
  },
];

export type Project = {
  emoji: string;
  title: string;
  pathLabel: string;
  description: string;
  tags: { label: string; tone: "accent" | "violet" | "neutral" }[];
  link?: { label: string; href: string };
  badge?: { label: string; tone: "accent" | "violet" | "amber" };
  hoverTone: "accent" | "violet" | "amber";
  gradient: string;
};

export const projects: Project[] = [
  {
    emoji: "🌊",
    title: "Flood Mapping & Prediction",
    pathLabel: "flood-mapping · github.com/shnkdev404",
    description:
      "Hydrological model predicting river flood paths using QGIS spatial analysis and tactical GIS mapping — built for real disaster-preparedness use.",
    tags: [
      { label: "QGIS", tone: "neutral" },
      { label: "Python", tone: "neutral" },
      { label: "GIS", tone: "neutral" },
    ],
    link: { label: "GitHub ↗", href: "https://github.com/shnkdev404/flood-mapping" },
    hoverTone: "accent",
    gradient: "from-blue-950 to-slate-900",
  },
  {
    emoji: "🤖",
    title: "ZenGrip — Micromouse Bot",
    pathLabel: "ZenGrip · competitive robotics",
    description:
      "Autonomous maze-solving robot with Flood Fill path planning and PID-tuned motor control. Built for competitive robotics with sub-millimetre precision.",
    tags: [
      { label: "C++", tone: "violet" },
      { label: "STM32", tone: "violet" },
      { label: "Flood Fill", tone: "neutral" },
      { label: "PID", tone: "neutral" },
    ],
    link: { label: "GitHub ↗", href: "https://github.com/shnkdev404/tof_wala_maze_runner" },
    hoverTone: "violet",
    gradient: "from-violet-950 to-slate-900",
  },
  {
    emoji: "💸",
    title: "AI-Driven Fintech Platform",
    pathLabel: "fintech-platform · Next.js + Firebase",
    description:
      "Full-stack fintech app with AI insights and blockchain-secured payments. Real-time data sync via Firebase, deployed on Vercel.",
    tags: [
      { label: "Next.js", tone: "accent" },
      { label: "Firebase", tone: "accent" },
      { label: "Blockchain", tone: "neutral" },
    ],
    link: { label: "GitHub ↗", href: "https://github.com/shnkdev404/Ai-driven-fintech-platform" },
    hoverTone: "accent",
    gradient: "from-emerald-950 to-slate-900",
  },
  {
    emoji: "🚁",
    title: "Swarm Drone System",
    pathLabel: "swarm-drones · embedded systems",
    description:
      "Coordinated multi-drone system with sensor fusion and real-time inter-drone communication. LiDAR-based autonomous mapping.",
    tags: [
      { label: "ESP32", tone: "violet" },
      { label: "Raspberry Pi", tone: "violet" },
      { label: "LiDAR", tone: "neutral" },
    ],
    link: { label: "GitHub ↗", href: "https://github.com/shnkdev404/swarm-drone-systems" },
    hoverTone: "amber",
    gradient: "from-amber-950 to-slate-900",
  },
];

export type Award = {
  emoji: string;
  badge: string;
  title: string;
  org: string;
  description: string;
  tone: "yellow" | "violet";
};

export const awards: Award[] = [
  {
    emoji: "🏆",
    badge: "Winner",
    title: "BitByBit Hackathon",
    org: "IIT Roorkee",
    description:
      "First place at BitByBit hosted at IIT Roorkee, competing against top teams from colleges across India.",
    tone: "yellow",
  },
  {
    emoji: "🥈",
    badge: "Finalist",
    title: "Avishkar Tournament",
    org: "SPPU University",
    description:
      "Reached the finals of Avishkar — Savitribai Phule Pune University's prestigious inter-college research and innovation competition.",
    tone: "violet",
  },
];

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export const fabItems = [
  { href: "#home", label: "Home", color: "bg-amber-100" },
  { href: "#projects", label: "Work", color: "bg-violet-400" },
  { href: "#achievements", label: "Awards", color: "bg-yellow-400" },
  { href: "#contact", label: "Contact", color: "bg-accent" },
];