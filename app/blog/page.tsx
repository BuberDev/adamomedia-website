import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Jak zbudować skalowalną ofertę w branży dietetycznej?",
    category: "Biznes",
    date: "24 Czerwca 2026",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Dowiedz się, jak przestać sprzedawać pojedyncze plany dietetyczne i zacząć budować pakiety premium, które przynoszą stały dochód.",
  },
  {
    id: 2,
    title: "Reklama na Facebooku czy Instagramie? Gdzie szukać klientów",
    category: "Marketing",
    date: "18 Czerwca 2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Analiza dwóch najpopularniejszych platform społecznościowych w kontekście pozyskiwania pacjentów do gabinetu.",
  },
  {
    id: 3,
    title: "Skuteczna sprzedaż bez bycia sprzedawcą",
    category: "Sprzedaż",
    date: "12 Czerwca 2026",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Jak prowadzić rozmowy z potencjalnymi pacjentami, aby sami pytali o możliwość współpracy? Poznaj nasze sekrety.",
  },
  {
    id: 4,
    title: "Personal Branding dietetyka w 2026 roku",
    category: "Wizerunek",
    date: "05 Czerwca 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Wyróżnij się z tłumu i stwórz markę osobistą, która będzie Twoją największą przewagą konkurencyjną.",
  },
  {
    id: 5,
    title: "Jak zautomatyzować pozyskiwanie klientów?",
    category: "Automatyzacje",
    date: "28 Maja 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Narzędzia i systemy, które pozwolą Ci zaoszczędzić kilkanaście godzin tygodniowo i skupić się na merytoryce.",
  },
  {
    id: 6,
    title: "Cennik, który filtruje idealnych pacjentów",
    category: "Finanse",
    date: "20 Maja 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Dlaczego taniej nie zawsze znaczy lepiej? O tym jak odpowiednia wycena Twoich usług przyciągnie zmotywowanych klientów.",
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFA] overflow-x-hidden scroll-smooth">
      <Navbar />
      
      {/* Premium Header */}
      <section className="relative pt-32 pb-20 bg-[#141414] overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f8c02c]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Baza <span className="text-[#f8c02c]">wiedzy.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Praktyczne porady, analizy i strategie, które pomogą Ci rozwijać biznes dietetyczny szybciej i mądrzej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Blog Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-[#141414] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-gray-400 text-sm font-medium mb-3 block">
                    {post.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#141414] mb-4 group-hover:text-[#f8c02c] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[#141414] font-bold text-sm uppercase tracking-wider group-hover:text-[#f8c02c] transition-colors">
                      Czytaj dalej
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
