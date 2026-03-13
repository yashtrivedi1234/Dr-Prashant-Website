import { Stethoscope, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];
const serviceLinks = ["Gynecology", "Pediatrics", "Orthopedics", "Dental Care", "General Wellness"];

const Footer = () => (
  <footer id="contact" className="bg-footer text-footer-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="container-main section-padding relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="gradient-primary p-2 rounded-lg">
              <Stethoscope className="text-primary-foreground" size={22} />
            </div>
            <span className="font-heading text-xl font-bold text-primary-foreground">Dr. Prashant</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            A leading homeopathy practitioner and public health advocate committed to holistic healing and community wellness.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Our Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 opacity-80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              123 Health Avenue, Medical District, Mumbai – 400001
            </li>
            <li>
              <a href="mailto:info@drprashant.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Mail size={16} /> info@drprashant.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Phone size={16} /> +91 123 456 7890
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-5 text-center text-sm opacity-60 relative z-10">
      © {new Date().getFullYear()} Dr. Prashant. All rights reserved.
    </div>
  </footer>
);

export default Footer;
