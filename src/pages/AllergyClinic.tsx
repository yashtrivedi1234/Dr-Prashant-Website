import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, AlertCircle, Clock, Zap, DollarSign, ClipboardList, Pill, Apple, HelpCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const AllergyClinic = () => {
  const faqs = [
    {
      icon: Clock,
      title: "How long does allergy testing take?",
      answer: "Allergy testing appointments typically take 90 minutes, but may take longer depending on the results of the test and the consultation time with your provider.",
    },
    {
      icon: Zap,
      title: "What allergens do you test for?",
      answer: "Our allergy tests cover a panel for up to 58 allergens, including molds, tree pollen, weeds, pets, and other lesser known but common allergens. We do not test for venom allergies.",
    },
    {
      icon: DollarSign,
      title: "How much does allergy testing cost?",
      answer: "The cost of allergy testing can vary depending on if you decide to use insurance, if your deductible has been met, and how much the insurance company will cover. We offer self-pay rates for both adult and pediatric allergy testing.",
    },
    {
      icon: ClipboardList,
      title: "How should I prepare for my environmental allergy test?",
      answer: "In order for your allergy test to be as accurate as possible, refrain from taking allergy medications and treatments for at least five days before your appointment. It's also necessary to consult with a nurse before your appointment if you're on any prescription medications.",
    },
    {
      icon: Pill,
      title: "What treatment options are available?",
      answer: "After your allergy test, your allergist will consult with you and create a custom treatment plan based on your unique needs. Treatment may include allergy shots, allergy drops, or ExACT Immunoplasty.",
    },
    {
      icon: Apple,
      title: "Do you offer food allergy testing?",
      answer: "Yes! We offer food allergy testing, but this is a separate testing process with unique treatment options. Please consult with your allergist for more information.",
    },
  ];

  const allergenCategories = [
    {
      title: "Tree Pollen Allergens",
      items: ["Oak", "Maple", "Birch", "Cedar", "Pine"],
    },
    {
      title: "Weed Allergens",
      items: ["Ragweed", "Tumbleweed", "Lamb's Quarters", "Goosefoot"],
    },
    {
      title: "Pet & Dust Allergens",
      items: ["Cat Dander", "Dog Dander", "Dust Mites", "Cockroach"],
    },
    {
      title: "Mold & Fungal Allergens",
      items: ["Alternaria", "Aspergillus", "Cladosporium", "Penicillium"],
    },
    {
      title: "Grass Allergens",
      items: ["Timothy Grass", "Bermuda Grass", "Orchard Grass"],
    },
    {
      title: "Other Allergens",
      items: ["Feathers", "Plant Pollens", "Environmental Triggers"],
    },
  ];

  const treatments = [
    {
      name: "Allergy Shots",
      desc: "Immunotherapy injections that gradually desensitize your immune system to allergens.",
    },
    {
      name: "Allergy Drops",
      desc: "Sublingual immunotherapy drops placed under the tongue for allergen desensitization.",
    },
    {
      name: "ExACT Immunoplasty",
      desc: "Advanced immunotherapy technique for targeted allergen treatment.",
    },
    {
      name: "Antihistamines",
      desc: "Medications to reduce allergic symptoms and reactions.",
    },
    {
      name: "Decongestants",
      desc: "Medications to clear nasal passages and improve breathing.",
    },
    {
      name: "Nasal Corticosteroids",
      desc: "Nasal sprays to reduce inflammation and allergic symptoms.",
    },
  ];

  const testingProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      desc: "Meet with our allergist to discuss your symptoms and allergic history.",
    },
    {
      step: "2",
      title: "Allergy Testing",
      desc: "Undergo comprehensive skin prick testing or blood tests for up to 58 allergens.",
    },
    {
      step: "3",
      title: "Analysis & Results",
      desc: "Our specialists analyze your results to identify your specific allergens.",
    },
    {
      step: "4",
      title: "Treatment Planning",
      desc: "Create a personalized treatment plan based on your allergy profile.",
    },
    {
      step: "5",
      title: "Follow-Up Care",
      desc: "Regular monitoring and adjustments to ensure optimal allergy management.",
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
           

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                Comprehensive Allergy Testing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center leading-tight"
            >
              Best <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Allergy Specialist Clinic
              </span>
              {" "}in Telibagh Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto"
            >
              Easy, streamlined allergy testing process with comprehensive allergen panels to identify your seasonal and environmental allergies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-green-600" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">About Our Allergy Testing</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Allergy testing at Tanu ENT Vertigo Allergy Clinic is an easy, streamlined process designed to quickly get you the relief you need. Our allergy panels cover allergens to help identify your seasonal and environmental allergies.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              After your allergy test, our ENT allergist will create a custom treatment plan designed for your unique allergy profile. We use state-of-the-art testing methods and comprehensive allergen panels to ensure accurate diagnosis and effective treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Our Testing Process
            </motion.h2>

            <div className="grid md:grid-cols-5 gap-6">
              {testingProcess.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  {idx < testingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-green-500" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allergen Coverage */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Comprehensive Allergen Coverage
            </motion.h2>

            <div className="special-bg rounded-2xl p-8 mb-8">
              <p className="text-center text-foreground font-semibold text-lg mb-2">
                Up to 58 Different Allergens
              </p>
              <p className="text-center text-muted-foreground">
                Covers molds, tree pollen, weeds, pets, and other common allergens
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allergenCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-heading font-bold text-foreground mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {faqs.map((faq, idx) => {
                const Icon = faq.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                          {faq.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Available Treatment Options
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
                >
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{treatment.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-green-50 border-t border-green-100">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-7 h-7 text-green-600" />
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Important Information
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Note:</span> We do not test for venom allergies.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Food Allergies:</span> We offer separate food allergy testing with unique testing procedures and treatment options. Please consult with our allergist for more information.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Preparation:</span> Stop allergy medications at least 5 days before testing for accurate results. Consult with our nurses if you're on any prescription medications.
                </p>
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

export default AllergyClinic;
