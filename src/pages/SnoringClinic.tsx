import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, AlertCircle, Zap, Pill, Dumbbell, Leaf, Wind, Moon } from "lucide-react";
import CTASection from "@/components/CTASection";

const SnoringClinic = () => {
  const causes = [
    {
      title: "Common Causes",
      items: [
        {
          name: "Airway Obstruction",
          desc: "Nasal congestion, enlarged tonsils/adenoids, or soft palate issues",
        },
        {
          name: "Mouth Breathing",
          desc: "Breathing through mouth instead of nose causes throat tissue vibration",
        },
        {
          name: "Age",
          desc: "Throat muscles weaken with age, narrowing the airway",
        },
        {
          name: "Obesity",
          desc: "Extra weight around the neck restricts the airway",
        },
        {
          name: "Nasal Problems",
          desc: "Blocked passages from allergies, infections, or deviated septum",
        },
        {
          name: "Alcohol or Sedatives",
          desc: "These substances relax throat muscles and obstruct airflow",
        },
        {
          name: "Sleep Position",
          desc: "Sleeping on your back causes tissues to collapse into the airway",
        },
        {
          name: "Sleep Apnea",
          desc: "Serious condition where airway becomes completely blocked during sleep",
        },
      ],
    },
  ];

  const treatments = [
    {
      icon: Moon,
      title: "Lifestyle Changes",
      items: [
        "Sleep on your side to keep airway open",
        "Lose weight to reduce neck tissue pressure",
        "Avoid alcohol and sedatives before bedtime",
        "Establish consistent sleep schedule",
        "Clear nasal passages with humidifier",
        "Stay well hydrated throughout the day",
      ],
    },
    {
      icon: Pill,
      title: "Medical Treatments",
      items: [
        "CPAP (Continuous Positive Airway Pressure) machines",
        "Oral appliances to reposition jaw/tongue",
        "Nasal sprays and decongestants",
        "Sleep apnea diagnosis and management",
        "Customized therapy plans",
      ],
    },
    {
      icon: Zap,
      title: "Surgical Options",
      items: [
        "Uvulopalatopharyngoplasty (UPPP)",
        "Tonsillectomy and Adenoidectomy",
        "Septoplasty for deviated septum",
        "Throat tissue removal procedures",
        "Airway widening techniques",
      ],
    },
  ];

  const therapies = [
    {
      name: "Steam Inhalation",
      desc: "Regular steam inhalation helps clear nasal passages and keeps throat tissues lubricated.",
    },
    {
      name: "Nasal Saline Sprays",
      desc: "Saline sprays help reduce nasal congestion and improve airflow during sleep.",
    },
    {
      name: "Specialized Throat Exercises",
      desc: "Targeted exercises strengthen throat muscles and reduce tissue collapse.",
    },
    {
      name: "Sleep Hygiene Practices",
      desc: "Proper sleep habits and environmental adjustments reduce snoring frequency.",
    },
  ];

  const tips = [
    {
      title: "Sleep Position",
      desc: "Use pillows to keep yourself on your side and prevent rolling onto your back.",
    },
    {
      title: "Humidity Control",
      desc: "Use a humidifier in your bedroom to keep airways moist and reduce vibrations.",
    },
    {
      title: "Nasal Strips",
      desc: "Adhesive nasal strips open nasal passages mechanically without medication.",
    },
    {
      title: "Bedroom Environment",
      desc: "Keep your bedroom cool, dark, and well-ventilated for better sleep quality.",
    },
    {
      title: "Weight Management",
      desc: "Maintaining a healthy weight reduces pressure on the airway and throat tissues.",
    },
    {
      title: "Schedule Consultation",
      desc: "If snoring is persistent or loud, consult our specialists for evaluation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-5 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
         

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                Sleep Quality & Breathing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Snoring Clinic
              </span>
              {" "}in Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto"
            >
              Expert diagnosis and personalized treatment for snoring and sleep apnea to restore restful sleep.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is Snoring Section */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What is Snoring?</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Snoring is the sound produced when airflow through the mouth and nose is partially obstructed during sleep. It occurs when the tissues in the throat vibrate due to the flow of air, leading to a distinctive noise.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Snoring can vary in intensity, from soft and mild to loud and disruptive. It commonly affects people during sleep, but it can also disrupt the sleep of others in the same room.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              If snoring is loud, persistent, or accompanied by pauses in breathing, it's important to consult a healthcare provider for evaluation and treatment, as it may indicate sleep apnea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes of Snoring Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Causes of Snoring
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {causes[0].items.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Treatments for Snoring
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, idx) => {
                const Icon = treatment.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      {treatment.title}
                    </h3>

                    <ul className="space-y-3">
                      {treatment.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Therapeutic Options
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {therapies.map((therapy, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {therapy.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{therapy.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prevention & Management Tips */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Expert Tips for Better Sleep
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {tips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default SnoringClinic;
