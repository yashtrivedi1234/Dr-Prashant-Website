import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, PhoneCall, CalendarClock, ArrowRight } from "lucide-react";

const UrgentCareBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[28px] border border-amber-300/40 bg-[linear-gradient(135deg,rgba(255,247,237,0.98),rgba(255,255,255,0.98))] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8 shadow-xl"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-6 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="absolute -bottom-12 left-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                <AlertTriangle className="h-3.5 w-3.5" />
                Urgent Consultation
              </div>

              <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-[2.15rem]">
                Severe dizziness? Sudden hearing issue?
                <span className="text-amber-700"> Same-day consultation may be available.</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                For acute vertigo, sudden hearing changes, severe ear pain, or rapidly worsening ENT symptoms,
                contact the clinic directly. Early assessment can matter. Same-day slots depend on schedule availability.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="tel:+917658874707"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                <PhoneCall className="h-4 w-4" />
                Call Clinic Now
              </a>

              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-white px-6 py-3.5 text-sm font-semibold text-amber-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-amber-50"
              >
                <CalendarClock className="h-4 w-4" />
                Request Same-Day Slot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgentCareBanner;
