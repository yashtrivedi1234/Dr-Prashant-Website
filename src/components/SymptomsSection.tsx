import { motion } from "framer-motion";
import { Ear, Waves, Wind, MoonStar, AudioLines, HeartPulse } from "lucide-react";

const symptoms = [
  {
    title: "Ear Pain",
    text: "Pain, blockage, ringing, discharge, or repeated ear infections.",
    icon: Ear,
    tone: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Sinus & Nose Issues",
    text: "Blocked nose, sinus pressure, post-nasal drip, or chronic sneezing.",
    icon: Wind,
    tone: "bg-teal/10 text-teal border-teal/20",
  },
  {
    title: "Allergy Symptoms",
    text: "Seasonal allergy flare-ups, itching, watery eyes, or recurrent rhinitis.",
    icon: HeartPulse,
    tone: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Vertigo & Dizziness",
    text: "Spinning sensation, balance issues, nausea, or sudden motion-triggered dizziness.",
    icon: Waves,
    tone: "bg-warm/10 text-warm border-warm/20",
  },
  {
    title: "Snoring & Sleep",
    text: "Loud snoring, mouth breathing, poor sleep quality, or daytime fatigue.",
    icon: MoonStar,
    tone: "bg-violet-500/10 text-violet-600 border-violet-200",
  },
  {
    title: "Hearing Loss",
    text: "Reduced hearing clarity, needing repetition, or persistent sound distortion.",
    icon: AudioLines,
    tone: "bg-sky-500/10 text-sky-600 border-sky-200",
  },
];

const SymptomsSection = () => {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 gradient-warm text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Common Symptoms
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            What Patients Usually
            <span className="gradient-text"> Come In For</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-muted-foreground">
            Patients often identify with symptoms before they identify with a specialty. This section helps them
            quickly recognize whether the clinic is relevant to their concern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {symptoms.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group rounded-[26px] border border-border/70 bg-background p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.tone}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
