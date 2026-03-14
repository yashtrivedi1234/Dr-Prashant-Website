import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, AlertCircle, Zap, CheckCircle2, AlertTriangle, Users, Clock, Pill } from "lucide-react";
import CTASection from "@/components/CTASection";

const OralImmunotherapyClinic = () => {
  const symptoms = [
    {
      title: "Mild to Moderate Reactions",
      icon: AlertCircle,
      items: [
        "Hives or itching",
        "Swelling of lips, face, or throat",
        "Abdominal pain, nausea, vomiting, or diarrhea",
        "Itchy or watery eyes",
        "Sneezing or nasal congestion",
      ],
    },
    {
      title: "Severe Reactions (Anaphylaxis)",
      icon: AlertTriangle,
      items: [
        "Difficulty breathing",
        "Swelling of the throat or tongue",
        "Rapid pulse or drop in blood pressure",
        "Dizziness or fainting",
        "Loss of consciousness",
      ],
    },
  ];

  const benefits = [
    {
      title: "Desensitization",
      desc: "Helps the immune system gradually adjust to an allergen, reducing the likelihood or severity of allergic reactions after accidental exposure.",
    },
    {
      title: "Increased Tolerance",
      desc: "OIT builds long-term tolerance to food allergens, allowing patients to consume safe amounts without severe reactions.",
    },
    {
      title: "Improved Quality of Life",
      desc: "Reduces anxiety and fear around food allergies, allowing patients to enjoy social situations and meals with family.",
    },
    {
      title: "Reduced Emergency Visits",
      desc: "Decreases the need for emergency medical interventions due to allergic reactions.",
    },
  ];

  const risks = [
    {
      title: "Allergic Reactions During Treatment",
      desc: "Patients may experience mild to moderate allergic reactions during the treatment phases.",
    },
    {
      title: "Gastrointestinal Symptoms",
      desc: "Some patients experience stomach discomfort, nausea, or other digestive effects.",
    },
    {
      title: "Risk of Anaphylaxis",
      desc: "While rare, severe reactions can occur, especially during dose escalation phases.",
    },
  ];

  const eligibility = [
    {
      title: "Specific Food Allergen",
      desc: "The type and severity of the food allergy involved",
    },
    {
      title: "Allergy Severity",
      desc: "Assessment of how severe the allergic reactions have been",
    },
    {
      title: "Patient Age & History",
      desc: "Age-appropriate assessment and review of medical history",
    },
    {
      title: "Previous Reactions",
      desc: "Evaluation of past reactions to the particular food",
    },
    {
      title: "Treatment Commitment",
      desc: "Ability to commit to the treatment schedule and follow-up appointments",
    },
    {
      title: "Medical Consultation",
      desc: "Discussion with healthcare provider to determine suitability",
    },
  ];

  const phases = [
    {
      phase: "Initial Phase",
      title: "Dose Build-Up",
      desc: "Small amounts of the allergen are introduced and gradually increased under medical supervision.",
      duration: "Weeks to months",
    },
    {
      phase: "Maintenance Phase",
      title: "Ongoing Tolerance",
      desc: "Patient continues consuming a consistent daily dose of the allergenic food.",
      duration: "Months to years",
    },
    {
      phase: "Final Phase",
      title: "Long-term Management",
      desc: "Some patients may reduce or stop daily doses while maintaining tolerance.",
      duration: "Varies",
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
           

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                Food Allergy Treatment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                Oral Immunotherapy
              </span>
              {" "}(OIT)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto"
            >
              Advanced food allergy treatment through controlled allergen exposure to build tolerance and improve quality of life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is OIT Section */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Pill className="w-8 h-8 text-indigo-600" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What is Oral Immunotherapy?</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Oral Immunotherapy (OIT) is a medical treatment for food allergies, in which a person is gradually exposed to small, controlled amounts of the allergenic food in order to build up tolerance.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The goal of OIT is to desensitize the immune system to the food allergen, reducing the severity of allergic reactions over time and improving the patient's ability to safely tolerate accidental exposures.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6">
              <p className="text-muted-foreground">
                OIT must be performed under the supervision of trained healthcare providers in a medical setting, particularly during the initial phases of treatment, to ensure patient safety.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-indigo-600" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">How Oral Immunotherapy Works</h2>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">The Process</h3>
                <p className="text-muted-foreground mb-4">
                  Oral immunotherapy works by introducing small amounts of the food allergen into the body, typically in the form of a powder, liquid, or capsule.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Doses are started at very low levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Gradually increased over weeks or months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Administered under healthcare provider supervision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Goal is to "train" the immune system to be less reactive</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Medical Supervision</h3>
                <p className="text-muted-foreground">
                  Because of potential risks, OIT is typically done in a medical setting, especially during the dose escalation phase, with medical staff available to manage any reactions that may occur.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Common Food Allergy Symptoms
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {symptoms.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Benefits of Oral Immunotherapy
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Ongoing Treatment Phases
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 border border-indigo-200"
                >
                  <div className="text-sm font-semibold text-indigo-600 mb-2">{phase.phase}</div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{phase.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {phase.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risks and Side Effects */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Risks and Side Effects
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {risks.map((risk, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500"
                >
                  <h3 className="font-heading font-bold text-foreground mb-3">{risk.title}</h3>
                  <p className="text-muted-foreground">{risk.desc}</p>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8"
              >
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Important:</span> While OIT is generally considered safe when done under medical supervision, it carries risks, especially during initial treatment stages. Medical staff are available at all times to manage any reactions that may occur.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Eligibility for Oral Immunotherapy
            </motion.h2>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-8">
              <p className="text-foreground font-semibold mb-4">
                Not all patients with food allergies are candidates for OIT. The decision to pursue OIT is based on:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {eligibility.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg mt-8 border-l-4 border-indigo-500"
            >
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Personalized Consultation</h3>
                  <p className="text-muted-foreground">
                    Our specialists will conduct a thorough evaluation to determine if OIT is the right treatment option for your specific food allergy needs. Contact us to schedule a consultation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default OralImmunotherapyClinic;
