"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Blokada scrollowania strony, gdy mobilne menu jest otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Zamknij menu przy zmianie szerokości ekranu na desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    ["Strona główna", "/"],
    ["O nas", "/o-nas"],
    ["Współpraca", "/wspolpraca"],
    ["Historie klientów", "/historie-klientow"],
    ["Blog", "/blog"],
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#141414]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10 relative" onClick={() => setIsOpen(false)}>
            <Logo scale={0.7} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(([title, url]) => (
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

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center gap-4 z-10 relative">
            <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link key={label} href={href} target="_blank" aria-label={label} className="text-gray-400 hover:text-[#f8c02c] transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
            <button 
              className="lg:hidden text-white p-2 -mr-2 transition-transform active:scale-95"
              onClick={toggleMenu}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[9997] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        style={{ top: "80px" }}
        aria-hidden="true"
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-[80px] right-0 bottom-0 z-[9998] w-[80%] max-w-sm bg-[#1a1a1a]/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 overflow-y-auto">
          {navLinks.map(([title, url], i) => (
            <Link
              key={title}
              href={url}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-200 hover:text-[#f8c02c] transition-all duration-300 ease-out"
              style={{
                transitionDelay: isOpen ? `${100 + i * 50}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {title}
            </Link>
          ))}
          <Link
            href="#konsultacja"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[#f8c02c] hover:text-white transition-all duration-300 ease-out mt-2"
            style={{
              transitionDelay: isOpen ? `${100 + navLinks.length * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            Bezpłatna konsultacja
          </Link>

          {/* Mobile Social Links */}
          <div 
            className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10 md:hidden transition-all duration-300 ease-out"
            style={{
              transitionDelay: isOpen ? `${100 + (navLinks.length + 1) * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target="_blank" aria-label={label} className="text-gray-400 hover:text-[#f8c02c] transition-colors">
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
