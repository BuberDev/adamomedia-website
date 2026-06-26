import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Przechodzimy przez cały Twój biznes krok po kroku",
    description: "od oferty i cen, po system pracy i zatrudnianie specjalistów.",
  },
  {
    number: "2",
    title: "Budujemy strategię marketingową i sprzedażową",
    description: "dopasowaną do Twojego etapu rozwoju.",
  },
  {
    number: "3",
    title: "Tworzymy skuteczne reklamy i treści wideo",
    description: "które regularnie przyciągają nowych klientów – bez zniżek i codziennego postowania.",
  },
  {
    number: "4",
    title: "Uczymy Cię, jak lepiej sprzedawać i rozwijać biznes",
    description: "żebyś mógł zarabiać więcej, pracując mądrzej – nie więcej.",
  },
];

export function WhatWeDo() {
  return (
    <section id="o-nas" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-[#f8c02c] font-bold text-sm tracking-widest uppercase mb-4 block">
            Czym się zajmujemy?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#141414] tracking-tight">
            Co robimy?
          </h2>
        </div>

        <div className="w-full flex flex-col gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="group bg-white border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 relative">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#f8c02c] to-yellow-300 drop-shadow-sm group-hover:scale-110 transition-transform duration-300 block">
                  {step.number}
                </span>
                <div className="absolute inset-0 bg-[#f8c02c]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#141414] mb-2 group-hover:text-[#f8c02c] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="#case-study" 
          className="group flex items-center gap-2 bg-[#f8c02c] hover:bg-yellow-400 text-[#141414] font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(248,192,44,0.3)]"
        >
          Zobacz case study
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
