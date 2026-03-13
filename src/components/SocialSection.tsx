import { motion } from "framer-motion";
import socialImg from "@/assets/social-work.jpg";

const SocialSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-main grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 md:order-1"
      >
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Social Initiatives</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          A Public Figure Dedicated to Community Health
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Beyond the clinic, Dr. Prashant leads several social welfare initiatives including free medical camps
          in rural areas, health awareness drives, and youth mentorship programs. His leadership in public
          health advocacy has earned recognition from numerous organizations.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          As the founder of the Holistic Health Foundation, he has impacted over 50,000 lives through
          accessible healthcare and education programs.
        </p>
        <a href="#contact" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Know More About
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-1 md:order-2"
      >
        <img src={socialImg} alt="Social initiatives" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
