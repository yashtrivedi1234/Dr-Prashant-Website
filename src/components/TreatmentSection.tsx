import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wind, Waves, MoonStar } from "lucide-react";
import { useRef } from "react";

const treatments = [
  {
    category: "Allergy Clinic",
    icon: Wind,
    slug: "allergy",
    tagline: "Breathe Easy. Live Better.",
    description:
      "Comprehensive diagnosis and management of allergic rhinitis, skin allergies, food intolerances, asthma, and immunotherapy — all under one roof.",
    highlights: [
      "Allergic Rhinitis & Sinusitis",
      "Skin & Food Allergies",
      "Allergy Immunotherapy",
      "Asthma Management",
    ],
    gradient: "from-primary/10 via-sky/10 to-transparent",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    accentBar: "gradient-primary",
    badge: "Most Visited",
  },
  {
    category: "Vertigo Clinic",
    icon: Waves,
    slug: "vertigo-info",
    tagline: "Regain Your Balance. Reclaim Life.",
    description:
      "Advanced vestibular diagnostics including VNG testing, BPPV repositioning maneuvers, and personalised rehabilitation for dizziness and balance disorders.",
    highlights: [
      "BPPV & Labyrinthitis",
      "VNG Diagnostic Testing",
      "Vestibular Rehabilitation",
      "Migraine-Related Vertigo",
    ],
    gradient: "from-teal/10 via-accent/10 to-transparent",
    iconBg: "bg-teal/10 border-teal/20",
    iconColor: "text-teal",
    accentBar: "gradient-teal",
    badge: "Speciality Care",
  },
  {
    category: "Snoring Clinic",
    icon: MoonStar,
    slug: "snoring",
    tagline: "Sleep Silently. Wake Refreshed.",
    description:
      "Expert evaluation and treatment of snoring and obstructive sleep apnea using Drug-Induced Sleep Endoscopy (DISE), CPAP therapy, and surgical interventions.",
    highlights: [
      "Obstructive Sleep Apnea",
      "Drug-Induced Sleep Endoscopy",
      "CPAP & Oral Appliances",
      "Surgical Solutions",
    ],
    gradient: "from-violet/10 via-primary/5 to-transparent",
    iconBg: "bg-violet/10 border-violet/20",
    iconColor: "text-violet",
    accentBar: "gradient-purple",
    badge: "Advanced Diagnostics",
  },
];

const ease = [0.22, 1, 0.36, 1];

const TreatmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-background" ref={ref}>

      {/* ── Background blobs ── */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 gradient-warm text-primary-foreground
                           text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Speciality Clinics
          </span>

          <h2 className="font-heading font-bold text-foreground leading-tight mb-4
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="gradient-text">Core Treatments</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            Three dedicated clinics, each backed by advanced diagnostics and 14+ years of specialist expertise — designed around your specific needs.
          </p>
        </motion.div>

        {/* ── Treatment Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease }}
              className="group relative"
            >
              <div className={`relative h-full flex flex-col rounded-2xl border border-border/60
                               bg-gradient-to-br ${t.gradient}
                               overflow-hidden transition-all duration-300
                               hover:shadow-xl hover:-translate-y-1 hover:border-border`}>

                {/* Top accent bar */}
                <span className={`absolute top-0 left-0 right-0 h-[3px] ${t.accentBar} opacity-80
                                  group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase
                                 bg-foreground/5 border border-border/50 text-muted-foreground
                                 rounded-full px-2.5 py-1">
                  {t.badge}
                </span>

                <div className="p-6 sm:p-7 flex flex-col flex-1">

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5
                                   ${t.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <t.icon className={`w-5 h-5 ${t.iconColor}`} />
                  </div>

                  {/* Title + tagline */}
                  <h3 className="font-heading font-bold text-foreground text-xl sm:text-2xl leading-tight mb-1">
                    {t.category}
                  </h3>
                  <p className={`text-xs font-semibold tracking-wide uppercase mb-3 ${t.iconColor}`}>
                    {t.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                    {t.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${t.iconColor}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/${t.slug}`}
                    className={`inline-flex items-center gap-2 font-semibold text-sm
                                ${t.iconColor} group/link
                                transition-all duration-200 hover:gap-3`}
                  >
                    Learn More & Book
                    <span className="w-7 h-7 rounded-full border border-current/30 bg-current/5
                                     flex items-center justify-center
                                     transition-transform duration-200 group-hover/link:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.55, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            to="/treatment"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground
                       font-semibold rounded-full shadow-lg shadow-primary/25
                       px-7 py-3.5 text-sm
                       transition-all duration-300 hover:-translate-y-0.5
                       hover:shadow-primary/40 active:scale-95"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary
                       border border-primary/30 rounded-full px-7 py-3.5
                       hover:bg-primary/5 hover:border-primary/60 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentSection;