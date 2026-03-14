import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, Zap, Activity, Ear, Mic, Wind, Moon, Volume2, Stethoscope, Smile, Phone, Calendar, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";

const mainServices = [
  {
    id: "sinusitis-treatment", icon: Wind, title: "Sinusitis Treatment",
    desc: "Advanced diagnosis and treatment for sinus inflammation.",
    longDesc: "Sinusitis is a condition where the sinus cavities become inflamed, leading to congestion, headaches, facial pressure, and difficulty breathing. Our clinic offers advanced diagnostic and treatment options to relieve symptoms and restore healthy sinus function.",
    features: ["Sinus Endoscopy", "Medication Therapy", "Balloon Sinuplasty", "Chronic Sinusitis Treatment"],
    fullContent: `Sinusitis can significantly affect your daily life. Our ENT specialists provide comprehensive care including:\n\n• Accurate diagnosis using nasal endoscopy\n• Medical management with antibiotics and anti-allergy medication\n• Balloon sinuplasty for minimally invasive sinus opening\n• Endoscopic sinus surgery for chronic cases\n• Lifestyle and allergy management guidance\n\nOur goal is to restore comfortable breathing and prevent recurring infections.`,
    benefits: ["Relief from sinus pressure", "Improved breathing", "Reduced headaches", "Minimally invasive procedures", "Long-term sinus health"],
    gradient: "gradient-blue",
  },
  {
    id: "snoring-treatment", icon: Moon, title: "Snoring Treatment",
    desc: "Expert evaluation and personalized treatment for snoring.",
    longDesc: "Snoring can disturb sleep quality and may indicate sleep apnea. Our ENT specialists evaluate airway obstruction and provide personalized treatment solutions.",
    features: ["Sleep Apnea Evaluation", "Nasal Airway Treatment", "Lifestyle Guidance", "Snoring Surgery"],
    fullContent: `Snoring occurs when airflow through the mouth and nose is obstructed during sleep.\n\nOur treatment includes:\n\n• Nasal blockage correction\n• Sleep apnea diagnosis\n• Lifestyle and weight management advice\n• CPAP therapy guidance\n• Surgical options when required\n\nProper treatment improves sleep quality and overall health.`,
    benefits: ["Better sleep quality", "Reduced fatigue", "Improved breathing", "Lower sleep apnea risk", "Healthier lifestyle"],
    gradient: "gradient-purple",
  },
  {
    id: "tonsillitis-treatment", icon: Smile, title: "Tonsillitis Care",
    desc: "Medical and surgical treatments for tonsil infections.",
    longDesc: "Frequent tonsil infections can affect daily life and cause severe throat pain. Our specialists provide both medical and surgical treatments for tonsillitis.",
    features: ["Medical Therapy", "Tonsillectomy", "Infection Management", "Pediatric Tonsil Care"],
    fullContent: `Tonsillitis is commonly caused by viral or bacterial infections.\n\nOur care includes:\n\n• Accurate throat examination\n• Antibiotic therapy for bacterial infections\n• Pain and inflammation management\n• Tonsillectomy for recurrent infections\n• Post-surgery recovery guidance\n\nTreatment helps reduce recurring throat infections and improve quality of life.`,
    benefits: ["Relief from throat pain", "Reduced infection frequency", "Improved swallowing", "Better breathing", "Long-term throat health"],
    gradient: "gradient-pink",
  },
  {
    id: "voice-disorder-surgeries", icon: Mic, title: "Voice Surgeries",
    desc: "Advanced procedures to restore voice function.",
    longDesc: "Voice disorders can result from nodules, polyps, or vocal cord damage. Our voice specialists perform advanced procedures to restore normal voice function.",
    features: ["Vocal Cord Surgery", "Nodule Removal", "Voice Therapy", "Laryngeal Examination"],
    fullContent: `Voice problems may affect speaking or singing ability.\n\nOur voice treatment services include:\n\n• Laryngeal stroboscopy diagnosis\n• Vocal cord polyp or nodule removal\n• Microsurgical vocal cord procedures\n• Voice rehabilitation therapy\n• Post-surgery voice care\n\nThese treatments help restore clear and strong voice function.`,
    benefits: ["Improved voice quality", "Better communication", "Professional voice recovery", "Advanced microsurgery", "Faster recovery"],
    gradient: "gradient-orange",
  },
  {
    id: "micro-ear-surgery", icon: Ear, title: "Micro Ear Surgery",
    desc: "Precision microscopic ear treatment.",
    longDesc: "Micro ear surgery is performed using operating microscopes to treat conditions such as eardrum perforation and chronic infections.",
    features: ["Tympanoplasty", "Ossicular Reconstruction", "Chronic Ear Infection Treatment", "Microscopic Surgery"],
    fullContent: `Micro ear surgery allows surgeons to repair delicate ear structures with precision.\n\nProcedures include:\n\n• Tympanic membrane repair\n• Middle ear bone reconstruction\n• Removal of infected tissue\n• Hearing restoration procedures\n\nThese techniques ensure precise treatment and better hearing outcomes.`,
    benefits: ["Restored ear function", "Improved hearing", "Minimal tissue damage", "Quick recovery", "Advanced surgical precision"],
    gradient: "gradient-teal",
  },
  {
    id: "digital-hearing-aids", icon: Volume2, title: "Digital Hearing Aids",
    desc: "Modern hearing solutions with custom fitting.",
    longDesc: "Digital hearing aids provide advanced sound processing to improve communication and daily interactions.",
    features: ["Digital Hearing Aids", "Custom Fitting", "Hearing Tests", "Device Maintenance"],
    fullContent: `Our audiology department provides modern digital hearing solutions.\n\nServices include:\n\n• Complete hearing evaluation\n• Selection of suitable hearing aids\n• Custom ear molds\n• Device tuning and maintenance\n• Follow-up hearing assessments\n\nOur goal is to restore comfortable hearing for everyday life.`,
    benefits: ["Better communication", "Improved sound clarity", "Discreet modern devices", "Personalized fitting", "Ongoing support"],
    gradient: "gradient-indigo",
  },
  {
    id: "stapedectomy-ear-surgery", icon: Ear, title: "Stapedectomy",
    desc: "Surgical correction for hearing restoration.",
    longDesc: "This microsurgical procedure restores hearing by inserting a prosthetic device to replace the damaged stapes bone.",
    features: ["Otosclerosis Treatment", "Microsurgical Procedure", "Hearing Restoration", "Prosthetic Implant"],
    fullContent: `Stapedectomy is performed when the stapes bone becomes fixed due to otosclerosis.\n\nThe procedure includes:\n\n• Removal of the damaged stapes bone\n• Placement of a prosthetic implant\n• Restoration of sound transmission\n• Microscope-assisted precision surgery\n\nPatients often experience significant improvement in hearing.`,
    benefits: ["Improved hearing ability", "Permanent hearing restoration", "Advanced microsurgery", "High success rate", "Minimal recovery time"],
    gradient: "gradient-primary",
  },
  {
    id: "cochlear-implant-hearing-restoration", icon: Activity, title: "Cochlear Implantation",
    desc: "Transformative surgery for severe hearing loss.",
    longDesc: "Cochlear implants bypass damaged ear structures and directly stimulate the auditory nerve to enable hearing.",
    features: ["Implant Surgery", "Hearing Rehabilitation", "Device Programming", "Post-implant Therapy"],
    fullContent: `Cochlear implants are used for patients with severe or profound hearing loss.\n\nTreatment process includes:\n\n• Detailed hearing evaluation\n• Surgical implantation of the device\n• External processor fitting\n• Speech and hearing therapy\n\nThis technology enables patients to perceive sound and improve communication.`,
    benefits: ["Restored sound perception", "Improved communication ability", "Advanced hearing technology", "Speech development support", "Long-term hearing improvement"],
    gradient: "gradient-warm",
  },
  {
    id: "throat-cancer-treatment", icon: Stethoscope, title: "Throat Cancer",
    desc: "Comprehensive diagnosis and cancer care.",
    longDesc: "Early detection and treatment are critical for throat cancer. Our specialists provide diagnosis, surgery, and rehabilitation.",
    features: ["Cancer Diagnosis", "Tumor Surgery", "Oncology Collaboration", "Voice Rehabilitation"],
    fullContent: `Throat cancer may affect the voice box or surrounding throat structures.\n\nOur treatment includes:\n\n• Endoscopic tumor evaluation\n• Biopsy and imaging diagnosis\n• Surgical tumor removal\n• Radiation and oncology referral\n• Voice rehabilitation therapy\n\nOur multidisciplinary team ensures comprehensive cancer care.`,
    benefits: ["Early cancer detection", "Advanced surgical treatment", "Improved survival outcomes", "Voice preservation techniques", "Comprehensive oncology care"],
    gradient: "gradient-red",
  },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const serviceIndex = mainServices.findIndex((s) => s.id === slug);
  const service = mainServices[serviceIndex];

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="font-heading text-2xl font-bold">Service not found</h2>
        <button onClick={() => navigate("/services")} className="text-primary font-semibold flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Services
        </button>
      </div>
    );
  }

  const Icon = service.icon;
  const prevService = serviceIndex > 0 ? mainServices[serviceIndex - 1] : null;
  const nextService = serviceIndex < mainServices.length - 1 ? mainServices[serviceIndex + 1] : null;
  const relatedServices = mainServices.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-5 overflow-hidden">
        <div className={`absolute inset-0 ${service.gradient} opacity-[0.04] pointer-events-none`} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10">
          {/* Back button */}
          

          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="mb-6">
              <div className={`w-20 h-20 ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                <Icon className="text-primary-foreground" size={40} />
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              {service.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {service.longDesc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => navigate("/contact")} className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2">
                <Calendar size={18} /> Book Appointment
              </button>
              <a href="tel:+919876543210" className="bg-card border border-border px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors flex items-center gap-2 text-foreground">
                <Phone size={18} /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className={`w-8 h-8 ${service.gradient} rounded-lg flex items-center justify-center`}>
                    <Shield className="text-primary-foreground" size={16} />
                  </div>
                  Comprehensive Overview
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-[15px]">
                  {service.fullContent}
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">What We Offer</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className={`w-10 h-10 ${service.gradient} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <Zap size={18} className="text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-accent" /> Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Contact Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-heading text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-sm opacity-90 mb-4">Talk to our specialists for personalized treatment guidance.</p>
                <a href="tel:+919876543210" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/30 transition-colors w-full justify-center">
                  <Phone size={16} /> +91 98765 43210
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="section-padding border-t border-border/50">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevService ? (
              <button onClick={() => navigate(`/services/${prevService.id}`)} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group flex-1">
                <ArrowLeft size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <p className="font-semibold text-foreground text-sm">{prevService.title}</p>
                </div>
              </button>
            ) : <div className="flex-1" />}
            {nextService && (
              <button onClick={() => navigate(`/services/${nextService.id}`)} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group flex-1 justify-end">
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="font-semibold text-foreground text-sm">{nextService.title}</p>
                </div>
                <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Other <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/services/${s.id}`)}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <div className={`h-1 ${s.gradient}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 ${s.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <s.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ServiceDetail;
