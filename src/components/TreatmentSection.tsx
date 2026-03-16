import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye, AlertTriangle, Wind, UtensilsCrossed, LucideIcon,
  ArrowRight, CheckCircle2,
} from "lucide-react";

interface Treatment {
  category: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  badgeColor: string;
  description: string;
  highlight: string;
  slug: string;
}

const treatments: Treatment[] = [
  {
    category: "ENT & Eye Allergy",
    icon: Eye,
    color: "from-blue-500/10 to-sky-500/10",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Expert treatment for allergic rhinitis, conjunctivitis, and seasonal allergies affecting your nose and eyes.",
    highlight: "7+ conditions treated",
    slug: "treatment",
  },
  {
    category: "Skin Allergy",
    icon: AlertTriangle,
    color: "from-pink-500/10 to-rose-500/10",
    textColor: "text-pink-600",
    badgeColor: "bg-pink-100 text-pink-700",
    description: "Comprehensive care for urticaria, eczema, atopic dermatitis, and other skin allergic reactions.",
    highlight: "7+ conditions treated",
    slug: "treatment",
  },
  {
    category: "Lungs Allergy",
    icon: Wind,
    color: "from-purple-500/10 to-violet-500/10",
    textColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Specialized management of allergic asthma and chronic allergy-related cough for better breathing.",
    highlight: "Advanced immunotherapy",
    slug: "treatment",
  },
  {
    category: "Gastrointestinal",
    icon: UtensilsCrossed,
    color: "from-orange-500/10 to-amber-500/10",
    textColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Treatment for food allergies, intolerances, and eosinophilic esophagitis with dietary guidance.",
    highlight: "Oral immunotherapy available",
   slug: "treatment",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TreatmentSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4">
            Complete Allergy Care
          </span>

          <h2 className="font-heading font-bold text-foreground leading-tight mb-3 sm:mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
           Our <span className="gradient-text">Treatments</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto
            text-sm sm:text-base md:text-lg">
            We specialize in diagnosing and treating a comprehensive range of allergic conditions
            across all body systems, from respiratory to gastrointestinal allergies.
          </p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5"
        >
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                <Link to={`/${treatment.slug}`}>
                  <div
                    className={`bg-gradient-to-br ${treatment.color} 
                      border border-border/50 hover:border-border/80
                      rounded-2xl p-5 sm:p-6 lg:p-7
                      transition-all duration-300 hover:shadow-lg hover:scale-105
                      h-full flex flex-col cursor-pointer group/card`}
                  >
                    {/* Icon */}
                    <div className={`${treatment.badgeColor} rounded-xl w-fit p-2.5 sm:p-3 mb-3 sm:mb-4 group-hover/card:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold ${treatment.textColor} leading-tight mb-2 sm:mb-3
                      text-base sm:text-lg lg:text-xl`}>
                      {treatment.category}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow">
                      {treatment.description}
                    </p>

                    {/* Highlight badge */}
                    <div className="flex items-center gap-2 mb-4 sm:mb-5">
                      <CheckCircle2 className={`w-4 h-4 ${treatment.textColor}`} />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {treatment.highlight}
                      </span>
                    </div>

                    {/* View More Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base
                      group-hover/card:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10 sm:mt-12 lg:mt-14"
        >
          <Link
            to="/treatment"
            className="gradient-primary text-primary-foreground font-bold rounded-xl shadow-lg
              px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base
              hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Explore All Conditions
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentSection;
