import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    slug: "understanding-vertigo-causes-and-advanced-treatments",
    img: blog1,
    date: "March 10, 2026",
    title: "Understanding Vertigo: Causes and Advanced Treatments",
    excerpt: "Explore the common triggers of dizziness and how state-of-the-art VNG testing helps in accurate diagnosis and management.",
    color: "gradient-primary",
  },
  {
    slug: "clinical-approaches-to-seasonal-allergies",
    img: blog2,
    date: "March 5, 2026",
    title: "Clinical Approaches to Seasonal Allergies",
    excerpt: "Discover how precise Skin Prick Testing and customized immunotherapy can provide lasting relief from severe environmental allergies.",
    color: "gradient-warm",
  },
  {
    slug: "the-importance-of-sleep-studies-for-sleep-apnea",
    img: blog3,
    date: "Feb 28, 2026",
    title: "The Importance of Sleep Studies for Sleep Apnea",
    excerpt: "Learn how Drug-Induced Sleep Endoscopy (DISE) and comprehensive sleep studies can identify and effectively treat chronic snoring.",
    color: "gradient-teal",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-section-alt overflow-hidden">
      <div className="container-main">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3">
            Latest Updates
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight
            text-2xl sm:text-3xl md:text-4xl">
            Recent <span className="gradient-text">Blogs</span>
          </h2>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogs.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/blog/${b.slug}`)}
              className="
                bg-card rounded-2xl overflow-hidden border border-border/50
                shadow-md hover:shadow-2xl transition-all
                group cursor-pointer flex flex-col
              "
            >
              {/* Thumbnail */}
              <div className="overflow-hidden aspect-[16/10] relative flex-shrink-0">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Date badge */}
                <div className={`
                  absolute top-3 left-3 sm:top-4 sm:left-4
                  ${b.color} text-primary-foreground font-bold
                  px-2.5 py-1 sm:px-3 sm:py-1
                  rounded-full flex items-center gap-1
                  text-[10px] sm:text-xs
                `}>
                  <Calendar size={10} className="sm:w-3 sm:h-3 flex-shrink-0" />
                  {b.date}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-foreground
                  group-hover:text-primary transition-colors mb-2 leading-snug
                  text-base sm:text-lg">
                  {b.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-1 mb-4
                  text-xs sm:text-sm">
                  {b.excerpt}
                </p>

                <div className="text-primary font-semibold flex items-center gap-1
                  group-hover:gap-2 transition-all mt-auto
                  text-xs sm:text-sm">
                  Read More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;