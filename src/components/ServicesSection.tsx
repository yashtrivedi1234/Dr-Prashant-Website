import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Ear, Activity, Mic, Wind, LucideIcon, ArrowRight, Moon, Smile, Volume2, Stethoscope } from "lucide-react";

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
    desc: "Throat cancer is the general term for cancer that affects one or more parts of your throat. Usually, people who have throat cancer have cancer in their larynx (voice box) or their oropharynx (the middle part of their throat).",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <span className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            <span className="gradient-text">Treatments</span> We Offer
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/services/${s.id}`)}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow group border border-border/50 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-full h-full ${s.gradient}`} />
              </div>
              <div
                className={`w-14 h-14 ${s.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}
              >
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
