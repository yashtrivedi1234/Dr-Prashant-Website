import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="gradient-primary text-primary-foreground text-sm py-2.5 px-4">
    <div className="container-main flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="tel:+917658874707" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={14} />+91 76588 74707
        </a>
        <a href="mailto:info@drprashantent.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail size={14} /> info@drprashantent.com
        </a>
      </div>
      <a
        href="tel:+917658874707"
        className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white text-primary px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary-foreground active:scale-95 transition-all duration-200 whitespace-nowrap"
      >
        <Phone size={13} />
        Enquiry Now
      </a>
    </div>
  </div>
);

export default TopBar;