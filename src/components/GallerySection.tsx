import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const galleryImages = [gallery1, gallery2, gallery1, gallery2];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal  = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );

  const goNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  /* Keyboard navigation */
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeModal();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex]);

  /* Prevent body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="section-padding bg-background overflow-hidden">
        <div className="container-main">

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <span className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
              Media
            </span>
            <h2 className="font-heading font-bold text-foreground leading-tight
              text-2xl sm:text-3xl md:text-4xl">
              Gallery &amp; <span className="gradient-text">Best Moments</span>
            </h2>
          </motion.div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl sm:rounded-2xl overflow-hidden aspect-square group shadow-md sm:shadow-lg cursor-pointer"
                onClick={() => openModal(i)}
                role="button"
                aria-label={`Open gallery image ${i + 1}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(i)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal content */}
            <motion.div
              className="
                relative z-10 flex items-center
                w-full
                px-2 sm:px-4 md:px-8
                gap-2 sm:gap-3 md:gap-4
                max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl
                mx-auto
              "
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Prev */}
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="
                  shrink-0 rounded-full bg-white/10 hover:bg-white/25
                  text-white flex items-center justify-center transition-colors
                  w-8 h-8 sm:w-10 sm:h-10
                "
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image */}
              <div className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={galleryImages[selectedIndex]}
                    alt={`Gallery ${selectedIndex + 1}`}
                    className="w-full object-contain
                      max-h-[60vh] sm:max-h-[72vh] md:max-h-[80vh]"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              </div>

              {/* Next */}
              <button
                onClick={goNext}
                aria-label="Next image"
                className="
                  shrink-0 rounded-full bg-white/10 hover:bg-white/25
                  text-white flex items-center justify-center transition-colors
                  w-8 h-8 sm:w-10 sm:h-10
                "
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close gallery"
              className="
                absolute top-3 right-3 sm:top-4 sm:right-4 z-20
                rounded-full bg-white/10 hover:bg-white/25
                text-white flex items-center justify-center transition-colors
                w-8 h-8 sm:w-10 sm:h-10
              "
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2
              text-white/70 text-xs sm:text-sm tabular-nums">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;