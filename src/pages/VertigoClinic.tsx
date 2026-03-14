import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, AlertCircle, Zap, Pill, Dumbbell, Leaf, Home, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

const VertigoClinic = () => {
  const causes = [
    {
      title: "Peripheral Vertigo",
      items: [
        {
          name: "BPPV",
          desc: "Benign Paroxysmal Positional Vertigo - calcium crystals in the inner ear",
        },
        {
          name: "Meniere's Disease",
          desc: "Inner ear disorder causing vertigo, hearing loss, and tinnitus",
        },
        {
          name: "Vestibular Neuritis or Labyrinthitis",
          desc: "Inflammation of the vestibular nerve or inner ear labyrinth",
        },
        {
          name: "Ear Infections or Blockages",
          desc: "Infections or blockages interfering with balance",
        },
      ],
    },
    {
      title: "Central Vertigo",
      items: [
        {
          name: "Brainstem or Cerebellum Disorders",
          desc: "Stroke, multiple sclerosis, or tumors affecting balance control",
        },
        {
          name: "Vestibular Migraines",
          desc: "Vertigo as a symptom of migraines due to neurological issues",
        },
        {
          name: "Neurological Conditions",
          desc: "Diseases like Parkinson's disease contributing to vertigo",
        },
      ],
    },
  ];

  const treatments = [
    {
      icon: Pill,
      title: "Medications",
      items: [
        "Antihistamines for nausea and dizziness",
        "Benzodiazepines for severe vertigo and anxiety",
        "Anti-nausea medications",
        "Corticosteroids for inflammation",
      ],
    },
    {
      icon: Dumbbell,
      title: "Physical Therapy",
      items: [
        "Vestibular Rehabilitation Therapy (VRT)",
        "Epley Maneuver for BPPV",
        "Balance retraining exercises",
        "Head and body coordination movements",
      ],
    },
    {
      icon: Zap,
      title: "Surgical Treatment",
      items: [
        "Surgical intervention for structural issues",
        "Fluid drainage procedures",
        "Correction of ear abnormalities",
        "Specialist-recommended procedures",
      ],
    },
  ];

  const exercises = [
    {
      name: "Brandt-Daroff Exercises",
      desc: "Sit on the edge of a bed, turn your head 45 degrees to one side, then lie down quickly on the opposite side. Repeat several times on each side.",
    },
    {
      name: "Cawthorne-Cooksey Exercises",
      desc: "A series of head, body, and eye movements designed to improve balance. Start with simple movements and progress to more challenging ones.",
    },
    {
      name: "Balance Training",
      desc: "Stand on one foot or practice walking heel-to-toe to help improve balance over time.",
    },
    {
      name: "Gaze Stabilization Exercises",
      desc: "Focus on a stationary object while moving your head side to side to help the brain compensate for balance disorders.",
    },
  ];

  const homeRemedies = [
    {
      title: "Stay Hydrated",
      desc: "Dehydration can worsen dizziness, so drinking plenty of fluids helps reduce symptoms.",
    },
    {
      title: "Ginger",
      desc: "Known for anti-nausea properties, ginger tea or supplements can reduce dizziness.",
    },
    {
      title: "Apple Cider Vinegar",
      desc: "Mixing apple cider vinegar with honey and water may help maintain balance.",
    },
    {
      title: "Vitamin D",
      desc: "Adequate Vitamin D levels can improve balance and reduce vertigo attacks.",
    },
    {
      title: "Sleep Position",
      desc: "Avoid sleeping on the affected side and use multiple pillows to elevate the head slightly.",
    },
    {
      title: "Avoid Sudden Movements",
      desc: "Stay still and avoid sudden head movements when experiencing vertigo symptoms.",
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
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
          

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                Balance & Dizziness Treatment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Vertigo Clinic
              </span>
              {" "}in Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto"
            >
              Specialized treatment for vertigo and balance disorders with expert diagnosis and comprehensive care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is Vertigo Section */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-purple-600" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What is Vertigo?</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Vertigo is a sensation of spinning or feeling off-balance, often caused by an issue in the inner ear or the brain. Unlike dizziness, which refers to a feeling of lightheadedness, vertigo is specifically the sensation that either the surroundings are moving, or the person is moving when they are actually still.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              It can occur suddenly and may be associated with nausea, vomiting, and difficulty walking or standing. Our clinic specializes in diagnosing and treating vertigo to help you regain balance and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes of Vertigo Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Causes of Vertigo
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {causes.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        variants={itemVariants}
                        className="pb-4 border-b border-gray-100 last:border-b-0"
                      >
                        <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Treatment for Vertigo
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
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      {treatment.title}
                    </h3>

                    <ul className="space-y-3">
                      {treatment.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
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

      {/* Exercises Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Exercises for Vertigo
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {exercises.map((exercise, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {exercise.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{exercise.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Home Remedies Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Home Remedies for Vertigo
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {homeRemedies.map((remedy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {remedy.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{remedy.desc}</p>
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

export default VertigoClinic;
