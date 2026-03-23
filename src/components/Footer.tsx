import {
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Instagram,
  Youtube,
  LogIn,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ccLogo from "@/assets/cc-logo.png";
import logo from "@/assets/logo.png";
import { useSubscribeNewsletterMutation } from "@/store/newsletterApi";
import { useToast } from "@/hooks/use-toast";
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribeNewsletter] = useSubscribeNewsletterMutation();
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await subscribeNewsletter({ email }).unwrap();
      setSubmitted(true);
      setEmail("");
      toast({
        title: "Success",
        description: "Thanks for subscribing to our newsletter!",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error: any) {
      const errorMessage = error?.data?.message || error?.message || "Failed to subscribe";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
      <div className="container-main pl-0 sm:pl-4 md:pl-6 lg:pl-8 pt-8 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 sm:gap-3 group flex-shrink-0 bg-white p-2 sm:p-[10px] rounded-[8px]"
                aria-label="Dr. Prashant Home"
              >
                <img
                  src={logo}
                  alt="Dr. Prashant Logo"
                  className="h-[44px] sm:h-[52px] w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-80 max-w-sm mx-auto sm:mx-0">
              A leading ENT Specialist and Ex-SR PGIMER, dedicated to advanced
              surgical care, precise vertigo management, and comprehensive
              allergy treatments.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/dr_ent_lucknow?igsh=MTRoeHM0M3RidGhldQ%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@drprashantent/videos"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://wa.me/918081773201"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left"
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
            className="text-center sm:text-left"
          >
            <h4 className="font-heading text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4">
              Get health tips and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
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
                  disabled={isLoading}
                  className="w-full sm:w-auto flex-shrink-0 px-3 py-2 rounded-lg gradient-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center sm:min-w-[44px]"
                >
                  {isLoading ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <Send size={15} />
                  )}
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
            className="text-center sm:text-left"
          >
            <h4 className="font-heading text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/NTRVAZo34EUCSi2MA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-center sm:justify-start gap-2.5 opacity-80 hover:opacity-100 hover:text-primary transition-all text-left"
                >
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]"
                  />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    560 V/161 Plot 3B Vijay Nagar, Kanpur Rd, Krishna Nagar,
                    Lucknow, UP 226023
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drprashantent.com"
                  className="flex items-center justify-center sm:justify-start gap-2.5 opacity-80 hover:opacity-100 hover:text-primary transition-all text-xs sm:text-sm break-all"
                >
                  <Mail size={15} className="shrink-0 sm:w-4 sm:h-4" />
                  info@drprashantent.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918081773201"
                  className="flex items-center justify-center sm:justify-start gap-2.5 opacity-80 hover:opacity-100 hover:text-primary transition-all text-xs sm:text-sm"
                >
                  <Phone size={15} className="shrink-0 sm:w-4 sm:h-4" />
                  +91 80817 73201
                </a>
              </li>
              <li>
                <a
                  href="/admin/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-white border border-primary-foreground/20 hover:border-primary text-primary-foreground text-xs sm:text-sm font-medium transition-all duration-300 w-full sm:w-fit"
                  aria-label="Admin Login"
                >
                  <LogIn size={15} className="shrink-0 sm:w-4 sm:h-4" />
                  Admin Login
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
          className="container-main flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap text-center px-4"
        >
          <p className="text-[10px] sm:text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Dr. Prashant. All rights reserved.
          </p>
          <span className="hidden sm:inline text-xs text-primary-foreground/60">
            •
          </span>
          <p className="text-[10px] sm:text-xs text-primary-foreground/60 tracking-widest">
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
