import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="gradient-primary text-primary-foreground text-sm py-2.5 px-4">
    <div className="container-main flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={14} /> +91 123 456 7890
        </a>
        <a href="mailto:info@drprashant.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail size={14} /> info@drprashant.com
        </a>
      </div>
      <a href="#contact" className="hover:opacity-80 transition-opacity font-medium">Contact Us</a>
    </div>
  </div>
);

export default TopBar;
