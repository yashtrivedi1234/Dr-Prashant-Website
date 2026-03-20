import { Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-gradient-to-r from-[rgb(26,79,171)] to-[rgb(40,100,200)] text-white text-sm py-1.5">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-4">
        <a href="tel:+917658874707" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={14} />+91 76588 74707
        </a>
        <a href="mailto:info@drprashantent.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail size={14} /> info@drprashantent.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/book-appointment"
          className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white text-primary px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary-foreground active:scale-95 transition-all duration-200 whitespace-nowrap"
        >
          <Calendar size={13} />
          Book Appointment
        </Link>
        <a
          href="tel:+917658874707"
          className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white text-primary px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary-foreground active:scale-95 transition-all duration-200 whitespace-nowrap"
        >
          <Phone size={13} />
          Enquiry Now
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;