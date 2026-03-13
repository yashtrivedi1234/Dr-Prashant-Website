import { motion } from "framer-motion";
import { Baby, Bone, HeartPulse, Smile, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  { icon: HeartPulse, title: "Gynecology", desc: "Comprehensive women's health solutions with gentle homeopathic care and personalized treatment plans." },
  { icon: Baby, title: "Pediatrics", desc: "Safe and natural remedies for children's health, from common ailments to chronic conditions." },
  { icon: Bone, title: "Orthopedics", desc: "Holistic treatment for bone and joint issues, reducing pain through natural healing methods." },
  { icon: Smile, title: "Dental Care", desc: "Supportive homeopathic treatments for dental health, pain management, and oral wellness." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container-main">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">What We Offer</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Best Services</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group border border-border/50"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
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
