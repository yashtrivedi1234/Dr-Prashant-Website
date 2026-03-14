import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Ear, Activity, Mic, Wind, LucideIcon,
  ArrowRight, Moon, Smile, Volume2, Stethoscope,
} from "lucide-react";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: "sinusitis-treatment",
    icon: Wind,
    title: "SINUSITIS",
    desc: "Experience improved hearing with advanced hearing aids. These devices amplify sound, enhancing communication and quality of life for those with hearing loss. Explore options for personalized solutions today.",
    gradient: "gradient-blue",
  },
  {
    id: "snoring-treatment",
    icon: Moon,
    title: "SNORING",
    desc: "Snoring, a common sleep issue, results from obstructed airways during sleep, causing vibrations in throat tissues. It can disrupt sleep quality and indicate underlying health concerns, requiring evaluation and management.",
    gradient: "gradient-purple",
  },
  {
    id: "tonsillitis-treatment",
    icon: Smile,
    title: "TONSILLITIS",
    desc: "Tonsillitis is inflammation of the tonsils, causing sore throat, difficulty swallowing, and fever. It's often viral but can be bacterial. Treatment includes rest, fluids, and sometimes antibiotics.",
    gradient: "gradient-pink",
  },
  {
    id: "voice-disorder-surgeries",
    icon: Mic,
    title: "VOICE SURGERIES",
    desc: "Voice surgeries aim to treat vocal cord disorders, enhancing voice quality and function. Procedures range from nodules removal to vocal fold reconstruction, tailored to individual needs for improved speech and singing.",
    gradient: "gradient-orange",
  },
  {
    id: "micro-ear-surgery",
    icon: Ear,
    title: "MICRO EAR SURGERY",
    desc: "Micro Ear Surgery utilizes advanced techniques and instruments for precise treatment of ear disorders. Minimally invasive, it ensures improved outcomes and faster recovery for patients with various ear conditions.",
    gradient: "gradient-teal",
  },
  {
    id: "digital-hearing-aids",
    icon: Volume2,
    title: "HEARING AIDS",
    desc: "Hearing aids are small devices designed to improve hearing for individuals with hearing loss. They amplify sound and enhance communication, offering a better quality of life for those affected.",
    gradient: "gradient-indigo",
  },
  {
    id: "stapedectomy-ear-surgery",
    icon: Ear,
    title: "Stapedectomy",
    desc: "Stapedectomy is a surgical procedure to treat hearing loss caused by otosclerosis. It involves replacing the stapes bone with a prosthetic device to restore hearing function. It's a delicate yet effective intervention.",
    gradient: "gradient-primary",
  },
  {
    id: "cochlear-implant-hearing-restoration",
    icon: Activity,
    title: "Cochlear Implantation",
    desc: "Cochlear implantation, a transformative procedure, restores hearing for those with severe hearing loss. It involves surgically implanting a device to stimulate the auditory nerve, enabling sound perception and communication.",
    gradient: "gradient-warm",
  },
  {
    id: "throat-cancer-treatment",
    icon: Stethoscope,
    title: "Throat Cancer",
    desc: "Throat cancer affects one or more parts of your throat — usually the larynx (voice box) or oropharynx. Early diagnosis and specialist-led treatment are key to effective management and recovery.",
    gradient: "gradient-red",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="section-padding bg-section-alt overflow-hidden"
    >
      <div className="container-main">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight
            text-2xl sm:text-3xl md:text-4xl">
            <span className="gradient-text">Treatments</span> We Offer
          </h2>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.5) }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/services/${s.id}`)}
              className="
                bg-card rounded-2xl border border-border/50 shadow-sm
                hover:shadow-2xl transition-shadow
                group relative overflow-hidden cursor-pointer
                p-5 sm:p-6 lg:p-8
                flex flex-col
              "
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-full h-full ${s.gradient}`} />
              </div>

              {/* Icon */}
              <div className={`
                ${s.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0
                w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                mb-4 sm:mb-5
              `}>
                <s.icon
                  className="text-primary-foreground"
                  size={20}
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-foreground mb-2 sm:mb-3
                text-base sm:text-lg lg:text-xl leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed flex-1
                text-xs sm:text-sm mb-4">
                {s.desc}
              </p>

              {/* CTA link */}
              <div className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all
                text-xs sm:text-sm mt-auto">
                Explore More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;