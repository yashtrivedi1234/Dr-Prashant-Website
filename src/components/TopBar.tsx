import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="gradient-primary text-primary-foreground text-sm py-2.5 px-4">
    <div className="container-main flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="tel:+917658874707" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={14} />+91 76588 74707
        </a>
        <a href="mailto:info@entvertigoallergy.in" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail size={14} /> info@entvertigoallergy.in
        </a>
      </div>
      <Link to="/contact" className="hover:opacity-80 transition-opacity font-medium">Contact Us</Link>
    </div>
  </div>
);

export default TopBar;
