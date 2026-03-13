import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-main grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={doctorImg} alt="Dr. Homeo" className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Leading Homeopathy Doctor &amp; Healthcare Advocate
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With over 20 years of experience in homeopathic medicine, Dr. Homeo has dedicated his career to providing natural,
          holistic treatments that address the root cause of illness. His patient-centric approach combines traditional
          wisdom with modern diagnostics.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Beyond clinical practice, he actively contributes to public health awareness through community camps,
          educational seminars, and social initiatives across the region.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Know More
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
