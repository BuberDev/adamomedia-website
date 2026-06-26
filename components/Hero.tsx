import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#141414] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f8c02c]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* We recreate the aesthetic of the hero image provided but with the correct Adamo Media text */}
        <div className="relative inline-block mb-8">
          
          {/* Decorative Arrows mimicking the image_hero.png */}
          <div className="absolute -top-16 -left-12 lg:-left-24 opacity-60 animate-bounce" style={{ animationDuration: '3s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
          <div className="absolute -top-16 -right-12 lg:-right-24 opacity-60 animate-bounce" style={{ animationDuration: '3.5s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>

          <div className="absolute -bottom-16 -left-12 lg:-left-24 opacity-60 animate-bounce" style={{ animationDuration: '4s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-[135deg]">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
          <div className="absolute -bottom-16 -right-12 lg:-right-24 opacity-60 animate-bounce" style={{ animationDuration: '2.5s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-[135deg]">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-black tracking-tighter text-white leading-none">
            Adamo<span className="text-[#f8c02c]">Media</span>
          </h1>
          <div className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-widest text-[#f8c02c] uppercase">
            Twój Partner
          </div>
        </div>

        <Link 
          href="#wspolpraca" 
          className="mt-12 group flex items-center gap-3 bg-[#f8c02c] hover:bg-yellow-400 text-[#141414] font-bold py-4 px-8 rounded-full text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(248,192,44,0.3)] hover:shadow-[0_0_60px_rgba(248,192,44,0.5)]"
        >
          Pomagamy zamienić pasję w dochodowy biznes
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
        
        {/* Just in case the user meant to literally include the image as a hidden or fallback asset, we can keep a reference or use it behind */}
        <div className="mt-16 w-full max-w-2xl opacity-10 pointer-events-none hidden">
          <Image src="/image_hero.png" alt="Hero Background" width={800} height={400} className="w-full h-auto object-contain" />
        </div>

      </div>
    </section>
  );
}
