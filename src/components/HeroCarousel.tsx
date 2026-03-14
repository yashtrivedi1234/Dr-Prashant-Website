import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    img: hero1,
    title: "Advanced ENT & Allergy Care",
    subtitle: "Expert clinical diagnosis and treatments by an Ex-SR PGIMER specialist.",
  },
  {
    img: hero2,
    title: "Vertigo & Sleep Solutions",
    subtitle: "State-of-the-art diagnostics including VNG and Drug-Induced Sleep Endoscopy.",
  },
  {
    img: hero3,
    title: "Surgical Excellence",
    subtitle: "Over 5 years of dedicated focus on complex ear surgeries and head & neck oncology.",
  },
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
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 75vw, 92vh)" }}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          {/* Background image */}
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Gradient overlay — stronger on small screens for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20 sm:from-foreground/70 sm:via-foreground/40 sm:to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div
              className={`
                w-full max-w-2xl
                px-5 sm:px-10 md:px-14 lg:px-20
                transition-all duration-700
                ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
              `}
            >
              {/* Badge */}
              <motion.div
                key={`badge-${i}-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={i === current ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wider uppercase">
                  Welcome to Our Clinic
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                key={`title-${i}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={i === current ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="font-heading font-bold text-primary-foreground drop-shadow-lg leading-tight mb-3 sm:mb-4
                  text-2xl          /* ~320px */
                  xs:text-3xl       /* ~375px */
                  sm:text-4xl       /* 640px  */
                  md:text-5xl       /* 768px  */
                  lg:text-6xl       /* 1024px */
                "
              >
                {s.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                key={`sub-${i}-${current}`}
                initial={{ opacity: 0, y: 12 }}
                animate={i === current ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-primary-foreground/90 drop-shadow max-w-md sm:max-w-xl mb-6 sm:mb-8
                  text-sm
                  sm:text-base
                  md:text-lg
                  lg:text-xl
                "
              >
                {s.subtitle}
              </motion.p>

              {/* CTA */}
              <motion.div
                key={`cta-${i}-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={i === current ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="inline-block gradient-primary text-primary-foreground
                    font-bold rounded-full shadow-lg
                    hover:opacity-90 active:scale-95 transition-all
                    px-6 py-3 text-sm
                    sm:px-8 sm:py-3.5 sm:text-base
                  "
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next — hidden on very small screens, shown from sm up */}
      <button
        onClick={prev}
        className="
          hidden sm:flex
          absolute left-3 sm:left-4 top-1/2 -translate-y-1/2
          items-center justify-center
          bg-primary-foreground/20 backdrop-blur-md
          hover:bg-primary-foreground/40
          rounded-full p-2.5 sm:p-3 transition
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        "
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-primary-foreground" size={22} />
      </button>

      <button
        onClick={next}
        className="
          hidden sm:flex
          absolute right-3 sm:right-4 top-1/2 -translate-y-1/2
          items-center justify-center
          bg-primary-foreground/20 backdrop-blur-md
          hover:bg-primary-foreground/40
          rounded-full p-2.5 sm:p-3 transition
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        "
        aria-label="Next slide"
      >
        <ChevronRight className="text-primary-foreground" size={22} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-8 sm:w-10"
                : "bg-primary-foreground/50 w-2 sm:w-2.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;