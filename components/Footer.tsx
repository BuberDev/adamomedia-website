import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#141414] pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 items-start">
            <Link href="/">
              <Logo scale={0.8} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Pomagamy zamienić pasję w dochodowy biznes. Zbuduj z nami silną markę i zacznij docierać do idealnych klientów.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Szybkie Linki:</h4>
            {[
              ["Strona główna", "/"],
              ["Współpraca", "#wspolpraca"],
              ["Kontakt", "#kontakt"],
              ["Polityka prywatności", "/polityka-prywatnosci"],
            ].map(([title, url]) => (
              <Link key={title} href={url} className="text-gray-400 hover:text-[#f8c02c] transition-colors text-sm font-medium w-fit">
                {title}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Informacje Kontaktowe:</h4>
            
            <a href="tel:+48517401129" className="flex items-center gap-3 text-gray-400 hover:text-[#f8c02c] transition-colors text-sm font-medium group">
              <Phone size={16} className="group-hover:scale-110 transition-transform" />
              +48 517 401 129
            </a>
            <a href="mailto:adamo@adamo.media" className="flex items-center gap-3 text-gray-400 hover:text-[#f8c02c] transition-colors text-sm font-medium group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              adamo@adamo.media
            </a>
            
            <div className="flex items-center gap-4 mt-2">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f8c02c] hover:text-[#141414] transition-all group">
                <FaFacebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f8c02c] hover:text-[#141414] transition-all group">
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Map / Location */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-full min-h-[200px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5186064506265!2d20.999718476295874!3d52.23485605735165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1717615024103!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase text-center">
            © COPYRIGHT {new Date().getFullYear()} ADAMO MEDIA | Wszelkie prawa zastrzeżone
          </p>
        </div>

      </div>
    </footer>
  );
}
