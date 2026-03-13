import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Patient",
    rating: 5,
    review: "Excellent service and very professional. Dr. Prashant's approach is patient-friendly and he listens carefully to all your concerns.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 2,
    name: "Priya Singh",
    title: "Patient",
    rating: 5,
    review: "Outstanding experience. The staff is courteous and the facilities are top-notch. Would highly recommend to anyone.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 3,
    name: "Arjun Patel",
    title: "Patient",
    rating: 5,
    review: "Best treatment I could have received. Dr. Prashant is highly skilled and explains everything clearly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
            Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/50 border border-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
