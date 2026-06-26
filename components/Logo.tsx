import Link from "next/link";

interface LogoProps {
  className?: string;
  scale?: number;
}

export function Logo({ className = "", scale = 1 }: LogoProps) {
  return (
    <div 
      className={`flex flex-col items-start group ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
    >
      <div className="relative font-black text-white leading-none tracking-tighter flex items-start">
        <span className="text-4xl">Adamo</span>
        
        {/* The symbol in the top right corner as requested (attributte_to_logo_right_top.png) */}
        <div className="ml-1 -mt-2 transition-transform group-hover:scale-110 group-hover:rotate-12">
          <img src="/attributte_to_logo_right_top.png" alt="Logo Attribute" className="w-8 h-8 object-contain" />
        </div>
      </div>
      <div className="text-[#f8c02c] font-bold text-xl tracking-[0.25em] leading-none mt-1 uppercase">
        Media
      </div>
    </div>
  );
}
