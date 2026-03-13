import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { img: hero1, title: "Trusted Homeopathy Care", subtitle: "Healing naturally, one patient at a time" },
  { img: hero2, title: "Compassionate Treatment", subtitle: "Personalized care for you and your family" },
  { img: hero3, title: "Natural Remedies", subtitle: "Harnessing the power of nature for holistic health" },
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
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className={`transition-all duration-700 ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
                {s.title}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
                {s.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm hover:bg-background/50 rounded-full p-2 transition" aria-label="Previous">
        <ChevronLeft className="text-primary-foreground" size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm hover:bg-background/50 rounded-full p-2 transition" aria-label="Next">
        <ChevronRight className="text-primary-foreground" size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-primary-foreground/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
