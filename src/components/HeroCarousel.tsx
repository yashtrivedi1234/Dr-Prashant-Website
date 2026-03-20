import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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

const wordVariants = {
  hidden: { opacity: 0, y: 40, skewY: 4 },
  visible: (i) => ({
    opacity: 1, y: 0, skewY: 0,
    transition: { delay: 0.25 + i * 0.1, duration: 0.75, ease },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
});

/* ─── Constants ──────────────────────────────────────────────── */
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
    transition={{ delay, duration: 4, repeat: Infinity, repeatDelay: Math.random() * 4 + 2 }}
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

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent((idx + slides.length) % slides.length);
  }, [current]);

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

  const handleNav = (fn) => { fn(); resetTimer(); };

  const slide = slides[current];

  return (
    <>
      {/* One-time keyframe only — no layout CSS */}
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full overflow-hidden bg-foreground"
        style={{ height: "min(85svh, 960px)", minHeight: 460 }}
      >
        {/* ── Accent bar (left edge) ── */}
        <motion.div
          key={`bar-${current}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute left-0 top-0 bottom-0 w-[5px] z-10 origin-top gradient-primary"
        />

        {/* ── Background image slides ── */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`bg-${current}`}
            custom={direction}
            initial={{ x: direction > 0 ? "6%" : "-6%", opacity: 0, scale: 1.06 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? "-4%" : "4%", opacity: 0 }}
            transition={{ duration: 1.1, ease }}
            className="absolute inset-0"
          >
            <img
              src={slide.img}
              alt={slide.title.join(" ")}
              loading={current === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover object-center"
            />
            {/* Layered overlays */}
            <div
              className="absolute inset-0"
             
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-60"
              style={{ background: "linear-gradient(to top, rgba(4,13,20,0.75), transparent)" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Floating particles ── */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* ── Slide counter (top-right) ── */}
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
          <span className="text-base text-white/35">0{slides.length}</span>
        </div>

      
   
      
        {/* ── Bottom control bar ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center gap-3 sm:gap-5 px-4 sm:px-8 lg:px-[clamp(24px,7vw,120px)] pb-4 sm:pb-6 pt-4"
        >
          {/* Progress segments */}
          <div className="flex flex-1 gap-2 items-center">
            {slides.map((_, i) => (
              <ProgressBar key={`${i}-${current}`} active={i === current} />
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => handleNav(prev)}
            aria-label="Previous"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/[0.06]
                       backdrop-blur-md text-white flex items-center justify-center shrink-0
                       transition-all duration-200 hover:bg-white/[0.18] hover:border-white/45 hover:scale-105
                       active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <button
            onClick={() => handleNav(next)}
            aria-label="Next"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/[0.06]
                       backdrop-blur-md text-white flex items-center justify-center shrink-0
                       transition-all duration-200 hover:bg-white/[0.18] hover:border-white/45 hover:scale-105
                       active:scale-95 cursor-pointer"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroCarousel;
