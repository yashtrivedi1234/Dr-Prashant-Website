import { motion } from "framer-motion";
import { Heart, Globe, Award } from "lucide-react";
import socialImg from "@/assets/social-work.jpg";

const highlights = [
  { icon: Heart, text: "50K+ Lives Impacted" },
  { icon: Globe, text: "100+ Free ENT Camps" },
  { icon: Award, text: "Excellence in Care" },
];

const SocialSection = () => (
  <section className="section-padding bg-section-alt overflow-hidden">
    <div className="container-main grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="order-2 md:order-1"
      >
        <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">Social Initiatives</span>
       <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Dedicated to <span className="gradient-text">Community Health</span> & Awareness
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Beyond clinical practice, Dr. Prashant leads several social welfare initiatives, including free ENT screening camps, allergy awareness drives, and early-stage cancer detection programs in underserved areas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Through his dedicated community outreach, he has impacted over 50,000 lives, actively advocating for deafness prevention, accessible healthcare, and critical health education.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold"
            >
              <h.icon size={16} /> {h.text}
            </motion.div>
          ))}
        </div>

        <a href="#contact" className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg">
          Know More About
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="order-1 md:order-2 relative"
      >
        <div className="absolute -top-4 -right-4 w-full h-full bg-accent rounded-2xl opacity-20" />
        <img src={socialImg} alt="Social initiatives" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] z-10" />
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
