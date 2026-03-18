import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, Video, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";

// Dynamically import all images from Gallery folder
const galleryImages = import.meta.glob("../assets/Gallery/*.{jpg,jpeg,png}", { eager: true });

// Convert imported images to array with proper typing
type GalleryImage = { img: string; title: string; category: string };
const galleryData: GalleryImage[] = Object.keys(galleryImages).map((key, idx) => {
  const mod = galleryImages[key] as { default: string } | string;
  const img = typeof mod === "string" ? mod : mod.default;
  return {
    img,
    title: `Gallery Image ${idx + 1}`,
    category: "Gallery"
  };
});

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeTab);

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
  };

  return (
    <div className="bg-background">

      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent  rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            Media &amp; Testimonials
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Moments &amp; <span className="gradient-text">Success Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed
              text-sm sm:text-base md:text-lg"
          >
            Explore our clinic's activities, social impact, and hear directly
            from patients who have experienced the power of holistic healing.
          </motion.p>
        </div>
      </section>

     

      {/* ── Gallery Filter ── */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">

          {/* Header row */}
          <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12
            md:flex-row md:justify-between md:items-end">

            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <ImageIcon className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-foreground leading-tight
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Our Gallery
                </h2>
                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                  Snapshots of our medical journey and social initiatives.
                </p>
              </div>
            </div>

           
          </div>

          {/* Image grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.title + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden shadow-lg cursor-zoom-in
                    rounded-xl sm:rounded-2xl lg:rounded-[2rem]"
                  onClick={() => setSelectedImageIndex(i)}
                >
                  <img
                    src={img.img}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end
                    p-3 sm:p-5 lg:p-8">
                    <p className="text-white font-bold uppercase tracking-widest mb-0.5 sm:mb-1
                      text-[9px] sm:text-xs">
                      {img.category}
                    </p>
                    <h4 className="text-white font-bold leading-tight
                      text-sm sm:text-base lg:text-xl">
                      {img.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors flex items-center justify-center"
            >
              <X size={20} />
            </button>

            {/* Left Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
              className="absolute left-4 sm:left-6 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors flex items-center justify-center z-10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-4 sm:right-6 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors flex items-center justify-center z-10"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImageIndex].img}
                alt={filteredImages[selectedImageIndex].title}
                className="w-full max-h-[78vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center text-white">
                {filteredImages[selectedImageIndex].category && (
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-white/75 mb-1">
                    {filteredImages[selectedImageIndex].category}
                  </p>
                )}
                <h3 className="font-heading text-lg sm:text-xl font-bold">
                  {filteredImages[selectedImageIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        title="Experience the Healing"
        description="Join thousands of patients who have restored their health through our scientific homeopathic treatment programs."
      />
    </div>
  );
};

export default Gallery;