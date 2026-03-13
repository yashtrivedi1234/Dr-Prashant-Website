import { motion } from "framer-motion";
import { Baby, Bone, HeartPulse, Smile, CheckCircle2, ShieldCheck, Zap, Activity, Ear, Mic, Wind, Stethoscope } from "lucide-react";
import CTASection from "@/components/CTASection";

const mainServices = [
  { 
    icon: Ear, 
    title: "Advanced Ear Surgery", 
    desc: "Specialized surgical interventions to restore hearing and treat complex ear conditions.",
    longDesc: "We offer state-of-the-art surgical treatments for restoring and improving hearing. From intricate micro ear surgeries to life-changing cochlear implants, our experts provide comprehensive otology care.",
    features: ["Micro Ear Surgery", "Cochlear Implantation", "Stapedectomy", "Tympanoplasty"],
    gradient: "gradient-primary" 
  },
  { 
    icon: Activity, 
    title: "Audiology & Hearing", 
    desc: "Comprehensive hearing assessments and advanced hearing aid fittings for all ages.",
    longDesc: "Regain the joy of clear sound with our custom audiology services. We provide thorough hearing evaluations and prescribe discrete, advanced hearing aids tailored to your specific lifestyle needs.",
    features: ["Advanced Hearing Aids", "Hearing Assessments", "Tinnitus Management", "Pediatric Audiology"],
    gradient: "gradient-warm" 
  },
  { 
    icon: Mic, 
    title: "Throat & Voice Care", 
    desc: "Expert diagnosis and surgical treatments for voice disorders and throat infections.",
    longDesc: "Our dedicated throat care addresses recurrent infections and vocal cord issues. Whether you need treatment for chronic tonsillitis or delicate voice-restoring surgeries, we deliver precise and effective care.",
    features: ["Voice Surgeries", "Tonsillitis Treatment", "Vocal Cord Rehabilitation", "Swallowing Disorders"],
    gradient: "gradient-teal" 
  },
  { 
    icon: Wind, 
    title: "Nose, Sinus & Sleep", 
    desc: "Effective treatments for chronic sinusitis, breathing difficulties, and snoring.",
    longDesc: "Breathe easier and sleep better with our advanced nasal and sinus care. We specialize in treating chronic sinusitis and providing effective surgical and non-surgical interventions to eliminate snoring.",
    features: ["Sinusitis Management", "Snoring Solutions", "Nasal Airway Clearing", "Allergy Treatment"],
    gradient: "gradient-primary" 
  },
];

const reasons = [
  { 
    icon: ShieldCheck, 
    title: "Expert Surgeons", 
    desc: "Our clinic is staffed by highly qualified ENT specialists with extensive experience in micro-surgeries." 
  },
  { 
    icon: Zap, 
    title: "Advanced Technology", 
    desc: "Equipped with the latest diagnostic and surgical tools for precise, minimally invasive procedures." 
  },
  { 
    icon: Activity, 
    title: "Comprehensive Care", 
    desc: "From initial diagnosis and hearing tests to post-surgical rehabilitation, we provide end-to-end patient care." 
  },
];

const Services = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
            >
              Excellence in Care
            </motion.span>
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight whitespace-nowrap"
>
  Our Medical <span className="gradient-text">Specializations</span>
</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Discover our range of homeopathic treatments designed to address the root causes of your health concerns and restore your natural vitality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="section-padding">
        <div className="container-main space-y-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 ${service.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20`}>
                  <service.icon className="text-primary-foreground" size={36} />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-xl text-primary font-medium mb-6">{service.desc}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.longDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-primary" size={14} />
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-lg aspect-square bg-slate-100 rounded-[3rem] relative overflow-hidden group">
                <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="text-slate-300 w-1/2 h-1/2 stroke-[1]" />
                </div>
                <div className="absolute inset-10 border border-slate-200 rounded-[2rem] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Homeopathy Section */}
      <section className="section-padding bg-section-alt relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">The Power of <span className="gradient-text">Homeopathy</span></h2>
            <p className="text-muted-foreground text-lg italic">"Similia Similibus Curentur" — Let Like Be Cured By Like</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-10 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary">
                  <r.icon size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Step into a Life of Wellness"
        description="Whether it's a chronic condition or a sudden health change, we're here to guide you toward holistic recovery."
        primaryButtonText="Book a consultation"
        secondaryButtonText="Call now"
      />
    </div>
  );
};

export default Services;
