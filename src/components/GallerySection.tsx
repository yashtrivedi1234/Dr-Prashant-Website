import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import blog1 from "@/assets/blog-1.jpg";

const tabs = ["Patient Feedback Videos", "Some Best Moments"];

const galleryImages = [gallery1, gallery2, gallery1, gallery2];
const videoThumbnails = [blog1, gallery1, gallery2];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Media</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Gallery & Testimonials</h2>
        </div>

        <div className="flex justify-center gap-4 mb-10" id="testimonials">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                i === activeTab ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {activeTab === 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoThumbnails.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-video"
              >
                <img src={img} alt={`Video ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="text-primary-foreground ml-1" size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl overflow-hidden aspect-square group"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
