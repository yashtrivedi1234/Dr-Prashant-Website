import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.webp";
import heroSlide2 from "@/assets/hero-slide-2.webp";

const slides = [
  {
    src: heroSlide1,
    alt: "Dr. Prashant – ENT, Vertigo & Allergy Specialist",
  },
  {
    src: heroSlide2,
    alt: "Dr. Prashant – Expert ENT Care",
  },
];

const INTERVAL_MS = 5000;
const FADE_MS = 0.9;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  // Preload + decode every slide so swaps never hitch
  useEffect(() => {
    let cancelled = false;

    Promise.all(
      slides.map(
        (slide) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = slide.src;
            const done = () => resolve();
            if (typeof img.decode === "function") {
              img.decode().then(done).catch(done);
            } else if (img.complete) {
              done();
            } else {
              img.onload = done;
              img.onerror = done;
            }
          })
      )
    ).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!autoPlay || !ready) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [autoPlay, ready]);

  const goTo = useCallback((index: number) => {
    setAutoPlay(false);
    setCurrent(index);
    window.setTimeout(() => setAutoPlay(true), 8000);
  }, []);

  const fadeDuration = reduceMotion ? 0 : FADE_MS;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white sm:bg-foreground sm:h-[min(85svh,960px)]"
      style={{ minHeight: 0 }}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[5px] z-20 gradient-primary"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />

      {/* Stacked slides — always mounted, crossfade only */}
      <div className="relative sm:absolute sm:inset-0 bg-foreground/5">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              decoding="async"
              fetchPriority={i === 0 ? "high" : "low"}
              draggable={false}
              initial={false}
              animate={{
                opacity: active ? 1 : 0,
                scale: active && !reduceMotion ? 1 : 1.02,
              }}
              transition={{
                opacity: { duration: fadeDuration, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: fadeDuration * 1.15, ease: "easeOut" },
              }}
              className={`w-full object-contain object-center sm:object-cover sm:object-[75%_center] block select-none ${
                i === 0
                  ? "relative sm:absolute sm:inset-0 sm:h-full"
                  : "absolute inset-0 h-full"
              }`}
              style={{
                pointerEvents: active ? "auto" : "none",
                willChange: "opacity, transform",
              }}
              aria-hidden={!active}
            />
          );
        })}
      </div>

      <motion.div
        className="hidden sm:block absolute inset-0 bg-black/5 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <div
        className="hidden sm:block absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(4,13,20,0.80), transparent)",
        }}
      />

      <div className="hidden sm:flex sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 justify-center z-20 gap-2.5 items-center py-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className="relative flex items-center justify-center focus:outline-none min-w-11 min-h-11"
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

      <div className="hidden sm:flex absolute inset-y-0 left-4 right-4 z-20 items-center justify-between pointer-events-none">
        {(["prev", "next"] as const).map((dir) => (
          <motion.button
            key={dir}
            type="button"
            onClick={() =>
              goTo(
                dir === "next"
                  ? (current + 1) % slides.length
                  : (current - 1 + slides.length) % slides.length
              )
            }
            aria-label={dir === "next" ? "Next slide" : "Previous slide"}
            className="pointer-events-auto w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors focus:outline-none"
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

      {autoPlay && ready && !reduceMotion && (
        <motion.div
          key={`progress-${current}`}
          className="hidden sm:block absolute bottom-0 left-0 h-[3px] z-20"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary, #0ea5e9), var(--color-accent, #38bdf8))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
};

export default HeroCarousel;
