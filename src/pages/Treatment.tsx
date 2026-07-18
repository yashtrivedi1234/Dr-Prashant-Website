import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, AlertTriangle, Wind, UtensilsCrossed, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";

const conditions = [
  {
    category: "ENT and Eye Allergy",
    icon: Eye,
    color: "from-blue-500/10 to-sky-500/10",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    items: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis" },
      { name: "Allergic Conjunctivitis", slug: "allergic-conjunctivitis" },
      { name: "Seasonal Allergies", slug: "seasonal-allergies" },
      { name: "Fungus Allergy", slug: "fungus-allergy" },
      { name: "Dust Allergy", slug: "dust-allergy" },
      { name: "Non-Allergic Rhinitis", slug: "non-allergic-rhinitis" },
      { name: "Sinusitis", slug: "sinusitis" },
    ],
  },
  {
    category: "Skin Allergy",
    icon: AlertTriangle,
    color: "from-pink-500/10 to-rose-500/10",
    textColor: "text-pink-600",
    badgeColor: "bg-pink-100 text-pink-700",
    items: [
      { name: "Urticaria (Hives)", slug: "urticaria-hives" },
      { name: "Eczema", slug: "eczema-atopic-dermatitis" },
      { name: "Atopic Dermatitis", slug: "eczema-atopic-dermatitis" },
      { name: "Angioedema", slug: "angioedema" },
      { name: "Latex Allergy", slug: "latex-allergy" },
      { name: "Dermatographism", slug: "dermatographism" },
      { name: "Cosmetic Allergy", slug: "cosmetic-allergy" },
    ],
  },
  {
    category: "Lungs Allergy",
    icon: Wind,
    color: "from-purple-500/10 to-violet-500/10",
    textColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
    items: [
      { name: "Allergic Asthma", slug: "allergic-asthma" },
      { name: "Chronic Cough", slug: "chronic-cough" },
    ],
  },
  {
    category: "Gastrointestinal",
    icon: UtensilsCrossed,
    color: "from-orange-500/10 to-amber-500/10",
    textColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
    items: [
      { name: "Food Allergy", slug: "food-allergy" },
      { name: "Food Intolerance", slug: "food-intolerance" },
      { name: "Eosinophilic Esophagitis", slug: "eosinophilic-esophagitis" },
      { name: "Coeliac Disease", slug: "coeliac-disease" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Treatment = () => {
  return (
    <div className="bg-background">
      {/* ── Hero Section ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10 text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-5 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            Comprehensive Treatment
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-foreground leading-tight max-w-3xl mx-auto
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
           Our <span className="gradient-text">Treatments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4
              text-sm sm:text-base md:text-lg"
          >
            Our specialized clinic treats a wide range of allergic conditions across all body systems. 
            With expert diagnosis and personalized treatment plans, we provide comprehensive care for your allergy needs.
          </motion.p>
        </div>
      </section>

      {/* ── Conditions Grid ── */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          >
            {conditions.map((condition, index) => {
              const IconComponent = condition.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative p-6 sm:p-8 rounded-2xl border border-border/50 
                    bg-gradient-to-br ${condition.color} hover:border-border/80 transition-all duration-300 
                    hover:shadow-lg hover:scale-105`}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-50 rounded-2xl pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                      <div className={`p-2.5 sm:p-3 rounded-lg ${condition.badgeColor}`}>
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h2 className={`font-heading font-bold leading-tight text-lg sm:text-xl md:text-2xl ${condition.textColor}`}>
                        {condition.category}
                      </h2>
                    </div>

                    {/* Conditions List */}
                    <div className="space-y-2.5 sm:space-y-3">
                      {condition.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 group/item"
                        >
                          <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${condition.textColor}`} />
                          <Link
                            to={`/treatment/${item.slug}`}
                            className="text-foreground text-sm sm:text-base font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    
      <WhyChooseUs />

      {/* ── CTA Section ── */}
      <CTASection />
    </div>
  );
};

export default Treatment;
