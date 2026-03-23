import { Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-gradient-to-r from-[rgb(26,79,171)] to-[rgb(40,100,200)] text-white py-2">
    
    {/* Mobile Layout */}
    <div className="block sm:hidden px-4 space-y-2">

      {/* Enquiry + Number (Top) */}
      <a
        href="tel:+918081773201"
        className="flex items-center justify-between bg-white text-primary px-4 py-2 rounded-lg shadow-sm"
      >
        <span className="flex items-center gap-2 font-semibold text-sm">
          <Phone size={16} />
          Enquiry Now
        </span>
        <span className="text-lg font-bold">
          +91 80817 73201
        </span>
      </a>

      {/* Full Width Book Appointment */}
      <Link
        to="/book-appointment"
        className="flex w-full justify-center items-center gap-2 bg-white text-primary py-2 rounded-lg font-semibold shadow-sm"
      >
        <Calendar size={16} />
        Book Appointment
      </Link>

    </div>

    {/* Desktop Layout (Same as before) */}
    <div className="hidden sm:flex max-w-7xl mx-auto flex-wrap justify-between items-center gap-2 px-4 sm:px-6 md:px-8">
      
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <a href="tel:+918081773201" className="flex items-center gap-1.5 hover:opacity-80 text-sm whitespace-nowrap">
          <Phone size={14} />+91 80817 73201
        </a>
        <a href="mailto:info@drprashantent.com" className="hidden md:flex items-center gap-1.5 text-sm">
          <Mail size={14} /> info@drprashantent.com
        </a>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Link
          to="/book-appointment"
          className="flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-lg text-sm font-semibold shadow-sm"
        >
          <Calendar size={13} />
          Book Appointment
        </Link>

        <a
          href="tel:+918081773201"
          className="flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-lg text-sm font-semibold shadow-sm"
        >
          <Phone size={13} />
          Enquiry Now
        </a>
      </div>

    </div>
  </div>
);

export default TopBar;