import { motion } from "framer-motion";
import { Award, Clock, Users, Heart, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import CTASection from "@/components/CTASection";

const stats = [
  { icon: Award, value: "14+", label: "Years Experience", color: "bg-primary" },
  { icon: Users, value: "PGIMER", label: "Ex-Senior Resident", color: "gradient-warm" },
  { icon: Clock, value: "24/7", label: "Dedicated Care", color: "gradient-teal" },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Treating every patient with dignity, respect, and deep empathy, ensuring personalized care for complex ENT conditions."
  },
  {
    icon: Target,
    title: "Advanced Diagnostics",
    description: "Utilizing state-of-the-art Skin Prick Tests, VNG Tests, and Sleep Studies for accurate, root-cause assessments."
  },
  {
    icon: Lightbulb,
    title: "Surgical Excellence",
    description: "Specialized in advanced Ear Surgery, Drug-Induced Sleep Endoscopy, and comprehensive Head & Neck Cancer management."
  }
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-5 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Advanced Care for <span className="gradient-text">ENT & Allergy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Learn about Dr. Prashant's distinguished career, his exceptional surgical skills, and his commitment to comprehensive patient care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-main grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full gradient-primary rounded-2xl opacity-10" />
            <img 
              src={doctorImg} 
              alt="Dr. Prashant" 
              className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-[4/5] z-10" 
            />
            <div className="absolute -bottom-10 -right-6 lg:right-0 gradient-primary text-primary-foreground rounded-2xl p-8 shadow-2xl z-20 max-w-xs">
              <p className="text-4xl font-bold font-heading mb-1">Dr. Prashant</p>
              <p className="text-sm opacity-90 leading-relaxed font-medium">MBBS, MS (ENT)</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Ex SR</p>
                <p className="text-sm font-semibold italic">PGIMER Chandigarh</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of <span className="gradient-text">Medical Excellence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Dr. Prashant stands as one of the foremost authorities in the fields of ENT, Vertigo, Allergy, and Head & Neck Cancer specialties. His distinguished career is marked by excellence in patient care, research, and academics.
              </p>
              <p>
                He completed his MBBS from PMCH, Patna in 2010, followed by an MS in ENT from IMS, B.H.U. Varanasi. As a prominent ENT Specialist formerly affiliated with the prestigious PGIMER Chandigarh, he has earned widespread recognition for his exceptional clinical skills and compassionate approach.
              </p>
              <p>
                For the last five years, Dr. Prashant has solely devoted his practice to advanced Ear Surgery, Allergy Testing & Immunotherapy, comprehensive Vertigo & VNG testing, Sleep Studies, Drug-Induced Sleep Endoscopy, and Head & Neck Cancer Surgeries.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{s.value}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Philosophy</h2>
            <p className="text-muted-foreground">Everything we do is guided by three fundamental principles that ensure the highest standard of specialized ENT and Allergy care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <v.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise List */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Patients Trust <span className="gradient-text">Our Practice</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Certified Allergy Expert providing advanced Skin Prick Tests & Immunotherapy.",
                  "Certified in complete Vertigo, Vestibular, and Balance Assessment and Management.",
                  "Proud Member of the Indian Society of Otology.",
                  "Proud Member of the Indian Association of Sleep Apnea Surgeons.",
                  "Specialized expertise in Drug-Induced Sleep Endoscopy and Sleep Studies.",
                  "Over 5 years of dedicated focus on complex Head & Neck Cancer Surgeries."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Video Overview</p>
                  <p className="font-heading text-xl font-bold text-foreground">Meet Dr. Prashant & Explore the Clinic</p>
                </div>
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