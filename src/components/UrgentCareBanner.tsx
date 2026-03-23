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
  Zap,
} from "lucide-react";

const urgentConcerns = [
  { label: "Severe Dizziness", icon: Waves },
  { label: "Sudden Hearing Issue", icon: Ear },
  { label: "Acute ENT Symptoms", icon: ShieldAlert },
];

const steps = [
  {
    num: "1",
    text: "Call the clinic directly for quick guidance on urgency and slot availability.",
  },
  {
    num: "2",
    text: "If needed, submit an appointment request so the team can respond with the next available option.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const UrgentCareBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-amber-300/40 bg-gradient-to-br from-[#fffbf3] via-white to-[#fff8ed] shadow-2xl shadow-amber-200/50"
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="absolute top-1/2 right-[15%] h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-14 left-6 h-44 w-44 rounded-full bg-orange-200/20 blur-3xl" />
          </div>

          {/* Subtle grid texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #92400e 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Top accent strip */}
          <div className="relative flex items-center gap-0 overflow-hidden rounded-t-[32px] bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 px-6 py-2.5 sm:px-8">
            <Zap className="mr-2 h-3.5 w-3.5 text-white" />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
              Priority Consultation — Same-Day Slots May Be Available
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 gap-6 p-5 sm:p-7 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 lg:p-10 xl:gap-14"
          >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col justify-center gap-5">
              {/* Headline */}
              <motion.div variants={fadeUp}>
                <h2 className="font-heading font-extrabold leading-[1.1] tracking-tight text-foreground">
                  <span className="block text-[1.2rem] sm:text-[2.1rem] lg:text-[2.6rem] xl:text-[2.9rem]">
                    Severe dizziness?
                    <br className="xs:hidden" />
                    {" "}Sudden hearing problem?
                  </span>
                  <span className="mt-1 block text-[1.5rem] leading-snug text-amber-600 sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.5rem]">
                    Don't wait — act now.
                  </span>
                </h2>
              </motion.div>

              {/* Body copy */}
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]"
              >
                When symptoms feel sudden, intense, or rapidly worsening, early
                assessment matters. For acute vertigo, hearing changes, severe
                ear pain, or urgent ENT concerns — contact the clinic directly.
                Same-day slots depend on schedule availability.
              </motion.p>

              {/* Tag pills */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2.5"
              >
                {urgentConcerns.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-amber-400/70 hover:shadow-amber-100/60"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                      <item.icon className="h-3 w-3 text-amber-700" />
                    </span>
                    {item.label}
                  </div>
                ))}
              </motion.div>

              {/* Emergency notice */}
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-2.5 rounded-2xl border border-rose-200/60 bg-rose-50/60 px-4 py-3"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                <p className="text-xs leading-relaxed text-rose-700">
                  For breathing difficulty, severe neurological symptoms, or a
                  medical emergency, please seek{" "}
                  <strong>immediate emergency care</strong>.
                </p>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4"
            >
              {/* Steps card */}
              <div className="rounded-[22px] border border-amber-200/50 bg-white/90 p-5 shadow-lg shadow-amber-100/40 backdrop-blur-sm sm:p-6">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">
                  What To Do First
                </p>
                <div className="space-y-4">
                  {steps.map((s) => (
                    <div key={s.num} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-xs font-bold text-white shadow-sm shadow-amber-300/50">
                        {s.num}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <motion.a
                  href="tel:+918081773201"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-4 text-sm font-bold text-white shadow-lg shadow-foreground/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/25"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Link
                    to="/book-appointment"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-amber-400/50 bg-amber-50 px-6 py-[14px] text-sm font-bold text-amber-800 shadow-sm transition-all duration-300 hover:border-amber-500 hover:bg-amber-100 hover:shadow-amber-200/60"
                  >
                    <CalendarClock className="h-4 w-4" />
                    Book Appointment
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Availability note */}
              <p className="text-center text-[11px] leading-relaxed text-muted-foreground/80 sm:text-left">
                Availability varies by day. Calling ahead gives you the fastest
                response.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgentCareBanner;