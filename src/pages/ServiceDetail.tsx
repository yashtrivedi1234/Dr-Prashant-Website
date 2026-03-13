import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Baby, Bone, HeartPulse, Smile, CheckCircle2, ArrowLeft, Zap, Activity, Ear, Mic, Wind, Moon, Volume2, Stethoscope  } from "lucide-react";
import CTASection from "@/components/CTASection";

// Service data - same as in Services.tsx
const mainServices = [
  {
    id: "sinusitis-treatment",
    icon: Wind,
    title: "SINUSITIS",
    desc: "Experience improved hearing with advanced hearing aids. These devices amplify sound, enhancing communication and quality of life for those with hearing loss. Explore options for personalized solutions today.",
    longDesc:
      "Sinusitis is a condition where the sinus cavities become inflamed, leading to congestion, headaches, facial pressure, and difficulty breathing. Our clinic offers advanced diagnostic and treatment options to relieve symptoms and restore healthy sinus function.",
    features: [
      "Sinus Endoscopy",
      "Medication Therapy",
      "Balloon Sinuplasty",
      "Chronic Sinusitis Treatment"
    ],
    fullContent: `Sinusitis can significantly affect your daily life. Our ENT specialists provide comprehensive care including:

• Accurate diagnosis using nasal endoscopy
• Medical management with antibiotics and anti-allergy medication
• Balloon sinuplasty for minimally invasive sinus opening
• Endoscopic sinus surgery for chronic cases
• Lifestyle and allergy management guidance

Our goal is to restore comfortable breathing and prevent recurring infections.`,
    benefits: [
      "Relief from sinus pressure",
      "Improved breathing",
      "Reduced headaches",
      "Minimally invasive procedures",
      "Long-term sinus health"
    ],
    gradient: "gradient-blue",
  },

  {
    id: "snoring-treatment",
    icon: Moon,
    title: "SNORING",
    desc: "Snoring, a common sleep issue, results from obstructed airways during sleep, causing vibrations in throat tissues.",
    longDesc:
      "Snoring can disturb sleep quality and may indicate sleep apnea. Our ENT specialists evaluate airway obstruction and provide personalized treatment solutions.",
    features: [
      "Sleep Apnea Evaluation",
      "Nasal Airway Treatment",
      "Lifestyle Guidance",
      "Snoring Surgery"
    ],
    fullContent: `Snoring occurs when airflow through the mouth and nose is obstructed during sleep.

Our treatment includes:

• Nasal blockage correction
• Sleep apnea diagnosis
• Lifestyle and weight management advice
• CPAP therapy guidance
• Surgical options when required

Proper treatment improves sleep quality and overall health.`,
    benefits: [
      "Better sleep quality",
      "Reduced fatigue",
      "Improved breathing",
      "Lower sleep apnea risk",
      "Healthier lifestyle"
    ],
    gradient: "gradient-purple",
  },

  {
    id: "tonsillitis-treatment",
    icon: Smile,
    title: "TONSILLITIS",
    desc: "Tonsillitis is inflammation of the tonsils causing sore throat, fever, and difficulty swallowing.",
    longDesc:
      "Frequent tonsil infections can affect daily life and cause severe throat pain. Our specialists provide both medical and surgical treatments for tonsillitis.",
    features: [
      "Medical Therapy",
      "Tonsillectomy",
      "Infection Management",
      "Pediatric Tonsil Care"
    ],
    fullContent: `Tonsillitis is commonly caused by viral or bacterial infections.

Our care includes:

• Accurate throat examination
• Antibiotic therapy for bacterial infections
• Pain and inflammation management
• Tonsillectomy for recurrent infections
• Post-surgery recovery guidance

Treatment helps reduce recurring throat infections and improve quality of life.`,
    benefits: [
      "Relief from throat pain",
      "Reduced infection frequency",
      "Improved swallowing",
      "Better breathing",
      "Long-term throat health"
    ],
    gradient: "gradient-pink",
  },

  {
    id: "voice-disorder-surgeries",
    icon: Mic,
    title: "VOICE SURGERIES",
    desc: "Voice surgeries treat vocal cord disorders and improve speech and vocal quality.",
    longDesc:
      "Voice disorders can result from nodules, polyps, or vocal cord damage. Our voice specialists perform advanced procedures to restore normal voice function.",
    features: [
      "Vocal Cord Surgery",
      "Nodule Removal",
      "Voice Therapy",
      "Laryngeal Examination"
    ],
    fullContent: `Voice problems may affect speaking or singing ability.

Our voice treatment services include:

• Laryngeal stroboscopy diagnosis
• Vocal cord polyp or nodule removal
• Microsurgical vocal cord procedures
• Voice rehabilitation therapy
• Post-surgery voice care

These treatments help restore clear and strong voice function.`,
    benefits: [
      "Improved voice quality",
      "Better communication",
      "Professional voice recovery",
      "Advanced microsurgery",
      "Faster recovery"
    ],
    gradient: "gradient-orange",
  },

  {
    id: "micro-ear-surgery",
    icon: Ear,
    title: "MICRO EAR SURGERY",
    desc: "Micro Ear Surgery uses advanced techniques for treating delicate ear conditions.",
    longDesc:
      "Micro ear surgery is performed using operating microscopes to treat conditions such as eardrum perforation and chronic infections.",
    features: [
      "Tympanoplasty",
      "Ossicular Reconstruction",
      "Chronic Ear Infection Treatment",
      "Microscopic Surgery"
    ],
    fullContent: `Micro ear surgery allows surgeons to repair delicate ear structures with precision.

Procedures include:

• Tympanic membrane repair
• Middle ear bone reconstruction
• Removal of infected tissue
• Hearing restoration procedures

These techniques ensure precise treatment and better hearing outcomes.`,
    benefits: [
      "Restored ear function",
      "Improved hearing",
      "Minimal tissue damage",
      "Quick recovery",
      "Advanced surgical precision"
    ],
    gradient: "gradient-teal",
  },

  {
    id: "digital-hearing-aids",
    icon: Volume2,
    title: "HEARING AIDS",
    desc: "Hearing aids improve hearing by amplifying sound for individuals with hearing loss.",
    longDesc:
      "Digital hearing aids provide advanced sound processing to improve communication and daily interactions.",
    features: [
      "Digital Hearing Aids",
      "Custom Fitting",
      "Hearing Tests",
      "Device Maintenance"
    ],
    fullContent: `Our audiology department provides modern digital hearing solutions.

Services include:

• Complete hearing evaluation
• Selection of suitable hearing aids
• Custom ear molds
• Device tuning and maintenance
• Follow-up hearing assessments

Our goal is to restore comfortable hearing for everyday life.`,
    benefits: [
      "Better communication",
      "Improved sound clarity",
      "Discreet modern devices",
      "Personalized fitting",
      "Ongoing support"
    ],
    gradient: "gradient-indigo",
  },

  {
    id: "stapedectomy-ear-surgery",
    icon: Ear,
    title: "STAPEDECTOMY",
    desc: "Stapedectomy treats hearing loss caused by otosclerosis by replacing the stapes bone.",
    longDesc:
      "This microsurgical procedure restores hearing by inserting a prosthetic device to replace the damaged stapes bone.",
    features: [
      "Otosclerosis Treatment",
      "Microsurgical Procedure",
      "Hearing Restoration",
      "Prosthetic Implant"
    ],
    fullContent: `Stapedectomy is performed when the stapes bone becomes fixed due to otosclerosis.

The procedure includes:

• Removal of the damaged stapes bone
• Placement of a prosthetic implant
• Restoration of sound transmission
• Microscope-assisted precision surgery

Patients often experience significant improvement in hearing.`,
    benefits: [
      "Improved hearing ability",
      "Permanent hearing restoration",
      "Advanced microsurgery",
      "High success rate",
      "Minimal recovery time"
    ],
    gradient: "gradient-primary",
  },

  {
    id: "cochlear-implant-hearing-restoration",
    icon: Activity,
    title: "COCHLEAR IMPLANTATION",
    desc: "Cochlear implants restore hearing for individuals with severe hearing loss.",
    longDesc:
      "Cochlear implants bypass damaged ear structures and directly stimulate the auditory nerve to enable hearing.",
    features: [
      "Implant Surgery",
      "Hearing Rehabilitation",
      "Device Programming",
      "Post-implant Therapy"
    ],
    fullContent: `Cochlear implants are used for patients with severe or profound hearing loss.

Treatment process includes:

• Detailed hearing evaluation
• Surgical implantation of the device
• External processor fitting
• Speech and hearing therapy

This technology enables patients to perceive sound and improve communication.`,
    benefits: [
      "Restored sound perception",
      "Improved communication ability",
      "Advanced hearing technology",
      "Speech development support",
      "Long-term hearing improvement"
    ],
    gradient: "gradient-warm",
  },

  {
    id: "throat-cancer-treatment",
    icon: Stethoscope   ,
    title: "THROAT CANCER",
    desc: "Throat cancer affects the larynx or oropharynx and requires specialized medical care.",
    longDesc:
      "Early detection and treatment are critical for throat cancer. Our specialists provide diagnosis, surgery, and rehabilitation.",
    features: [
      "Cancer Diagnosis",
      "Tumor Surgery",
      "Oncology Collaboration",
      "Voice Rehabilitation"
    ],
    fullContent: `Throat cancer may affect the voice box or surrounding throat structures.

Our treatment includes:

• Endoscopic tumor evaluation
• Biopsy and imaging diagnosis
• Surgical tumor removal
• Radiation and oncology referral
• Voice rehabilitation therapy

Our multidisciplinary team ensures comprehensive cancer care.`,
    benefits: [
      "Early cancer detection",
      "Advanced surgical treatment",
      "Improved survival outcomes",
      "Voice preservation techniques",
      "Comprehensive oncology care"
    ],
    gradient: "gradient-red",
  },
];

// Helper function to convert slug to title case
const slugToTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = mainServices.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-6">
        
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-background">
      {/* Back Button */}
    

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center mb-6"
            >
              <div className={`${service.gradient} p-6 rounded-2xl text-primary-foreground`}>
                <Icon size={48} />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-center text-muted-foreground leading-relaxed"
            >
              {service.longDesc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Overview</h2>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {service.fullContent}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 mb-6"
              >
                <h3 className="font-bold text-lg text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="font-bold text-lg text-foreground mb-4">What We Offer</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServiceDetail;