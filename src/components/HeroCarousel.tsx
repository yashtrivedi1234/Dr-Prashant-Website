import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

import { Link } from "react-router-dom";

const slides = [
  { img: hero1, title: "Advanced ENT & Allergy Care", subtitle: "Expert clinical diagnosis and treatments by an Ex-SR PGIMER specialist." },
  { img: hero2, title: "Vertigo & Sleep Solutions", subtitle: "State-of-the-art diagnostics including VNG and Drug-Induced Sleep Endoscopy." },
  { img: hero3, title: "Surgical Excellence", subtitle: "Over 5 years of dedicated focus on complex ear surgeries and head & neck oncology." },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-4 md:px-16">
            <div className={`max-w-2xl transition-all duration-700 ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <motion.div
                key={`badge-${i}-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={i === current ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                  Welcome to Our Clinic
                </span>
              </motion.div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg leading-tight">
                {s.title}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl drop-shadow mb-8">
                {s.subtitle}
              </p>
              <Link to="/contact" className="inline-block gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-md hover:bg-primary-foreground/40 rounded-full p-3 transition" aria-label="Previous">
        <ChevronLeft className="text-primary-foreground" size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-md hover:bg-primary-foreground/40 rounded-full p-3 transition" aria-label="Next">
        <ChevronRight className="text-primary-foreground" size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-10" : "bg-primary-foreground/50 w-2.5"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;