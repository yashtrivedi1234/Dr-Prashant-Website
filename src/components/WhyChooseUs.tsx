import { Leaf, FlaskConical, Award, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Leaf, title: "Holistic Treatment", desc: "Complete mind-body healing approach", gradient: "gradient-teal" },
  { icon: FlaskConical, title: "Natural Remedies", desc: "Safe, side-effect free medicines", gradient: "gradient-primary" },
  { icon: Award, title: "Experienced", desc: "20+ years of proven expertise", gradient: "gradient-warm" },
  { icon: Users, title: "Patient-Centric", desc: "Personalized care for every individual", gradient: "bg-violet" },
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
          className="text-center mb-14"
        >
          <span className="inline-block gradient-teal text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Our Strengths</span>
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

    {/* CTA Banner */}
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="gradient-primary py-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-cta-foreground mb-2">
            Want to Book an Appointment?
          </h3>
          <p className="text-cta-foreground/80 flex items-center gap-2 justify-center md:justify-start text-lg">
            <Phone size={20} /> Call us: +91 123 456 7890
          </p>
        </div>
        <a
          href="tel:+911234567890"
          className="bg-primary-foreground text-primary px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all whitespace-nowrap text-lg"
        >
          Book Appointment
        </a>
      </div>
    </motion.section>
  </>
);

export default WhyChooseUs;
