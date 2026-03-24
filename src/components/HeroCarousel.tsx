import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "@/assets/hero.png";
import hero1 from "@/assets/hero1.png";

const slides = [
  {
    src: hero,
    alt: "Dr. Prashant – ENT, Vertigo & Allergy Specialist",
  },
  {
    src: hero1,
    alt: "Dr. Prashant – Expert ENT Care",
  },
];

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.035,
    filter: "blur(8px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 6, ease: "linear" },
      filter: { duration: 0.8, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.012,
    filter: "blur(6px)",
    transition: {
      opacity: { duration: 0.95, ease: "easeInOut" },
      scale: { duration: 0.95, ease: "easeInOut" },
      filter: { duration: 0.7, ease: "easeInOut" },
    },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const HeroCarousel = () => {
  const [[current], setCurrent] = useState([0, 1]);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const goTo = (index: number) => {
    setAutoPlay(false);
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white sm:bg-foreground sm:h-[min(85svh,960px)]"
      style={{ minHeight: 0 }}
    >
      {/* Accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[5px] z-20 gradient-primary"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />

      {/* ── CAROUSEL ── */}
      <div className="relative sm:absolute sm:inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            loading="eager"
            className="sm:absolute sm:inset-0 w-full sm:h-full object-contain object-center sm:object-cover sm:object-[75%_center] block"
            style={{ willChange: "opacity, transform" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay — desktop only */}
      <motion.div
        className="hidden sm:block absolute inset-0 bg-black/5 z-10"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
      />

      {/* Bottom gradient — desktop only */}
      <div
        className="hidden sm:block absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{
          background: "linear-gradient(to top, rgba(4,13,20,0.80), transparent)",
        }}
      />

      {/* ── DOT INDICATORS ── */}
      <div className="hidden sm:flex sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 justify-center z-20 gap-2.5 items-center py-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center focus:outline-none"
          >
            <motion.span
              className="block rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: i === current ? "#1e40af" : "#94a3b8",
              }}
              animate={{
                width: i === current ? 28 : 8,
                height: 8,
                opacity: i === current ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />
            {i === current && (
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary, #0ea5e9), var(--color-accent, #38bdf8))",
                }}
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── SLIDE COUNTER (desktop only) ── */}
      <motion.div
        key={current}
        className="hidden sm:flex absolute top-5 right-7 z-20 items-end gap-1"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-white/90 font-semibold text-lg leading-none tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-white/40 text-sm leading-none mb-0.5">
          / {String(slides.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ── PREV / NEXT ARROWS (desktop only) ── */}
      <div className="hidden sm:flex absolute inset-y-0 left-4 right-4 z-20 items-center justify-between pointer-events-none">
        {(["prev", "next"] as const).map((dir) => (
          <motion.button
            key={dir}
            onClick={() =>
              goTo(
                dir === "next"
                  ? (current + 1) % slides.length
                  : (current - 1 + slides.length) % slides.length
              )
            }
            className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors focus:outline-none"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              style={{
                transform: dir === "prev" ? "rotate(180deg)" : undefined,
              }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        ))}
      </div>

      {/* ── AUTOPLAY PROGRESS BAR ── */}
      {autoPlay && (
        <motion.div
          key={`progress-${current}`}
          className="hidden sm:block absolute bottom-0 left-0 h-[3px] z-20"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary, #0ea5e9), var(--color-accent, #38bdf8))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      )}
    </section>
  );
};

export default HeroCarousel;
