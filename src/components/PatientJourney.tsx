import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useCallback } from "react";
import {
  CalendarCheck, ClipboardList, Stethoscope,
  FlaskConical, HeartPulse, ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Appointment",
    description:
      "Call us or use our online portal to schedule at a time that suits you — same-day slots often available.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/25",
    glow: "shadow-primary/20",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Initial Assessment",
    description:
      "Share your medical history and symptoms. Our team reviews everything before you even walk in.",
    color: "text-teal",
    bg: "bg-teal/10 border-teal/25",
    glow: "shadow-teal/20",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Expert Consultation",
    description:
      "Meet Dr. Prashant for a thorough examination, diagnosis, and a personalised care plan discussion.",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/25",
    glow: "shadow-accent/20",
    featured: true,
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Advanced Diagnostics",
    description:
      "Get precise results with VNG, allergy testing, DISE, or other state-of-the-art investigations if needed.",
    color: "text-warm",
    bg: "bg-warm/10 border-warm/25",
    glow: "shadow-warm/20",
  },
  {
    number: "05",
    icon: HeartPulse,
    title: "Ongoing Care & Follow-Up",
    description:
      "Receive your treatment plan and stay connected with regular follow-ups for lasting results.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/25",
    glow: "shadow-primary/20",
  },
];

const ease = [0.22, 1, 0.36, 1];

// ── Travelling pulse dot ──────────────────────────────────────────────────────
// direction: "ltr" = left→right (icon sends signal right)
//            "rtl" = right→left (icon sends signal left)
const PulseDot = ({
  direction,
  trigger,
}: {
  direction: "ltr" | "rtl";
  trigger: number; // increment to re-trigger
}) => {
  const isLTR = direction === "ltr";
  return (
    <AnimatePresence>
      {trigger > 0 && (
        <motion.span
          key={trigger}
          initial={{ left: isLTR ? "0%" : "100%", opacity: 0 }}
          animate={{
            left: isLTR ? ["0%", "100%"] : ["100%", "0%"],
            opacity: [0, 1, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full
                     bg-primary shadow-[0_0_8px_3px_hsl(var(--primary)/0.6)]"
          style={{ marginLeft: isLTR ? "-5px" : "0", marginRight: isLTR ? "0" : "-5px" }}
        />
      )}
    </AnimatePresence>
  );
};

// ── Segment connector line ────────────────────────────────────────────────────
// activeLeft  = left icon (index i)   is hovered → dot goes RTL (right→left, outward from right icon)
// activeRight = right icon (index i+1) is hovered → dot goes LTR (left→right, outward from left icon)
const SegmentLine = ({
  index,
  totalSteps,
  isInView,
  leftIconHovered,   // step[index]   is hovered
  rightIconHovered,  // step[index+1] is hovered
}: {
  index: number;
  totalSteps: number;
  isInView: boolean;
  leftIconHovered: boolean;
  rightIconHovered: boolean;
}) => {
  // Track trigger counts so we can re-animate on each hover-enter
  const [ltrTrigger, setLtrTrigger] = useState(0);
  const [rtlTrigger, setRtlTrigger] = useState(0);

  const prevLeft  = useRef(false);
  const prevRight = useRef(false);

  // Fire on rising edge of leftIconHovered → LTR dot
  if (leftIconHovered && !prevLeft.current) {
    setLtrTrigger((n) => n + 1);
  }
  prevLeft.current = leftIconHovered;

  // Fire on rising edge of rightIconHovered → RTL dot
  if (rightIconHovered && !prevRight.current) {
    setRtlTrigger((n) => n + 1);
  }
  prevRight.current = rightIconHovered;

  const isActive = leftIconHovered || rightIconHovered;

  const segmentWidth = 100 / totalSteps;
  const leftPercent  = segmentWidth * index + segmentWidth / 2;
  const rightPercent = segmentWidth * (index + 1) + segmentWidth / 2;

  return (
    <div
      className="hidden lg:block absolute z-0 overflow-hidden"
      style={{
        top: "52px",
        left:  `calc(${leftPercent}%  + 44px)`,
        width: `calc(${rightPercent - leftPercent}% - 88px)`,
        height: "4px",
        borderRadius: "999px",
      }}
    >
      {/* Base dim track */}
      <div className="absolute inset-0 rounded-full bg-primary/15" />

      {/* Reveal on mount */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 + index * 0.18, ease }}
        className="absolute inset-0 gradient-primary opacity-25 rounded-full origin-left"
      />

      {/* Active glow overlay when either icon is hovered */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 gradient-primary opacity-50 rounded-full"
      />

      {/* LTR dot — fired when LEFT icon hovered */}
      <PulseDot direction="ltr" trigger={ltrTrigger} />

      {/* RTL dot — fired when RIGHT icon hovered */}
      <PulseDot direction="rtl" trigger={rtlTrigger} />
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const PatientJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Which step index is currently hovered (-1 = none)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const handleEnter = useCallback((i: number) => setHoveredIndex(i), []);
  const handleLeave = useCallback(() => setHoveredIndex(-1), []);

  return (
    <section ref={ref} className="section-padding bg-slate-50 relative overflow-hidden">

      {/* ── Background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)/0.09) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container-main relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 gradient-primary text-primary-foreground
                           text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Patient Journey
          </span>

          <h2 className="font-heading font-bold text-foreground leading-tight mb-4
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Your Path to <span className="gradient-text">Better Health</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Dr. Prashant's patient-first approach ensures a seamless, transparent experience — from your very first call to complete recovery.
          </p>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="w-16 h-[2px] rounded-full gradient-primary" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-8 h-[2px] rounded-full gradient-primary opacity-50" />
          </div>
        </motion.div>

        {/* ── Steps ── */}
        <div className="relative">

          {/* Connector lines — one per gap, each knows which neighbours are hovered */}
          {steps.slice(0, -1).map((_, i) => (
            <SegmentLine
              key={i}
              index={i}
              totalSteps={steps.length}
              isInView={isInView}
              leftIconHovered={hoveredIndex === i}
              rightIconHovered={hoveredIndex === i + 1}
            />
          ))}

          {/* Step cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease }}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
              className={`group flex flex-col items-center text-center cursor-default
            ${step.featured ? "lg:-mt-4" : ""}
            ${i === steps.length - 1 
              ? "col-span-2 sm:col-span-1 justify-self-center" 
              : ""}`}
              >
                {/* Icon circle */}
                <div className="relative mb-4">
                  <span className="absolute -top-2 -right-2 z-10
                                   w-6 h-6 rounded-full gradient-primary
                                   text-primary-foreground text-[10px] font-bold
                                   flex items-center justify-center shadow-md">
                    {step.number}
                  </span>

                  <div className={`w-[88px] h-[88px] rounded-full border-2 ${step.bg}
                                   flex items-center justify-center
                                   shadow-lg ${step.glow}
                                   transition-all duration-300
                                   group-hover:scale-110 group-hover:shadow-xl
                                   ${step.featured
                                     ? "w-[104px] h-[104px] border-2 border-primary/50 bg-primary/15 shadow-primary/25"
                                     : ""
                                   }`}
                  >
                    <step.icon className={`${step.featured ? "w-9 h-9" : "w-7 h-7"} ${step.color}
                                           transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {step.featured && (
                    <span className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-40 pointer-events-none" />
                  )}
                </div>

                <h3 className={`font-heading font-bold text-foreground leading-tight mb-2
                                ${step.featured ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-[11px] sm:text-[13px] leading-relaxed max-w-[180px]">
                  {step.description}
                </p>

                {step.featured && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase
                                   text-primary border border-primary/25 bg-primary/5 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Key Step
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.85, ease }}
          className="flex flex-col items-center gap-3 mt-14"
        >
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2.5 gradient-primary text-primary-foreground
                       w-full sm:w-auto justify-center font-semibold rounded-full px-8 py-4 text-sm shadow-lg shadow-primary/25
                       transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            Schedule Your Visit
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-muted-foreground text-xs text-center">
            Experience the difference with Dr. Prashant's personalised ENT care
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PatientJourney;
