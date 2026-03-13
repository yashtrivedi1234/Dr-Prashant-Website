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
  secondaryButtonHref = "tel:+917658874707"
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-primary rounded-[3rem] p-12 text-center text-primary-foreground shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 relative z-10 font-light leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link 
              to={primaryButtonHref} 
              className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
            >
              {primaryButtonText}
            </Link>
            <a 
              href={secondaryButtonHref} 
              className="flex items-center justify-center gap-3 border-2 border-white/40 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              <PhoneCall size={20} />
              {secondaryButtonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;