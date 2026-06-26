import Link from "next/link";
import { Menu } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo scale={0.7} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            ["Strona główna", "/"],
            ["O nas", "#o-nas"],
            ["Współpraca", "#wspolpraca"],
            ["Historie klientów", "#opinie"],
            ["Blog", "#blog"],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {title}
            </Link>
          ))}
          <Link
            href="#konsultacja"
            className="text-sm font-bold text-white hover:text-[#f8c02c] transition-colors"
          >
            Bezpłatna konsultacja
          </Link>
        </div>

        {/* Social Icons & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-4">
            <Link href="https://facebook.com" className="text-gray-400 hover:text-[#f8c02c] transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-[#f8c02c] transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://youtube.com" className="text-gray-400 hover:text-[#f8c02c] transition-colors">
              <FaYoutube size={20} />
            </Link>
          </div>
          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
