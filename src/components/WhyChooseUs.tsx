import { Microscope, Stethoscope, Syringe, HeartHandshake } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpeg"; // swap with your preferred image

const features = [
  {
    icon: Microscope,
    title: "Comprehensive Testing",
    description:
      "Thorough, personalized allergy testing using advanced diagnostics — helping you identify triggers with precision.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Stethoscope,
    title: "Lifestyle & Trigger Guidance",
    description:
      "Expert advice on identifying and avoiding allergy triggers — empowering you to manage your condition every day.",
    color: "text-teal",
    bg: "bg-teal/10 border-teal/20",
  },
  {
    icon: Syringe,
    title: "Advanced Immunotherapy",
    description:
      "Personalized allergy shots and sublingual drops designed for faster results and lasting immune tolerance.",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/20",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Year-Round Care",
    description:
      "Tailored treatment plans with expert, caring support available all year — because your health never takes a break.",
    color: "text-warm",
    bg: "bg-warm/10 border-warm/20",
  },
];

const ease = [0.22, 1, 0.36, 1];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-section-alt overflow-hidden relative">

      {/* ── Subtle background dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)/0.10) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 w-fit gradient-warm text-primary-foreground
                         text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              Why Choose Us
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="font-heading font-bold text-foreground leading-tight mb-4
                         text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
            >
              Your Trusted Partner in{" "}
              <span className="gradient-text">ENT & Allergy Care</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              With 14+ years of specialist expertise, Dr. Prashant delivers advanced, compassionate care — combining precision diagnostics with personalised treatment plans that put you first.
            </motion.p>

            {/* Feature list */}
            <div className="flex flex-col gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.22 + i * 0.1, ease }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon bubble */}
                  <div className={`shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center
                                   ${f.bg} transition-transform duration-300 group-hover:scale-110`}>
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base leading-snug mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.7, ease }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground
                           font-semibold rounded-full px-7 py-3.5 text-sm shadow-lg shadow-primary/25
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 active:scale-95"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary
                           transition-all duration-200 hover:gap-2.5"
              >
                Learn About Dr. Prashant <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative hidden lg:block"
          >
            {/* Corner accents */}
            <span className="absolute -top-4 -right-4 w-20 h-20 border-t-[3px] border-r-[3px] border-primary rounded-tr-xl pointer-events-none z-10" />
            <span className="absolute -bottom-4 -left-4 w-20 h-20 border-b-[3px] border-l-[3px] border-accent rounded-bl-xl pointer-events-none z-10" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl max-w-[440px] ml-auto">
              <img
                src={doctorImg}
                alt="Dr. Prashant — ENT Specialist"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute bottom-5 left-5 right-5 z-10
                           bg-white/12 backdrop-blur-md border border-white/25 rounded-2xl
                           px-5 py-4 flex items-center gap-4"
              >
                <div className="gradient-primary w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-heading font-bold text-white text-lg">
                  P
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm leading-tight">Dr. Prashant</p>
                  <p className="text-white/70 text-[11px] mt-0.5">ENT Specialist · 14+ yrs experience</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="font-heading font-bold text-white text-lg leading-none">5K+</p>
                  <p className="text-white/60 text-[10px] mt-0.5">Patients</p>
                </div>
              </motion.div>
            </div>

            {/* Side floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="absolute top-8 -left-6 z-10
                         bg-card border border-border rounded-xl px-4 py-3
                         shadow-lg flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">PGIMER Trained</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;