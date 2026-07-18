import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Stethoscope,
  GraduationCap,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import doctorImg from "@/assets/doctor-portrait.jpeg";

/* ─── Data ─────────────────────────────────────────────────── */
const credentials = [
  { icon: GraduationCap, text: "MBBS – Govt. Medical College PMCH, Patna" },
  { icon: GraduationCap, text: "MS (ENT) – IMS, BHU Varanasi" },
  { icon: MapPin, text: "Sr. Residency – PGIMER, Chandigarh" },
  {
    icon: Stethoscope,
    text: "Fellowship in Vertigo & Vestibular – Yenelova University, Mangalore",
  },
  {
    icon: Award,
    text: "Cert. Sleep Medicine – Hind Medical Institute, Barabanki",
  },
];

const tags = [
  "ENT Specialist",
  "Allergy & Immunotherapy",
  "Vertigo & Balance",
  "Sleep Medicine",
  "Advanced ENT Surgery",
  "PGIMER Alumni",
];

/* ─── Ticker ──────────────────────────────────────────────── */
const Ticker = () => (
  <div className="absolute top-0 left-0 right-0 overflow-hidden border-b border-primary/10 bg-primary/5 py-2.5 sm:py-3 z-20">
    <div
      className="flex items-center w-max"
      style={{ animation: "ticker-scroll 26s linear infinite" }}
    >
      {[...tags, ...tags].map((t, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-4 sm:px-7 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-primary whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          {t}
        </span>
      ))}
    </div>

    <style>{`
      @keyframes ticker-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

/* ─── Stat Card ───────────────────────────────────────────── */
const StatCard = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: 0.5 + index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative overflow-hidden bg-card rounded-[18px] px-3 py-4 text-center
               shadow-lg border border-border w-[110px] cursor-default
               transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    {/* Glow blob */}
    <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 blur-xl pointer-events-none" />

    <p className="font-heading text-[22px] font-bold leading-none text-primary">
      {value}
    </p>
    <p className="text-[10px] text-muted-foreground mt-1.5 font-medium whitespace-pre-line leading-snug">
      {label}
    </p>
  </motion.div>
);

/* ─── Main Component ──────────────────────────────────────── */
const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-section-alt overflow-hidden pt-14 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6"
    >
      {/* ── Background decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)/0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-[360px] h-[360px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Top ticker */}
      <Ticker />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        {/* ── LEFT: Image ── */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Corner accents */}
          <span className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl pointer-events-none z-10" />
          <span className="absolute -bottom-4 -right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-accent rounded-br-xl pointer-events-none z-10 hidden sm:block" />

          {/* Image frame */}
          <motion.div
            style={{ y: imgY }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img
              src={doctorImg}
              alt="Dr. Prashant"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-4 left-4 right-4 z-10
                         flex items-center gap-3
                         bg-white/10 backdrop-blur-md border border-white/25
                         rounded-2xl px-4 py-3"
            >
              <div
                className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center
                              font-heading text-lg font-bold text-white shrink-0"
              >
                P
              </div>
              <div>
                <p className="font-heading text-[15px] font-bold text-white leading-tight">
                  Dr. Prashant
                </p>
                <p className="text-[11px] text-white/75 mt-0.5">
                  ENT Specialist &amp; Surgeon
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Text ── */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.span
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-primary mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span className="w-8 h-0.5 rounded-full gradient-primary" />
            About Dr. Prashant
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-[44px] font-bold text-foreground leading-[1.15] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42, duration: 0.65 }}
          >
            Leading ENT Specialist
            <br />
            &amp; <span className="gradient-text italic">Expert Surgeon</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground mb-3 font-light"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.52, duration: 0.6 }}
          >
            With over 14 years of dedicated practice, Dr. Prashant combines
            advanced surgical expertise with compassionate patient care. Trained
            at premier institutions across India, he brings world-class ENT care
            to every consultation.
          </motion.p>

          {/* Credentials */}
          <ul className="flex flex-col gap-2 mb-3">
            {credentials.map((c, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-[13px] sm:text-[13.5px] text-foreground/75"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.58 + i * 0.08, duration: 0.5 }}
              >
                <span
                  className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-primary
                             bg-primary/10 border border-primary/20"
                >
                  <c.icon size={14} />
                </span>
                {c.text}
              </motion.li>
            ))}
          </ul>

          {/* CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.55 }}
          >
            <Link
              to="/about"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5
                         gradient-primary text-primary-foreground font-semibold text-sm
                         rounded-full shadow-lg shadow-primary/30
                         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50
                         active:scale-95"
            >
              Full Profile
              <ChevronRight size={16} />
            </Link>

            <Link
              to="/book-appointment"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-1 text-sm font-semibold text-primary
                         transition-all duration-200 hover:gap-2"
            >
              Book Appointment <ChevronRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
