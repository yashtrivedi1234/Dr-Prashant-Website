import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowLeft, ArrowRight, Zap, Activity, Ear,
  Mic, Wind, Moon, Volume2, Stethoscope, Smile, Phone, Calendar, Shield,
} from "lucide-react";
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
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <h2 className="font-heading font-bold text-foreground text-xl sm:text-2xl">
          Service not found
        </h2>
        <button
          onClick={() => navigate("/services")}
          className="text-primary font-semibold flex items-center gap-2 text-sm sm:text-base"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
      </div>
    );
  }

  const Icon = service.icon;
  const prevService    = serviceIndex > 0 ? mainServices[serviceIndex - 1] : null;
  const nextService    = serviceIndex < mainServices.length - 1 ? mainServices[serviceIndex + 1] : null;
  const relatedServices = mainServices.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-background">

      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden">
        <div className={`absolute inset-0 ${service.gradient} opacity-[0.04] pointer-events-none`} />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10 px-4 sm:px-6">

        

          <div className="max-w-4xl">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-4 sm:mb-5 lg:mb-6"
            >
              <div className={`
                ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl
                w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
              `}>
                <Icon className="text-primary-foreground" size={28} />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground leading-tight mb-3 sm:mb-4
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            >
              {service.title}
            </motion.h1>

            {/* Long description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-3xl
                text-sm sm:text-base md:text-lg lg:text-xl"
            >
              {service.longDesc}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6"
            >
              <button
                onClick={() => navigate("/contact")}
                className="gradient-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2
                  px-5 py-2.5 text-sm
                  sm:px-6 sm:py-3 sm:text-base"
              >
                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                Book Appointment
              </button>
              <a
                href="tel:+919876543210"
                className="bg-card border border-border font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2 text-foreground rounded-xl
                  px-5 py-2.5 text-sm
                  sm:px-6 sm:py-3 sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">

              {/* Overview card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl sm:rounded-2xl border border-border/50 shadow-sm
                  p-5 sm:p-6 lg:p-8"
              >
                <h2 className="font-heading font-bold text-foreground flex items-center gap-2 sm:gap-3
                  text-lg sm:text-xl md:text-2xl lg:text-3xl
                  mb-4 sm:mb-5 lg:mb-6">
                  <div className={`${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0
                    w-7 h-7 sm:w-8 sm:h-8`}>
                    <Shield className="text-primary-foreground" size={14} />
                  </div>
                  Comprehensive Overview
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed
                  text-sm sm:text-[15px]">
                  {service.fullContent}
                </div>
              </motion.div>

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4
                  text-base sm:text-lg lg:text-xl">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group rounded-xl
                        p-3 sm:p-4"
                    >
                      <div className={`${service.gradient} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform
                        w-9 h-9 sm:w-10 sm:h-10`}>
                        <Zap size={15} className="text-primary-foreground sm:w-[18px] sm:h-[18px]" />
                      </div>
                      <span className="text-foreground font-medium text-xs sm:text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl sm:rounded-2xl border border-border/50 shadow-sm
                  p-4 sm:p-5 lg:p-6"
              >
                <h3 className="font-heading font-bold text-foreground flex items-center gap-2 mb-3 sm:mb-4
                  text-base sm:text-lg">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 sm:w-5 sm:h-5" />
                  Key Benefits
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-2.5 sm:gap-3 group"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 size={10} className="text-accent sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-muted-foreground text-xs sm:text-sm leading-snug">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="gradient-primary rounded-xl sm:rounded-2xl text-primary-foreground
                  p-4 sm:p-5 lg:p-6"
              >
                <h3 className="font-heading font-bold mb-1.5 sm:mb-2
                  text-base sm:text-lg">
                  Need Help?
                </h3>
                <p className="opacity-90 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Talk to our specialists for personalized treatment guidance.
                </p>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm font-semibold hover:bg-white/30 transition-colors w-full justify-center rounded-xl
                    px-4 py-2 text-xs
                    sm:py-2.5 sm:text-sm"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  +91 98765 43210
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section className="section-padding border-t border-border/50">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
            {prevService ? (
              <button
                onClick={() => navigate(`/services/${prevService.id}`)}
                className="flex items-center gap-2 sm:gap-3 bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group flex-1
                  p-3 sm:p-4 rounded-xl"
              >
                <ArrowLeft size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <div className="text-left">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Previous</span>
                  <p className="font-semibold text-foreground text-xs sm:text-sm leading-tight">
                    {prevService.title}
                  </p>
                </div>
              </button>
            ) : <div className="flex-1 hidden sm:block" />}

            {nextService && (
              <button
                onClick={() => navigate(`/services/${nextService.id}`)}
                className="flex items-center gap-2 sm:gap-3 bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group flex-1 justify-end
                  p-3 sm:p-4 rounded-xl"
              >
                <div className="text-right">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Next</span>
                  <p className="font-semibold text-foreground text-xs sm:text-sm leading-tight">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="font-heading font-bold text-foreground
              text-2xl sm:text-3xl">
              Other <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className={`${s.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3 sm:mb-4
                    w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12`}>
                    <s.icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1.5 sm:mb-2
                    text-base sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground mb-2.5 sm:mb-3
                    text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all
                    text-xs sm:text-sm">
                    Learn More <ArrowRight size={13} className="sm:w-3.5 sm:h-3.5" />
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