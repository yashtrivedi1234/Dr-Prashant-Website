import { Leaf, FlaskConical, Award, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Leaf, title: "Holistic Treatment", desc: "Complete mind-body healing approach" },
  { icon: FlaskConical, title: "Natural Remedies", desc: "Safe, side-effect free medicines" },
  { icon: Award, title: "Experienced", desc: "20+ years of proven expertise" },
  { icon: Users, title: "Patient-Centric", desc: "Personalized care for every individual" },
];

const WhyChooseUs = () => (
  <>
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Our Strengths</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <b.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-cta py-12 px-4">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-cta-foreground mb-1">
            Want to Book an Appointment?
          </h3>
          <p className="text-cta-foreground/80 flex items-center gap-2 justify-center md:justify-start">
            <Phone size={18} /> Call us: +91 123 456 7890
          </p>
        </div>
        <a
          href="tel:+911234567890"
          className="bg-background text-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Book Appointment
        </a>
      </div>
    </section>
  </>
);

export default WhyChooseUs;
