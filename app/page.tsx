import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Cooperation } from "@/components/Cooperation";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Cooperation />
      <Testimonials />
      <Footer />
    </main>
  );
}
