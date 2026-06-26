import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[#141414] pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="font-black text-3xl tracking-tighter text-white transition-transform group-hover:scale-105">
                Adamo<span className="text-[#f8c02c]">Media</span>
              </div>
              <div className="w-8 h-8 bg-[#f8c02c] rounded-md transform rotate-12 flex items-center justify-center -ml-1 transition-transform group-hover:rotate-45">
                <span className="text-[#141414] font-bold text-sm">%</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
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
            <a href="mailto:kontakt@adamomedia.pl" className="flex items-center gap-3 text-gray-400 hover:text-[#f8c02c] transition-colors text-sm font-medium group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              kontakt@adamomedia.pl
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
            <div className="w-full h-40 bg-gray-800 rounded-2xl overflow-hidden border border-white/10 relative group">
              {/* Premium Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-[#f8c02c] transition-colors">
                <MapPin size={32} className="mb-2 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Otwórz w mapach</span>
              </div>
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
