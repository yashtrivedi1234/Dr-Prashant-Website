import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Baby, Bone, HeartPulse, Smile, CheckCircle2, ShieldCheck, Zap, Activity, Ear, Mic, Wind, Stethoscope, ArrowRight, Volume2, Moon } from "lucide-react";
import CTASection from "@/components/CTASection";

const mainServices = [
  { 
    id: "sinusitis-treatment",
    icon: Wind,
    title: "SINUSITIS",
    desc: "Experience improved hearing with advanced hearing aids. These devices amplify sound, enhancing communication and quality of life for those with hearing loss.",
    longDesc: "Sinusitis occurs when the sinus cavities become inflamed, causing nasal blockage, headaches, facial pain, and breathing difficulty. Our specialists provide advanced diagnosis and modern treatments for quick relief.",
    features: ["Sinus Endoscopy", "Medication Therapy", "Balloon Sinuplasty", "Chronic Sinusitis Treatment"],
    gradient: "gradient-blue"
  },

  { 
    id: "snoring-treatment",
    icon: Moon,
    title: "SNORING",
    desc: "Snoring results from obstructed airways during sleep, causing vibrations in throat tissues and disturbing sleep quality.",
    longDesc: "Snoring can indicate underlying airway obstruction or sleep apnea. Our ENT specialists diagnose the root cause and provide effective treatments to restore peaceful sleep.",
    features: ["Sleep Apnea Evaluation", "Airway Correction", "Lifestyle Guidance", "Snoring Surgery"],
    gradient: "gradient-purple"
  },

  { 
    id: "tonsillitis-treatment",
    icon: Smile,
    title: "TONSILLITIS",
    desc: "Tonsillitis is inflammation of the tonsils causing sore throat, fever, and difficulty swallowing.",
    longDesc: "Frequent tonsil infections can affect overall health and comfort. Our specialists provide medical treatment and surgical options like tonsillectomy when necessary.",
    features: ["Medical Therapy", "Tonsillectomy", "Infection Management", "Pediatric Tonsil Care"],
    gradient: "gradient-pink"
  },

  { 
    id: "voice-disorder-surgeries",
    icon: Mic,
    title: "VOICE SURGERIES",
    desc: "Voice surgeries treat vocal cord disorders and improve speech and voice quality.",
    longDesc: "Voice problems may result from nodules, polyps, or vocal cord damage. Our ENT specialists perform advanced procedures to restore clear voice function.",
    features: ["Vocal Cord Surgery", "Nodule Removal", "Voice Therapy", "Laryngeal Examination"],
    gradient: "gradient-orange"
  },

  { 
    id: "micro-ear-surgery",
    icon: Ear,
    title: "MICRO EAR SURGERY",
    desc: "Micro ear surgery uses advanced microscopic techniques to treat delicate ear disorders.",
    longDesc: "This surgery helps repair damaged ear structures and restore hearing using precision instruments and minimally invasive techniques.",
    features: ["Tympanoplasty", "Ossicular Reconstruction", "Chronic Ear Infection Treatment", "Microscopic Surgery"],
    gradient: "gradient-teal"
  },

  { 
    id: "digital-hearing-aids",
    icon: Volume2,
    title: "HEARING AIDS",
    desc: "Hearing aids are devices designed to amplify sound and improve hearing ability.",
    longDesc: "Our audiology department provides advanced digital hearing aids with customized fitting and professional hearing assessments.",
    features: ["Digital Hearing Aids", "Hearing Tests", "Custom Fitting", "Device Maintenance"],
    gradient: "gradient-indigo"
  },

  { 
    id: "stapedectomy-ear-surgery",
    icon: Ear,
    title: "STAPEDECTOMY",
    desc: "Stapedectomy is a surgical procedure to treat hearing loss caused by otosclerosis.",
    longDesc: "During this procedure, the damaged stapes bone is replaced with a prosthetic implant to restore sound transmission and hearing ability.",
    features: ["Otosclerosis Treatment", "Microsurgical Procedure", "Hearing Restoration", "Prosthetic Implant"],
    gradient: "gradient-primary"
  },

  { 
    id: "cochlear-implant-hearing-restoration",
    icon: Activity,
    title: "COCHLEAR IMPLANTATION",
    desc: "Cochlear implants restore hearing for individuals with severe hearing loss.",
    longDesc: "This advanced procedure directly stimulates the auditory nerve, helping patients with profound hearing loss perceive sound again.",
    features: ["Implant Surgery", "Hearing Rehabilitation", "Device Programming", "Post-implant Therapy"],
    gradient: "gradient-warm"
  },

  { 
    id: "throat-cancer-treatment",
    icon: Stethoscope,
    title: "THROAT CANCER",
    desc: "Throat cancer affects the larynx or oropharynx and requires specialized medical treatment.",
    longDesc: "Early diagnosis and treatment are critical for throat cancer. Our specialists provide comprehensive care including diagnosis, surgery, and rehabilitation.",
    features: ["Cancer Diagnosis", "Tumor Surgery", "Oncology Care", "Voice Rehabilitation"],
    gradient: "gradient-red"
  }
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
  const navigate = useNavigate();
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
  className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
>
  <span className="gradient-text">Treatments</span> We Offer
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
              onClick={() => navigate(`/services/${service.id}`)}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center cursor-pointer group hover:opacity-90 transition-opacity duration-300`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 ${service.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20`}>
                  <service.icon className="text-primary-foreground" size={36} />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-xl text-primary font-medium mb-6">{service.desc}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.longDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-primary" size={14} />
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
                >
                  Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
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
