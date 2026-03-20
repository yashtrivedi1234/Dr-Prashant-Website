import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  PhoneCall,
  CalendarClock,
  ArrowRight,
  Ear,
  Waves,
  ShieldAlert,
} from "lucide-react";

const urgentConcerns = [
  { label: "Severe Dizziness", icon: Waves },
  { label: "Sudden Hearing Issue", icon: Ear },
  { label: "Acute ENT Symptoms", icon: ShieldAlert },
];

const UrgentCareBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[30px] border border-amber-300/35 bg-[linear-gradient(135deg,rgba(255,247,237,0.98),rgba(255,255,255,0.98))] shadow-2xl shadow-amber-100/40"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-8 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl" />
            <div className="absolute top-1/2 right-[18%] h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-orange-300/15 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                <AlertTriangle className="h-3.5 w-3.5" />
                Priority Consultation
              </div>

              <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                Severe dizziness? Sudden hearing problem?
                <span className="block text-amber-700"> Same-day consultation may be available.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                When symptoms feel sudden, intense, or rapidly worsening, early assessment matters.
                For acute vertigo, hearing changes, severe ear pain, or urgent ENT concerns, contact the clinic directly.
                Same-day slots depend on schedule availability.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {urgentConcerns.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/80 px-4 py-2 text-xs font-semibold text-foreground shadow-sm"
                  >
                    <item.icon className="h-3.5 w-3.5 text-amber-700" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="rounded-[26px] border border-amber-300/30 bg-white/80 p-5 shadow-lg shadow-amber-100/40 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                  What To Do First
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700">
                      1
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/85">
                      Call the clinic directly for quick guidance on urgency and slot availability.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700">
                      2
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/85">
                      If needed, submit an appointment request so the team can respond with the next available option.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row xl:flex-col 2xl:flex-row w-full">
                <a
                  href="tel:+918081773201"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call Clinic Now
                </a>

                <Link
                  to="/book-appointment"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-white px-6 py-4 text-sm font-semibold text-amber-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-amber-50"
                >
                  <CalendarClock className="h-4 w-4" />
                  Request Same-Day Slot
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                For breathing difficulty, severe neurological symptoms, or a medical emergency, seek immediate emergency care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgentCareBanner;
