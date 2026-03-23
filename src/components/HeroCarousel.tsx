import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/b1.jpeg";
import hero2 from "@/assets/b2.jpeg";
import hero3 from "@/assets/b3.jpeg";

/* ─── Slide data ─────────────────────────────────────────────── */
const slides = [
  {
    img: hero1,
    tag: "ENT · Allergy · Immunotherapy",
    title: ["Advanced ENT", "&", "Allergy Care"],
    subtitle:
      "Expert clinical diagnosis and treatments by an Ex-SR PGIMER specialist with 14+ years of excellence.",
  },
  {
    img: hero2,
    tag: "Vertigo · Balance · Sleep",
    title: ["Vertigo &", "Sleep", "Solutions"],
    subtitle:
      "State-of-the-art diagnostics including VNG and Drug-Induced Sleep Endoscopy for lasting relief.",
  },
  {
    img: hero3,
    tag: "Surgery · Oncology · Excellence",
    title: ["Surgical", "Excellence", "Redefined"],
    subtitle:
      "Over 5 years focused on complex ear surgeries, head & neck oncology, and advanced microsurgery.",
  },
];

/* ─── Animation helpers ──────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const INTERVAL = 6000;

/* ─── Progress Bar ───────────────────────────────────────────── */
const ProgressBar = ({ active }) => (
  <div className="flex-1 h-[2px] rounded-full bg-white/20 overflow-hidden">
    {active && (
      <motion.div
        key={active}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        className="h-full bg-white rounded-full origin-left"
      />
    )}
  </div>
);

/* ─── Floating Particle ──────────────────────────────────────── */
const Particle = ({ x, y, size, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0], y: [-10, -50] }}
    transition={{
      delay,
      duration: 4,
      repeat: Infinity,
      repeatDelay: Math.random() * 4 + 2,
    }}
    className="absolute rounded-full bg-white/50 pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
  />
);

const particles = Array.from({ length: 12 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
}));

/* ─── Main Component ─────────────────────────────────────────── */
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const go = useCallback(
    (idx) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent((idx + slides.length) % slides.length);
    },
    [current]
  );

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL);
  }, [next]);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const handleNav = (fn) => {
    fn();
    resetTimer();
  };

  const slide = slides[current];

  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full overflow-hidden bg-foreground"
        style={{
          height:
            typeof window !== "undefined" && window.innerWidth < 640
              ? "70svh"
              : "min(85svh, 960px)",
          minHeight:
            typeof window !== "undefined" && window.innerWidth < 640
              ? 420
              : 460,
        }}
      >
        {/* Accent bar */}
        <motion.div
          key={`bar-${current}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute left-0 top-0 bottom-0 w-[5px] z-10 origin-top gradient-primary"
        />

        {/* Background */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`bg-${current}`}
            custom={direction}
            initial={{
              x: direction > 0 ? "6%" : "-6%",
              opacity: 0,
              scale: 1.06,
            }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            exit={{
              x: direction > 0 ? "-4%" : "4%",
              opacity: 0,
            }}
            transition={{ duration: 1.1, ease }}
            className="absolute inset-0"
          >
            <img
              src={slide.img}
              alt={slide.title.join(" ")}
              loading={current === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover object-[center_top] sm:object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 sm:bg-black/10" />

            <div
              className="absolute bottom-0 left-0 right-0 h-60"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,13,20,0.75), transparent)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Particles (hidden on mobile) */}
        <div className="hidden sm:block">
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-9 right-10 z-20 hidden sm:flex items-baseline gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-heading text-5xl font-semibold text-white/90 leading-none tabular-nums"
            >
              0{current + 1}
            </motion.span>
          </AnimatePresence>
          <span className="text-base text-white/35">/</span>
          <span className="text-base text-white/35">
            0{slides.length}
          </span>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-2 sm:bottom-0 left-0 right-0 z-20 flex items-center gap-3 sm:gap-5 px-3 sm:px-8 lg:px-[clamp(24px,7vw,120px)] pb-3 sm:pb-6 pt-3 sm:pt-4">
          <div className="flex flex-1 gap-2 items-center">
            {slides.map((_, i) => (
              <ProgressBar key={`${i}-${current}`} active={i === current} />
            ))}
          </div>

          <button
            onClick={() => handleNav(prev)}
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-white/[0.18]"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => handleNav(next)}
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-white/[0.18]"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroCarousel;