import { motion } from "framer-motion";
import {
  AlertCircle, Zap, Pill, Dumbbell,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const causes = [
  {
    title: "Peripheral Vertigo",
    items: [
      { name: "BPPV",                              desc: "Benign Paroxysmal Positional Vertigo - calcium crystals in the inner ear" },
      { name: "Meniere's Disease",                 desc: "Inner ear disorder causing vertigo, hearing loss, and tinnitus" },
      { name: "Vestibular Neuritis or Labyrinthitis", desc: "Inflammation of the vestibular nerve or inner ear labyrinth" },
      { name: "Ear Infections or Blockages",       desc: "Infections or blockages interfering with balance" },
    ],
  },
  {
    title: "Central Vertigo",
    items: [
      { name: "Brainstem or Cerebellum Disorders", desc: "Stroke, multiple sclerosis, or tumors affecting balance control" },
      { name: "Vestibular Migraines",              desc: "Vertigo as a symptom of migraines due to neurological issues" },
      { name: "Neurological Conditions",           desc: "Diseases like Parkinson's disease contributing to vertigo" },
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
  { title: "Stay Hydrated",       desc: "Dehydration can worsen dizziness, so drinking plenty of fluids helps reduce symptoms." },
  { title: "Ginger",              desc: "Known for anti-nausea properties, ginger tea or supplements can reduce dizziness." },
  { title: "Apple Cider Vinegar", desc: "Mixing apple cider vinegar with honey and water may help maintain balance." },
  { title: "Vitamin D",           desc: "Adequate Vitamin D levels can improve balance and reduce vertigo attacks." },
  { title: "Sleep Position",      desc: "Avoid sleeping on the affected side and use multiple pillows to elevate the head slightly." },
  { title: "Avoid Sudden Movements", desc: "Stay still and avoid sudden head movements when experiencing vertigo symptoms." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VertigoClinic = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400 rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center px-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 sm:mb-4"
            >
              <span className="inline-block bg-purple-100 text-purple-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase">
                Balance &amp; Dizziness Treatment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Vertigo Clinic
              </span>{" "}
              in Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-3xl mx-auto
                text-sm sm:text-base md:text-lg"
            >
              Specialized treatment for vertigo and balance disorders with
              expert diagnosis and comprehensive care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── What is Vertigo ── */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-5">
              <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600 shrink-0 mt-0.5 sm:mt-0" />
              <h2 className="font-heading font-bold text-foreground leading-tight
                text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                What is Vertigo?
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed
              text-sm sm:text-base md:text-lg">
              <p>
                Vertigo is a sensation of spinning or feeling off-balance, often
                caused by an issue in the inner ear or the brain. Unlike
                dizziness, which refers to a feeling of lightheadedness, vertigo
                is specifically the sensation that either the surroundings are
                moving, or the person is moving when they are actually still.
              </p>
              <p>
                It can occur suddenly and may be associated with nausea,
                vomiting, and difficulty walking or standing. Our clinic
                specializes in diagnosing and treating vertigo to help you
                regain balance and quality of life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Causes ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-foreground text-center
                mb-8 sm:mb-10 lg:mb-12
                text-2xl sm:text-3xl md:text-4xl"
            >
              Causes of Vertigo
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {causes.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8"
                >
                  <h3 className="font-heading font-bold text-foreground mb-4 sm:mb-5 lg:mb-6
                    text-lg sm:text-xl lg:text-2xl">
                    {category.title}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-1.5
                          text-sm sm:text-base">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatment ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-foreground text-center
                mb-8 sm:mb-10 lg:mb-12
                text-2xl sm:text-3xl md:text-4xl"
            >
              Treatment for Vertigo
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {treatments.map((treatment, idx) => {
                const Icon = treatment.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow
                      p-5 sm:p-6 lg:p-8"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>

                    <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4
                      text-base sm:text-lg lg:text-xl">
                      {treatment.title}
                    </h3>

                    <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                      {treatment.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2.5 sm:gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
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

      {/* ── Exercises ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-foreground text-center
                mb-8 sm:mb-10 lg:mb-12
                text-2xl sm:text-3xl md:text-4xl"
            >
              Exercises for Vertigo
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {exercises.map((exercise, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg border-l-4 border-purple-500
                    p-4 sm:p-6 lg:p-8"
                >
                  <h3 className="font-heading font-bold text-foreground mb-2 sm:mb-3
                    text-base sm:text-lg lg:text-xl">
                    {exercise.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed
                    text-xs sm:text-sm lg:text-base">
                    {exercise.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Home Remedies ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-foreground text-center
                mb-8 sm:mb-10 lg:mb-12
                text-2xl sm:text-3xl md:text-4xl"
            >
              Home Remedies for Vertigo
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8">
              {homeRemedies.map((remedy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100
                    p-4 sm:p-5 lg:p-6"
                >
                  <h3 className="font-heading font-bold text-foreground mb-1.5 sm:mb-2
                    text-sm sm:text-base lg:text-lg">
                    {remedy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed
                    text-xs sm:text-sm lg:text-base">
                    {remedy.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default VertigoClinic;