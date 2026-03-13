import { motion } from "framer-motion";
import { Baby, Bone, HeartPulse, Smile, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}

const services: Service[] = [
  { icon: HeartPulse, title: "Gynecology", desc: "Comprehensive women's health solutions with gentle homeopathic care and personalized treatment plans.", gradient: "gradient-primary" },
  { icon: Baby, title: "Pediatrics", desc: "Safe and natural remedies for children's health, from common ailments to chronic conditions.", gradient: "gradient-warm" },
  { icon: Bone, title: "Orthopedics", desc: "Holistic treatment for bone and joint issues, reducing pain through natural healing methods.", gradient: "gradient-teal" },
  { icon: Smile, title: "Dental Care", desc: "Supportive homeopathic treatments for dental health, pain management, and oral wellness.", gradient: "gradient-primary" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt overflow-hidden">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">What We Offer</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Best <span className="gradient-text">Services</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow group border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className={`w-full h-full ${s.gradient}`} />
            </div>
            <div className={`w-14 h-14 ${s.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
              <s.icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Explore More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
