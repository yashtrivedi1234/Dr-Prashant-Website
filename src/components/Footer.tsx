import { Stethoscope, MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
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
              A leading ENT Specialist and Ex-SR PGIMER, dedicated to advanced surgical care, precise vertigo management, and comprehensive allergy treatments.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  {l.href.startsWith("/#") ? (
                    <a href={l.href} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                      {l.name}
                    </a>
                  ) : (
                    <Link to={l.href} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Get health tips and updates delivered to your inbox.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg gradient-primary hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send size={16} />
                </button>
              </div>
              {submitted && (
                <p className="text-xs text-primary-foreground/80 font-medium">✓ Thanks for subscribing!</p>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 opacity-80">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  560 V/161 Plot 3B Vijay Nagar, Kanpur Rd, Krishna Nagar, Lucknow, UP 226023
                </span>
              </li>
              <li>
                <a href="mailto:info@entvertigoallergy.in" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  <Mail size={16} /> info@entvertigoallergy.in
                </a>
              </li>
              <li>
                <a href="tel:+917658874707" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  <Phone size={16} /> +91 76588 74707
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
};

export default Footer;