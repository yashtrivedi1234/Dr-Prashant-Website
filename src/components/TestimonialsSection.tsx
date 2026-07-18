import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-background overflow-hidden relative"
    >
      {/* Background decorative lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(214 72% 40% / 0.04) 0px, hsl(214 72% 40% / 0.04) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-14"
        >
          {/* Label */}
          <span
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "hsl(214 72% 40%)" }}
          >
            <span className="inline-block w-6 h-px" style={{ background: "hsl(214 72% 40%)" }} />
            Patient Reviews
            <span className="inline-block w-6 h-px" style={{ background: "hsl(214 72% 40%)" }} />
          </span>

          {/* Heading + subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="font-heading font-bold text-foreground leading-tight text-3xl sm:text-4xl md:text-5xl">
              What Our{" "}
              <span className="gradient-text">Patients</span>
              <br />
              Say About Us
            </h2>
            <p className="text-foreground/50 text-xs sm:text-sm max-w-xs leading-relaxed">
              Real reviews from verified patients on Google.
            </p>
          </div>
        </motion.div>

        {/* ── Sociablekit Google Reviews iframe ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-border"
        >
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25665651"
            frameBorder="0"
            width="100%"
            height="520px"
            title="Google Reviews"
            loading="lazy"
            style={{ display: "block", minHeight: "420px" }}
          />
        </motion.div>

       

      </div>
    </section>
  );
};

export default TestimonialsSection;
