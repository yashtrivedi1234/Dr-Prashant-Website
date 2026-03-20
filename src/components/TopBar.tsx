import { Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-gradient-to-r from-[rgb(26,79,171)] to-[rgb(40,100,200)] text-white py-1.5">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <a href="tel:+918081773201" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity text-xs sm:text-sm whitespace-nowrap">
          <Phone size={14} className="shrink-0" />+91 80817 73201
        </a>
        <a href="mailto:info@drprashantent.com" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity text-xs sm:text-sm min-w-0">
          <Mail size={14} className="shrink-0" /> <span className="truncate">info@drprashantent.com</span>
        </a>
      </div>
      <div className="flex w-full sm:w-auto items-center gap-2 ml-0 sm:ml-auto">
        <Link
          to="/book-appointment"
          className="flex flex-1 sm:flex-none justify-center items-center gap-1.5 xl:gap-2 bg-white text-primary px-3 xl:px-4 py-1.5 rounded-lg text-xs xl:text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary-foreground active:scale-95 transition-all duration-200 whitespace-nowrap"
        >
          <Calendar size={13} />
          Book Appointment
        </Link>
        <a
          href="tel:+918081773201"
          className="flex flex-1 sm:flex-none justify-center items-center gap-1.5 xl:gap-2 bg-white text-primary px-3 xl:px-4 py-1.5 rounded-lg text-xs xl:text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary-foreground active:scale-95 transition-all duration-200 whitespace-nowrap"
        >
          <Phone size={13} />
          Enquiry Now
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
