import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import doctorImg from "@/assets/doctor-portrait.jpg";

const stats = [
  { icon: Award,  value: "14+",   label: "Years Experience",   color: "bg-primary" },
  { icon: Users,  value: "PGIMER",label: "Ex-Senior Resident", color: "gradient-warm" },
  { icon: Clock,  value: "24/7",  label: "Available Support",  color: "gradient-teal" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background overflow-hidden">
    <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

      {/* ── Image column ── */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-full"
      >
        {/* Decorative background tile */}
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full gradient-primary rounded-2xl opacity-20 pointer-events-none" />

        <img
          src={doctorImg}
          alt="Dr. Prashant"
          className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] z-10"
        />

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="
            absolute z-20 gradient-primary text-primary-foreground rounded-2xl shadow-xl
            p-3 sm:p-4 md:p-5
            -bottom-4 -right-3
            sm:-bottom-5 sm:-right-4
            md:-bottom-6 md:right-4
          "
        >
          <p className="text-2xl sm:text-3xl font-bold font-heading leading-none">14+</p>
          <p className="text-xs sm:text-sm opacity-90 mt-0.5">Years of Excellence</p>
        </motion.div>
      </motion.div>

      {/* ── Text column ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="pt-6 sm:pt-8 md:pt-0"   /* offset so badge doesn't clip on mobile */
      >
        <span className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4">
          About Dr. Prashant
        </span>

        <h2 className="font-heading font-bold text-foreground leading-tight mb-4 sm:mb-6
          text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
          Leading ENT Specialist &amp;{" "}
          <span className="gradient-text">Surgeon</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          With over 14 years of medical excellence, Dr. Prashant is a highly regarded specialist
          in ENT, Vertigo, Allergy, and Head &amp; Neck Cancer, dedicated to providing advanced
          clinical and surgical care.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
          An alumnus of PMCH Patna and IMS B.H.U. Varanasi, and a former Senior Resident at
          PGIMER Chandigarh, he brings exceptional expertise in complex Ear Surgeries, Sleep
          Studies, and Immunotherapy to his patients.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className={`
                ${s.color} rounded-xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2
                w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
              `}>
                <s.icon className="text-primary-foreground" size={18} />
              </div>
              <p className="font-bold text-foreground text-sm sm:text-base md:text-lg leading-tight">
                {s.value}
              </p>
              <p className="text-muted-foreground text-[10px] sm:text-xs leading-tight mt-0.5">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/about"
          className="block w-fit mx-auto gradient-primary text-primary-foreground
            font-semibold rounded-full shadow-lg
            hover:opacity-90 active:scale-95 transition-all
            px-6 py-3 text-sm
            sm:px-8 sm:py-3.5 sm:text-base
          "
        >
          Know More
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;