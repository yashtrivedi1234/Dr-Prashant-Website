import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import doctorImg from "@/assets/doctor-portrait.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Years Experience", color: "bg-primary" },
  { icon: Users, value: "50K+", label: "Patients Treated", color: "gradient-warm" },
  { icon: Clock, value: "24/7", label: "Available", color: "gradient-teal" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background overflow-hidden">
    <div className="container-main grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -top-4 -left-4 w-full h-full gradient-primary rounded-2xl opacity-20" />
        <img src={doctorImg} alt="Dr. Prashant" className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[4/5] z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -bottom-6 -right-6 md:right-4 gradient-primary text-primary-foreground rounded-2xl p-5 shadow-xl z-20"
        >
          <p className="text-3xl font-bold font-heading">20+</p>
          <p className="text-sm opacity-90">Years of Excellence</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">About Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Leading Homeopathy Doctor &amp; <span className="gradient-text">Healthcare Advocate</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With over 20 years of experience in homeopathic medicine, Dr. Prashant has dedicated his career to providing natural,
          holistic treatments that address the root cause of illness.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Beyond clinical practice, he actively contributes to public health awareness through community camps,
          educational seminars, and social initiatives across the region.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                <s.icon className="text-primary-foreground" size={22} />
              </div>
              <p className="font-bold text-foreground text-lg">{s.value}</p>
              <p className="text-muted-foreground text-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/about"
          className="inline-block gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          Know More
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
