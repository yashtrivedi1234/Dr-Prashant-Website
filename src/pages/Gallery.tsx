import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, Video, Star, X } from "lucide-react";
import CTASection from "@/components/CTASection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const galleryData = [
  { img: gallery1, title: "Clinic Environment",      category: "Clinic" },
  { img: gallery2, title: "Doctor in Consultation",  category: "Clinic" },
  { img: blog1,    title: "Medical Seminar",         category: "Community" },
  { img: blog2,    title: "Free Health Camp",        category: "Social" },
  { img: blog3,    title: "Award Ceremony",          category: "Community" },
  { img: gallery1, title: "Treatment Facility",      category: "Clinic" },
];

const videoTestimonials = [
  { id: "1", thumbnail: blog1,    title: "Chronic Gastritis Recovery",  duration: "3:45", patient: "Vijay K." },
  { id: "2", thumbnail: gallery1, title: "Successful PCOD Treatment",   duration: "5:20", patient: "Sneha R." },
  { id: "3", thumbnail: gallery2, title: "Migraine Relief Story",       duration: "4:12", patient: "Amit S." },
];

const categories = ["all", "Clinic", "Community", "Social"];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const filteredImages =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeTab);

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

      {/* ── Video Testimonials ── */}
      <section className="section-padding">
        <div className="container-main">

          {/* Section header */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
            <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 gradient-warm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Video className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h2 className="font-heading font-bold text-foreground leading-tight
                text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Patient Feedback
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                Stories of transformation and recovery.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: v.thumbnail,
                    title: v.title,
                    subtitle: `Patient: ${v.patient}`,
                  })
                }
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-3 sm:mb-4">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 gradient-warm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="text-white ml-0.5 sm:ml-1" size={22} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-md text-white font-bold px-2 py-0.5 rounded
                    text-[10px] sm:text-xs">
                    {v.duration}
                  </div>
                </div>

                {/* Meta */}
                <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors
                  text-base sm:text-lg lg:text-xl">
                  {v.title}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground
                  text-xs sm:text-sm">
                  <div className="flex text-yellow-500 gap-px">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={12} fill="currentColor" className="sm:w-3.5 sm:h-3.5" />
                    ))}
                  </div>
                  <span>Patient: {v.patient}</span>
                </div>
              </motion.div>
            ))}
          </div>
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

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`
                    px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full font-bold capitalize border transition-all
                    text-xs sm:text-sm
                    ${activeTab === cat
                      ? "gradient-primary text-primary-foreground border-transparent shadow-lg"
                      : "bg-background text-foreground/60 border-border hover:border-primary hover:text-primary"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
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
                  onClick={() =>
                    setSelectedImage({
                      src: img.img,
                      title: img.title,
                      subtitle: img.category,
                    })
                  }
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors flex items-center justify-center"
            >
              <X size={20} />
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
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[78vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center text-white">
                {selectedImage.subtitle && (
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-white/75 mb-1">
                    {selectedImage.subtitle}
                  </p>
                )}
                <h3 className="font-heading text-lg sm:text-xl font-bold">
                  {selectedImage.title}
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