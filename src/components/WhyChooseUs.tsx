import { Activity, Stethoscope, Award, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { 
    icon: Activity, 
    title: "Advanced Diagnostics", 
    desc: "VNG, Sleep Studies & Allergy Testing", 
    gradient: "gradient-teal" 
  },
  { 
    icon: Stethoscope, 
    title: "Surgical Excellence", 
    desc: "Expert Head, Neck & Ear Surgeries", 
    gradient: "gradient-primary" 
  },
  { 
    icon: Award, 
    title: "Expert Specialist", 
    desc: "Ex-SR PGIMER with 14+ years expertise", 
    gradient: "gradient-warm" 
  },
  { 
    icon: Users, 
    title: "Patient-Centric", 
    desc: "Personalized care for complex conditions", 
    gradient: "bg-violet" 
  },
];

const WhyChooseUs = () => (
  <>
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <span className="inline-block gradient-teal text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">Our Strengths</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why <span className="gradient-text">Choose Us</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 ${b.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}>
                <b.icon className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WhyChooseUs;