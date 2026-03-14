import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CTASection = ({
  title = "Ready for Expert Medical Care?",
  description = "Book a comprehensive consultation today for advanced ENT, Vertigo, Allergy, and Surgical treatments with an Ex-SR PGIMER specialist.",
  primaryButtonText = "Book Appointment",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Emergency Call",
  secondaryButtonHref = "tel:+917658874707",
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            gradient-primary text-primary-foreground shadow-2xl
            relative overflow-hidden
            rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem]
            px-5 py-5
            sm:px-5 sm:py-7
            md:px-8 md:py-8
            lg:px-10 lg:py-10
            text-center
          "
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Heading */}
          <h2 className="font-heading font-bold relative z-10 leading-tight
            mb-4 sm:mb-5 lg:mb-6
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          {/* Description */}
          <p className="relative z-10 font-light leading-relaxed opacity-90
            max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto
            mb-8 sm:mb-10 lg:mb-12
            text-sm sm:text-base md:text-lg lg:text-xl">
            {description}
          </p>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center
            gap-3 sm:gap-4 lg:gap-6">
            <Link
              to={primaryButtonHref}
              className="
                w-full sm:w-auto
                bg-white text-primary font-bold shadow-xl
                hover:bg-slate-50 hover:-translate-y-1 transition-all
                rounded-full
                px-8 py-3.5 text-sm
                sm:px-10 sm:py-4 sm:text-base
                lg:px-12 lg:py-5 lg:text-lg
              "
            >
              {primaryButtonText}
            </Link>

            <a
              href={secondaryButtonHref}
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-2
                border-2 border-white/40 text-white font-bold
                hover:bg-white/10 transition-all
                rounded-full
                px-8 py-3.5 text-sm
                sm:px-10 sm:py-4 sm:text-base
                lg:px-12 lg:py-5 lg:text-lg
              "
            >
              <PhoneCall size={16} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 flex-shrink-0" />
              {secondaryButtonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;