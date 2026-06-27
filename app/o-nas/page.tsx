import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatWeDo } from "@/components/WhatWeDo";
import * as motion from "framer-motion/client";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden scroll-smooth">
      <Navbar />
      
      {/* Premium Header */}
      <section className="relative pt-32 pb-20 bg-[#141414] overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f8c02c]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Poznajmy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8c02c] to-yellow-200">się.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Jesteśmy zespołem ekspertów, który z pasją i zaangażowaniem pomaga zamieniać wizje w dochodowy biznes. Naszym celem jest Twój rozwój.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <WhatWeDo />
      
      <Footer />
    </main>
  );
}
