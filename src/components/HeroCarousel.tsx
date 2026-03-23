import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "@/assets/hero.png";
import hero1 from "@/assets/hero1.png";
import heroMobile from "@/assets/prashant dr.jpeg";

const desktopSlides = [
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
    scale: 1.06,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 1.0, ease: "easeInOut" },
      scale: { duration: 1.2, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      opacity: { duration: 0.8, ease: "easeInOut" },
      scale: { duration: 0.8 },
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
  const [[current, direction], setCurrent] = useState([0, 1]);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance every 5s
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % desktopSlides.length, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const goTo = (index: number) => {
    setAutoPlay(false);
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
    // Resume autoplay after manual interaction
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground"
      style={{
        height: "min(85svh, 960px)",
        minHeight: 460,
      }}
    >
      {/* Accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[5px] z-20 gradient-primary"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />

      {/* ── DESKTOP CAROUSEL ── */}
      <div className="hidden sm:block absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={current}
            src={desktopSlides[current].src}
            alt={desktopSlides[current].alt}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
            style={{ willChange: "opacity, transform" }}
          />
        </AnimatePresence>

        {/* Subtle ken-burns shimmer on current slide */}
        <motion.div
          key={`shimmer-${current}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 5.5, ease: "linear" }}
        />
      </div>

      {/* ── MOBILE IMAGE ── */}
      <motion.img
        src={heroMobile}
        alt="Dr. Prashant – ENT, Vertigo & Allergy Specialist"
        loading="eager"
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-center"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/10 sm:bg-black/5 z-10"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(4,13,20,0.80), transparent)",
        }}
      />

      {/* ── DOT INDICATORS (desktop only) ── */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2.5 items-center">
        {desktopSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center focus:outline-none group"
          >
            <motion.span
              className="block rounded-full bg-white/40 backdrop-blur-sm"
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

      {/* ── SLIDE COUNTER (desktop, top-right) ── */}
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
          / {String(desktopSlides.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ── PREV / NEXT ARROWS (desktop) ── */}
      <div className="hidden sm:flex absolute inset-y-0 left-4 right-4 z-20 items-center justify-between pointer-events-none">
        {(["prev", "next"] as const).map((dir) => (
          <motion.button
            key={dir}
            onClick={() =>
              goTo(
                dir === "next"
                  ? (current + 1) % desktopSlides.length
                  : (current - 1 + desktopSlides.length) %
                      desktopSlides.length
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

      {/* ── AUTOPLAY PROGRESS BAR (desktop) ── */}
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