import { motion } from "framer-motion";
import {
  Award, Clock, Users, Heart, Target,
  Lightbulb, CheckCircle2,
} from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import aboutVideo from "@/assets/about us.mp4";
import CTASection from "@/components/CTASection";
import { useRef } from "react";

const stats = [
  { icon: Award, value: "14+",    label: "Years Experience",   color: "bg-primary" },
  { icon: Users, value: "PGIMER", label: "Ex-Senior Resident", color: "gradient-warm" },
  { icon: Clock, value: "24/7",   label: "Dedicated Care",     color: "gradient-teal" },
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

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent  rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center px-2">
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
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Advanced Care for{" "}
              <span className="gradient-text">ENT &amp; Allergy</span>
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
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-full"
          >
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full gradient-primary rounded-2xl opacity-10 pointer-events-none" />

            <img
              src={doctorImg}
              alt="Dr. Prashant"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] z-10"
            />

            {/* Floating credential card */}
            <div className="
              absolute z-20 gradient-primary text-primary-foreground rounded-2xl shadow-2xl
              -bottom-6 -right-3
              sm:-bottom-8 sm:-right-4
              lg:-bottom-10 lg:right-0
              p-4 sm:p-5 lg:p-8
              max-w-[160px] sm:max-w-[200px] lg:max-w-xs
            ">
              <p className="font-bold font-heading leading-tight
                text-lg sm:text-2xl lg:text-4xl mb-0.5 sm:mb-1">
                Dr. Prashant
              </p>
              <p className="opacity-90 font-medium
                text-xs sm:text-sm">
                MBBS, MS (ENT)
              </p>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="uppercase tracking-widest opacity-80 mb-0.5
                  text-[9px] sm:text-xs">
                  Ex SR
                </p>
                <p className="font-semibold italic
                  text-xs sm:text-sm">
                  PGIMER Chandigarh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8 sm:pt-10 lg:pt-0"
          >
            <h2 className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-4xl">
              A Legacy of{" "}
              <span className="gradient-text">Medical Excellence</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed
              text-sm sm:text-base mb-4 sm:mb-6">
              <p>
                Dr. Prashant stands as one of the foremost authorities in the
                fields of ENT, Vertigo, Allergy, and Head &amp; Neck Cancer
                specialties. His distinguished career is marked by excellence in
                patient care, research, and academics.
              </p>
              <p>
                He completed his MBBS from PMCH, Patna in 2010, followed by an
                MS in ENT from IMS, B.H.U. Varanasi. As a prominent ENT
                Specialist formerly affiliated with the prestigious PGIMER
                Chandigarh, he has earned widespread recognition for his
                exceptional clinical skills and compassionate approach.
              </p>
              <p>
                For the last five years, Dr. Prashant has solely devoted his
                practice to advanced Ear Surgery, Allergy Testing &amp;
                Immunotherapy, comprehensive Vertigo &amp; VNG testing, Sleep
                Studies, Drug-Induced Sleep Endoscopy, and Head &amp; Neck
                Cancer Surgeries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-border/50">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-bold text-foreground mb-0.5 sm:mb-1
                    text-xl sm:text-2xl md:text-3xl">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider
                    text-[9px] sm:text-xs leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-main relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2">
            <h2 className="font-heading font-bold text-foreground mb-3 leading-tight
              text-2xl sm:text-3xl md:text-4xl">
              Our Core Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed
              text-sm sm:text-base">
              Everything we do is guided by three fundamental principles that
              ensure the highest standard of specialized ENT and Allergy care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <div className="gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4 sm:mb-6
                  w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                  <v.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-heading font-bold mb-2 sm:mb-3
                  text-base sm:text-lg lg:text-xl">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed
                  text-xs sm:text-sm lg:text-base">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

            {/* List */}
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-foreground mb-5 sm:mb-6 leading-tight
                text-2xl sm:text-3xl md:text-4xl">
                Why Patients Trust{" "}
                <span className="gradient-text">Our Practice</span>
              </h2>

              <ul className="space-y-2.5 sm:space-y-3">
                {expertise.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2
                      className="text-primary shrink-0 mt-0.5"
                      size={16}
                    />
                    <span className="text-foreground/80 font-medium leading-snug
                      text-xs sm:text-sm">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
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