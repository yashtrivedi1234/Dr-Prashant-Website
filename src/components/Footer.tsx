import { Stethoscope, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];
const serviceLinks = ["Gynecology", "Pediatrics", "Orthopedics", "Dental Care", "General Wellness"];

const Footer = () => (
  <footer id="contact" className="bg-footer text-footer-foreground">
    <div className="container-main section-padding">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold text-primary-foreground">Dr. Prashant</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            A leading homeopathy practitioner and public health advocate committed to holistic healing and community wellness for over two decades.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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
        </div>

        {/* Services */}
        <div>
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
        </div>

        {/* Contact */}
        <div>
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
        </div>
      </div>
    </div>

    {/* Bottom strip */}
    <div className="border-t border-primary-foreground/10 py-5 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Dr. Prashant. All rights reserved.
    </div>
  </footer>
);

export default Footer;
