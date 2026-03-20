import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Heart,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpeg";
import aboutVideo from "@/assets/about us.mp4";
import CTASection from "@/components/CTASection";
import { useRef } from "react";

const stats = [
  { icon: Award, value: "14+", label: "Years Experience", color: "bg-primary" },
  {
    icon: Users,
    value: "PGIMER",
    label: "Ex-Senior Resident",
    color: "gradient-warm",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Dedicated Care",
    color: "gradient-teal",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Treating every patient with dignity, respect, and deep empathy, ensuring personalized care for complex ENT conditions.",
  },
  {
    icon: Target,
    title: "Advanced Diagnostics",
    description:
      "Utilizing state-of-the-art Skin Prick Tests, VNG Tests, and Sleep Studies for accurate, root-cause assessments.",
  },
  {
    icon: Lightbulb,
    title: "Surgical Excellence",
    description:
      "Specialized in advanced Ear Surgery, Drug-Induced Sleep Endoscopy, and comprehensive Head & Neck Cancer management.",
  },
];

const expertise = [
  "Certified Allergy Expert providing advanced Skin Prick Tests & Immunotherapy.",
  "Certified in complete Vertigo, Vestibular, and Balance Assessment and Management.",
  "Proud Member of the Indian Society of Otology.",
  "Proud Member of the Indian Association of Sleep Apnea Surgeons.",
  "Specialized expertise in Drug-Induced Sleep Endoscopy and Sleep Studies.",
  "Over 5 years of dedicated focus on complex Head & Neck Cancer Surgeries.",
];

const conditions = [
  "Hearing Loss",
  "Sinusitis",
  "Throat Disorders",
  "Ear Infections",
  "Balance Disorders",
  "Voice Problems",
];

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent  rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
            >
              Our Story
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground mb-3 leading-tight
                text-xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-nowrap"
            >
              Advanced Care for <span className="gradient-text">ENT &amp; Allergy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed
                text-sm sm:text-base md:text-lg"
            >
              Learn about Dr. Prashant's distinguished career, his exceptional
              surgical skills, and his commitment to comprehensive patient care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto flex flex-col items-center w-full"
          >
            <span className="absolute -top-4 -left-2 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl pointer-events-none z-10" />
            <span className="absolute -bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 border-b-[3px] border-r-[3px] border-accent rounded-br-xl pointer-events-none z-10 hidden sm:block" />

            <div className="relative w-full max-w-[320px] sm:max-w-[400px] rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={doctorImg}
                alt="Dr. Prashant"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

              <div
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
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-6 sm:pt-10 lg:pt-0 text-center lg:text-left"
          >
            <h2
              className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-4xl"
            >
              A Legacy of{" "}
              <span className="gradient-text">Medical Excellence</span>
            </h2>

            <div
              className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed
              text-sm sm:text-base mb-4 sm:mb-6"
            >
              <p>
                Dr. Prashant did MBBS from Govt Medical College PMCH, Patna and
                MS (ENT) from IMS, BHU Varanasi. He did senior residency from
                PGIMER, Chandigarh. He had done advance course on allergy
                testing and immunotherapy from Baroda. He had done fellowship
                course on vertigo, imbalance and vestibular assessment and
                management from Yenelova University Mangalore. He had done
                certificate course in Sleep Medicine from Hind Medical Institute
                Barabanki.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-border/50">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-bold text-foreground mb-0.5 sm:mb-1
                    text-xl sm:text-2xl md:text-3xl"
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-muted-foreground font-medium uppercase tracking-wider
                    text-[9px] sm:text-xs leading-tight"
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container-main">
          <div className="mt-12 sm:mt-14">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-center text-foreground mb-6 sm:mb-8
                text-2xl sm:text-3xl"
            >
              Comprehensive Services for ENT Conditions
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-lg
                    p-3 sm:p-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    {condition}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2">
            <h2
              className="font-heading font-bold text-foreground mb-3 leading-tight
              text-2xl sm:text-3xl md:text-4xl"
            >
              Our Core Philosophy
            </h2>
            <p
              className="text-muted-foreground leading-relaxed
              text-sm sm:text-base"
            >
              Everything we do is guided by three fundamental principles that
              ensure the highest standard of specialized ENT and Allergy care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow
                  p-5 sm:p-6 lg:p-8"
              >
                <div
                  className="gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4 sm:mb-6
                  w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                >
                  <v.icon className="text-primary-foreground" size={22} />
                </div>
                <h3
                  className="font-heading font-bold mb-2 sm:mb-3
                  text-base sm:text-lg lg:text-xl"
                >
                  {v.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed
                  text-xs sm:text-sm lg:text-base"
                >
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise + Video ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* List */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2
                className="font-heading font-bold text-foreground mb-5 sm:mb-6 leading-tight
                text-2xl sm:text-3xl md:text-4xl"
              >
                Why Patients Trust{" "}
                <span className="gradient-text">Our Practice</span>
              </h2>

              <ul className="space-y-2.5 sm:space-y-3 max-w-2xl mx-auto lg:mx-0">
                {expertise.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start text-left gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2
                      className="text-primary shrink-0 mt-0.5"
                      size={16}
                    />
                    <span
                      className="text-foreground/80 font-medium leading-snug
                      text-xs sm:text-sm"
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="order-1 lg:order-2">
              <div className="aspect-video min-h-[220px] sm:min-h-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <video
                  ref={videoRef}
                  src={aboutVideo}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutUs;
