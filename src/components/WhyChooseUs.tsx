import { Microscope, Stethoscope, Syringe, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const clinicFeatures = [
  {
    icon: Microscope,
    title: "Comprehensive Testing",
    description:
      "Our experts use a thorough, personalized approach to allergy testing — helping families and individuals live life to the fullest, free from allergies.",
  },
  {
    icon: Stethoscope,
    title: "Lifestyle & Trigger Guidance",
    description:
      "We explain lifestyle measures to help you identify and avoid your allergy triggers, empowering you with the knowledge to manage your condition day-to-day.",
  },
  {
    icon: Syringe,
    title: "Advanced Immunotherapy",
    description:
      "Patients receive personalized allergy shot plans with faster results than traditional immunotherapy. Allergy shots and drops work to decrease immune response and mitigate symptoms.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Year-Round Care",
    description:
      "From medication to sublingual immunotherapy (allergy drops), we offer tailored treatment options with expert, compassionate care available all year round.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-main">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block gradient-teal text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
            Our Strengths
          </span>

          <h2 className="font-heading font-bold text-foreground leading-tight
            text-2xl sm:text-3xl md:text-4xl">
            Why <span className="gradient-text">Choose Us</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our team of experts uses a comprehensive approach to testing and personalized treatment plans — so you and your family can live life to the fullest, free from allergies.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {clinicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-card rounded-xl border border-border/60 shadow-md
                hover:shadow-lg transition-shadow
                p-5 sm:p-6
                flex flex-col
              "
            >
              {/* Icon */}
              <div className="
                w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12
                bg-gradient-to-r from-blue-600 to-teal-500
                rounded-lg flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0
              ">
                <feature.icon className="text-white w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>

              {/* Title */}
              <h4 className="font-heading font-semibold text-foreground mb-2
                text-sm sm:text-base leading-snug">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed
                text-xs sm:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;