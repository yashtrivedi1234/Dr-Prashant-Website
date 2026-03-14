import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, Activity, Ear, Mic, Wind, Stethoscope, ArrowRight, Volume2, Moon, Smile, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";

const mainServices = [
  { id: "sinusitis-treatment", icon: Wind, title: "Sinusitis Treatment", desc: "Advanced diagnosis and modern treatments for sinus inflammation, congestion, and breathing difficulty.", gradient: "gradient-blue", color: "from-blue-500/10 to-sky-500/10" },
  { id: "snoring-treatment", icon: Moon, title: "Snoring Treatment", desc: "Expert evaluation and personalized treatment for snoring and sleep apnea conditions.", gradient: "gradient-purple", color: "from-violet-500/10 to-purple-500/10" },
  { id: "tonsillitis-treatment", icon: Smile, title: "Tonsillitis Care", desc: "Medical and surgical treatments for recurring tonsil infections and throat pain.", gradient: "gradient-pink", color: "from-pink-500/10 to-rose-500/10" },
  { id: "voice-disorder-surgeries", icon: Mic, title: "Voice Surgeries", desc: "Advanced microsurgical procedures to restore clear voice function and vocal quality.", gradient: "gradient-orange", color: "from-orange-500/10 to-amber-500/10" },
  { id: "micro-ear-surgery", icon: Ear, title: "Micro Ear Surgery", desc: "Precision microscopic techniques to repair delicate ear structures and restore hearing.", gradient: "gradient-teal", color: "from-teal-500/10 to-cyan-500/10" },
  { id: "digital-hearing-aids", icon: Volume2, title: "Digital Hearing Aids", desc: "Modern hearing solutions with customized fitting and professional audiological assessments.", gradient: "gradient-indigo", color: "from-indigo-500/10 to-blue-500/10" },
  { id: "stapedectomy-ear-surgery", icon: Ear, title: "Stapedectomy", desc: "Surgical correction of otosclerosis with prosthetic implant for hearing restoration.", gradient: "gradient-primary", color: "from-blue-500/10 to-violet-500/10" },
  { id: "cochlear-implant-hearing-restoration", icon: Activity, title: "Cochlear Implantation", desc: "Transformative surgery to restore hearing by directly stimulating the auditory nerve.", gradient: "gradient-warm", color: "from-orange-500/10 to-rose-500/10" },
  { id: "throat-cancer-treatment", icon: Stethoscope, title: "Throat Cancer", desc: "Comprehensive diagnosis, surgery, and rehabilitation for laryngeal and oropharyngeal cancer.", gradient: "gradient-red", color: "from-red-500/10 to-pink-500/10" },
];

const reasons = [
  { icon: ShieldCheck, title: "Expert Surgeons", desc: "Highly qualified ENT specialists with extensive experience in micro-surgeries and advanced procedures.", gradient: "gradient-blue" },
  { icon: Zap, title: "Advanced Technology", desc: "Latest diagnostic and surgical tools for precise, minimally invasive procedures and better outcomes.", gradient: "gradient-warm" },
  { icon: Activity, title: "Comprehensive Care", desc: "End-to-end patient care from initial diagnosis and hearing tests to post-surgical rehabilitation.", gradient: "gradient-teal" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full tracking-wider uppercase">
            Excellence in ENT Care
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Our <span className="gradient-text">Treatments</span> & Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
            Comprehensive ENT care with advanced techniques, experienced specialists, and a patient-first approach for lasting results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 ${service.gradient}`} />

                <div className="p-7">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${service.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-primary-foreground" size={26} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhyChooseUs/>

    

      <CTASection
        title="Step into a Life of Wellness"
        description="Whether it's a chronic condition or a sudden health change, we're here to guide you toward complete recovery."
        primaryButtonText="Book a consultation"
        secondaryButtonText="Call now"
      />
    </div>
  );
};

export default Services;
