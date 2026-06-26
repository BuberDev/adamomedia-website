import Link from "next/link";

const Hashtag = ({ className }: { className?: string }) => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M40 15 L20 85 M80 15 L60 85 M15 35 L85 35 M15 65 L85 65" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CurvedArrow = ({ className }: { className?: string }) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M10 30 Q 50 10 80 60" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M55 60 L 80 60 L 75 35" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-[#141414] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f8c02c]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Decorative elements container */}
        <div className="relative inline-flex flex-col items-center">
          
          {/* Top Left */}
          <div className="absolute -top-16 -left-12 sm:-top-20 sm:-left-24 md:-top-24 md:-left-40 flex items-start gap-1 sm:gap-2">
            <Hashtag className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transform -rotate-12" />
            <CurvedArrow className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mt-2 sm:mt-4" />
          </div>

          {/* Top Right */}
          <div className="absolute -top-16 -right-12 sm:-top-20 sm:-right-24 md:-top-24 md:-right-40 flex items-start gap-1 sm:gap-2">
            <CurvedArrow className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mt-2 sm:mt-4 -scale-x-100" />
            <Hashtag className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transform rotate-12" />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-16 -left-10 sm:bottom-20 sm:-left-20 md:bottom-24 md:-left-32 flex items-end gap-1 sm:gap-2">
            <Hashtag className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transform -rotate-12" />
            <CurvedArrow className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2 sm:mb-4 -scale-y-100" />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-16 -right-10 sm:bottom-20 sm:-right-20 md:bottom-24 md:-right-32 flex items-end gap-1 sm:gap-2">
            <CurvedArrow className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2 sm:mb-4 -scale-x-100 -scale-y-100" />
            <Hashtag className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transform rotate-12" />
          </div>
          
          {/* Main Logo Text in Hero */}
          <div className="flex flex-col items-center relative z-10">
            <div className="relative font-black text-white leading-none tracking-tighter flex items-start">
              <span className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[160px]">Adamo</span>
              {/* Attribute sits inline to the right of the word, aligned to its top */}
              <div className="self-start ml-1 sm:ml-2 mt-1 sm:mt-2 md:mt-3 transition-transform hover:scale-110 hover:rotate-12 flex-shrink-0">
                <img src="/attributte_to_logo_right_top.png" alt="Logo Attribute" className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
            </div>
            <div className="text-[#f8c02c] font-bold text-[24px] sm:text-[36px] md:text-[50px] lg:text-[60px] tracking-[0.25em] sm:tracking-[0.3em] leading-none mt-2 sm:mt-4 uppercase">
              Media
            </div>
          </div>
          
          <Link 
            href="#wspolpraca" 
            className="mt-12 sm:mt-16 group flex items-center gap-2 bg-[#f8c02c] hover:bg-yellow-400 text-[#141414] font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full text-[10px] sm:text-xs md:text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(248,192,44,0.3)] whitespace-nowrap z-10"
          >
            Pomagamy zamienić pasję w dochodowy biznes. <span className="ml-1 sm:ml-2 font-black text-sm sm:text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
          </Link>
          
        </div>

      </div>
    </section>
  );
}
