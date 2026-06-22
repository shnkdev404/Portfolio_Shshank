import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingNav />
      <Hero />
      <TechStrip />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
