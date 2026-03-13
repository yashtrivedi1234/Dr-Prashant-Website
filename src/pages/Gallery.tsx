import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, Video, Star, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const galleryData = [
  { img: gallery1, title: "Clinic Environment", category: "Clinic" },
  { img: gallery2, title: "Doctor in Consultation", category: "Clinic" },
  { img: blog1, title: "Medical Seminar", category: "Community" },
  { img: blog2, title: "Free Health Camp", category: "Social" },
  { img: blog3, title: "Award Ceremony", category: "Community" },
  { img: gallery1, title: "Treatment Facility", category: "Clinic" },
];

const videoTestimonials = [
  { id: "1", thumbnail: blog1, title: "Chronic Gastritis Recovery", duration: "3:45", patient: "Vijay K." },
  { id: "2", thumbnail: gallery1, title: "Successful PCOD Treatment", duration: "5:20", patient: "Sneha R." },
  { id: "3", thumbnail: gallery2, title: "Migraine Relief Story", duration: "4:12", patient: "Amit S." },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const categories = ["all", "Clinic", "Community", "Social"];

  const filteredImages = activeTab === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeTab);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container-main relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
          >
            Media & Testimonials
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Moments & <span className="gradient-text">Success Stories</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our clinic's activities, social impact, and hear directly from patients who have experienced the power of holistic healing.
          </p>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 gradient-warm rounded-2xl flex items-center justify-center shadow-lg">
              <Video className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground">Patient Feedback</h2>
              <p className="text-muted-foreground">Stories of transformation and recovery.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl mb-4">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 gradient-warm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="text-white ml-1" size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                    {v.duration}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-primary transition-colors">{v.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span>Patient: {v.patient}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Filter Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <ImageIcon className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground">Our Gallery</h2>
                <p className="text-muted-foreground">Snapshots of our medical journey and social initiatives.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                    activeTab === cat 
                      ? "gradient-primary text-primary-foreground border-transparent shadow-lg" 
                      : "bg-background text-foreground/60 border-border hover:border-primary hover:text-primary"
                  } capitalize`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.title + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg cursor-zoom-in"
                >
                  <img src={img.img} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">{img.category}</p>
                    <h4 className="text-white text-xl font-bold leading-tight">{img.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Social Media Link Section */}
      
      <CTASection 
        title="Experience the Healing"
        description="Join thousands of patients who have restored their health through our scientific homeopathic treatment programs."
      />
    </div>
  );
};

export default Gallery;
