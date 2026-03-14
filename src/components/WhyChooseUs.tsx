import { Award, Heart, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const clinicFeatures = [
  {
    icon: Award,
    title: "State-of-the-Art Facility",
    description:
      "Equipped with the latest advancements in medical technology and techniques for accurate diagnoses.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Personalized attention and tailored treatment plans to meet each patient's unique needs.",
  },
  {
    icon: Zap,
    title: "Specialized Expertise",
    description:
      "Expert team of otolaryngologists dedicated to exceptional ENT care and comprehensive services.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Easily accessible in Lucknow with a comfortable and welcoming environment for all patients.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <span className="inline-block gradient-teal text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
            Our Strengths
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h4 className="font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
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