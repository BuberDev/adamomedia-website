import { Handshake, Target, Users, Zap } from "lucide-react";

const services = [
  {
    title: "Konsultacja 1:1",
    icon: Handshake,
  },
  {
    title: "Metoda 10K",
    icon: Target,
  },
  {
    title: "Program mentoringowy",
    icon: Users,
  },
  {
    title: "Akcelerator dla początkujących",
    icon: Zap,
  },
];

export function Cooperation() {
  return (
    <section id="wspolpraca" className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f8c02c]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#f8c02c] font-bold text-sm tracking-widest uppercase mb-4 block">
            Współpraca
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Jak możemy współpracować?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-6 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(248,192,44,0.15)]"
              >
                <div className="w-20 h-20 rounded-full bg-yellow-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f8c02c] transition-all duration-300">
                  <Icon className="w-10 h-10 text-[#f8c02c] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#141414] leading-tight">
                  {service.title}
                </h3>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
