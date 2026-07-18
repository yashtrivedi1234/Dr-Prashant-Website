import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/Gallery/2.jpeg";
import gallery2 from "@/assets/Gallery/4.jpeg";
import gallery3 from "@/assets/Gallery/5.jpeg";
import gallery4 from "@/assets/Gallery/6.jpeg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );

  const goNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="section-padding bg-background overflow-hidden">
        <div className="container-main px-0 sm:px-4">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0"
          >
            <span className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
              Media
            </span>
            <h2 className="font-heading font-bold text-foreground leading-tight
              text-2xl sm:text-3xl md:text-4xl">
              Gallery &amp; <span className="gradient-text">Best Moments</span>
            </h2>
          </motion.div>

          {/* Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative px-0 sm:px-12"
          >
            <CarouselContent className="ml-0 sm:-ml-3 lg:-ml-4">
              {galleryImages.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-0 sm:pl-3 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl sm:rounded-2xl overflow-hidden aspect-square group shadow-md sm:shadow-lg cursor-pointer"
                    onClick={() => openModal(i)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Hide arrows on mobile */}
            <CarouselPrevious className="hidden sm:flex left-1 h-10 w-10 border-border bg-background/90" />
            <CarouselNext className="hidden sm:flex right-1 h-10 w-10 border-border bg-background/90" />
          </Carousel>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              className="relative z-10 flex items-center w-full px-2 sm:px-4 md:px-8 gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
            >
              <button
                onClick={goPrev}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
              >
                <ChevronLeft />
              </button>

              <div className="flex-1 rounded-xl overflow-hidden bg-black">
                <motion.img
                  key={selectedIndex}
                  src={galleryImages[selectedIndex]}
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>

              <button
                onClick={goNext}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </motion.div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;