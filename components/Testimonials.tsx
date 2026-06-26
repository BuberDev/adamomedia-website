import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Imię i nazwisko",
    role: "Dietetyk Kliniczny",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio mattis, fermentum turpis non, tristique eros.",
  },
  {
    name: "Imię i nazwisko",
    role: "Właściciel Gabinetu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio mattis, fermentum turpis non, tristique eros.",
  },
  {
    name: "Imię i nazwisko",
    role: "Trener Personalny",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id odio mattis, fermentum turpis non, tristique eros.",
  },
];

export function Testimonials() {
  return (
    <section id="opinie" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#f8c02c] font-bold text-sm tracking-widest uppercase mb-4 block">
            Co mówią o nas klienci?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#141414] tracking-tight">
            Opinie klientów
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-3xl p-8 pt-12 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* Decorative Quote mark */}
              <div className="absolute -top-6 right-8 w-14 h-14 bg-[#f8c02c] rounded-b-2xl rounded-tr-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-12 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white fill-white" />
              </div>
              
              <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center font-bold text-gray-400 text-xl overflow-hidden border-2 border-white shadow-sm">
                {/* Fallback avatar */}
                {testimonial.name.charAt(0)}
              </div>
              
              <h3 className="text-xl font-bold text-[#141414] mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wide">
                {testimonial.role}
              </p>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#f8c02c] fill-[#f8c02c]" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
