import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Patient",
    rating: 5,
    review: "Excellent service and very professional. Dr. Prashant's approach is patient-friendly and he listens carefully to all your concerns.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
  {
    id: 2,
    name: "Priya Singh",
    title: "Patient",
    rating: 5,
    review: "Outstanding experience. The staff is courteous and the facilities are top-notch. Would highly recommend to anyone.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 3,
    name: "Arjun Patel",
    title: "Patient",
    rating: 5,
    review: "Best treatment I could have received. Dr. Prashant is highly skilled and explains everything clearly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-main">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
            Reviews
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight
            text-2xl sm:text-3xl md:text-4xl">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="
                bg-secondary/50 border border-secondary rounded-2xl shadow-lg
                hover:shadow-xl transition-shadow
                p-5 sm:p-6
                flex flex-col
              "
            >
              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={15}
                    className="fill-yellow-400 text-yellow-400 sm:w-[18px] sm:h-[18px]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 leading-relaxed italic flex-1
                text-xs sm:text-sm mb-4 sm:mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full flex-shrink-0
                    w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h4 className="font-semibold text-foreground
                    text-sm sm:text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-foreground/60
                    text-[10px] sm:text-xs mt-0.5">
                    {testimonial.title}
                  </p>
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