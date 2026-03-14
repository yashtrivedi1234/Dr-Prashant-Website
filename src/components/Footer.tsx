import { Stethoscope, MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ccLogo from "@/assets/cc-logo.png";

const quickLinks = [
  { name: "Home",       href: "/" },
  { name: "About",      href: "/about" },
  { name: "Treatments", href: "/services" },
  { name: "Gallery",    href: "/gallery" },
  { name: "Blog",       href: "/blog" },
  { name: "Contact",    href: "/contact" },
];

const Footer = () => {
  const [email, setEmail]       = useState("");
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
    <footer
      id="contact"
      className="bg-footer text-footer-foreground relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* ── Main grid ── */}
      <div className="container-main section-padding relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="gradient-primary p-2 rounded-lg flex-shrink-0">
                <Stethoscope className="text-primary-foreground" size={20} />
              </div>
              <span className="font-heading text-lg sm:text-xl font-bold text-primary-foreground">
                Dr. Prashant
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-80 max-w-xs">
              A leading ENT Specialist and Ex-SR PGIMER, dedicated to advanced
              surgical care, precise vertigo management, and comprehensive
              allergy treatments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  {l.href.startsWith("/#") ? (
                    <a
                      href={l.href}
                      className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {l.name}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4">
              Get health tips and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    flex-1 min-w-0
                    px-3 py-2 rounded-lg
                    bg-primary-foreground/10 border border-primary-foreground/20
                    text-primary-foreground placeholder-primary-foreground/50
                    text-xs sm:text-sm
                    focus:outline-none focus:border-primary-foreground/50
                    transition-colors
                  "
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex-shrink-0 px-3 py-2 rounded-lg gradient-primary hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send size={15} />
                </button>
              </div>
              {submitted && (
                <p className="text-xs text-primary-foreground/80 font-medium">
                  ✓ Thanks for subscribing!
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 opacity-80">
                <MapPin size={16} className="mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  560 V/161 Plot 3B Vijay Nagar, Kanpur Rd, Krishna Nagar,
                  Lucknow, UP 226023
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@drprashantent.com"
                  className="flex items-center gap-2.5 opacity-80 hover:opacity-100 hover:text-primary transition-all text-xs sm:text-sm break-all"
                >
                  <Mail size={15} className="shrink-0 sm:w-4 sm:h-4" />
                  info@drprashantent.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917658874707"
                  className="flex items-center gap-2.5 opacity-80 hover:opacity-100 hover:text-primary transition-all text-xs sm:text-sm"
                >
                  <Phone size={15} className="shrink-0 sm:w-4 sm:h-4" />
                  +91 76588 74707
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-primary-foreground/10 py-5 sm:py-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container-main flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap text-center"
        >
          <p className="text-[10px] sm:text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Dr. Prashant. All rights reserved.
          </p>
          <span className="hidden sm:inline text-xs text-primary-foreground/60">•</span>
          <p className="text-[10px] sm:text-xs text-primary-foreground/60 uppercase tracking-widest">
            Design and Developed by
          </p>
          <img
            src={ccLogo}
            alt="Code Crafter"
            className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;