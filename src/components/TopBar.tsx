import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm py-2 px-4">
    <div className="container-main flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone size={14} /> +91 123 456 7890
        </a>
        <a href="mailto:info@drprashant.com" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail size={14} /> info@drprashant.com
        </a>
      </div>
      <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact Us</a>
    </div>
  </div>
);

export default TopBar;
