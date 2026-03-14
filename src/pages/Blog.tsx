import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    id: 1,
    slug: "understanding-vertigo-causes-and-advanced-treatments",
    img: blog1,
    date: "March 10, 2026",
    title: "Understanding Vertigo: Causes and Advanced Treatments",
    excerpt: "Explore the common triggers of dizziness and how state-of-the-art VNG testing helps in accurate diagnosis and management.",
    category: "Vertigo",
    color: "gradient-primary",
  },
  {
    id: 2,
    slug: "clinical-approaches-to-seasonal-allergies",
    img: blog2,
    date: "March 5, 2026",
    title: "Clinical Approaches to Seasonal Allergies",
    excerpt: "Discover how precise Skin Prick Testing and customized immunotherapy can provide lasting relief from severe environmental allergies.",
    category: "Allergies",
    color: "gradient-warm",
  },
  {
    id: 3,
    slug: "the-importance-of-sleep-studies-for-sleep-apnea",
    img: blog3,
    date: "Feb 28, 2026",
    title: "The Importance of Sleep Studies for Sleep Apnea",
    excerpt: "Learn how Drug-Induced Sleep Endoscopy (DISE) and comprehensive sleep studies can identify and effectively treat chronic snoring.",
    category: "Sleep Health",
    color: "gradient-teal",
  },
  {
    id: 4,
    slug: "micro-ear-surgery-restoring-your-hearing",
    img: blog1,
    date: "Feb 15, 2026",
    title: "Micro Ear Surgery: Restoring Your Hearing",
    excerpt: "A deep dive into advanced micro ear surgeries like Tympanoplasty and Stapedectomy, and what patients can expect during recovery.",
    category: "Surgery",
    color: "gradient-primary",
  },
  {
    id: 5,
    slug: "head-and-neck-cancer-recognizing-early-signs",
    img: blog2,
    date: "Feb 10, 2026",
    title: "Head & Neck Cancer: Recognizing Early Signs",
    excerpt: "Early detection is critical. Understand the warning signs of head and neck tumors and the comprehensive surgical options available.",
    category: "Oncology",
    color: "gradient-warm",
  },
  {
    id: 6,
    slug: "advanced-immunotherapy-vs-antihistamines",
    img: blog3,
    date: "Jan 25, 2026",
    title: "Advanced Immunotherapy vs. Antihistamines",
    excerpt: "Why covering up symptoms isn't enough. Learn how clinical immunotherapy targets the root cause of allergic reactions for long-term relief.",
    category: "Treatment",
    color: "gradient-teal",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">

      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent  rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            Insights &amp; Knowledge
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            The Health <span className="gradient-text">Journal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed
              text-sm sm:text-base md:text-lg"
          >
            Stay informed with the latest research, health tips, and educational
            articles on ENT medicine and holistic wellness.
          </motion.p>
        </div>
      </section>

      {/* ── Blog Listing ── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-10">
            {blogs.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.4) }}
                onClick={() => navigate(`/blog/${b.slug}`)}
                className="
                  group flex flex-col bg-white border border-slate-100
                  shadow-sm hover:shadow-2xl transition-all duration-500
                  overflow-hidden cursor-pointer
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                "
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className={`
                    absolute ${b.color} text-primary-foreground font-bold uppercase tracking-widest
                    rounded-full
                    top-3 left-3 text-[9px] px-2.5 py-1
                    sm:top-4 sm:left-4 sm:text-[10px] sm:px-3 sm:py-1.5
                    lg:top-6 lg:left-6
                  `}>
                    {b.category}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-4 sm:p-6 lg:p-8">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400 font-semibold uppercase tracking-wider mb-3 sm:mb-4
                    text-[10px] sm:text-xs">
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    {b.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-3 sm:mb-4
                    text-base sm:text-lg lg:text-2xl">
                    {b.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 leading-relaxed flex-1 mb-5 sm:mb-6 lg:mb-8
                    text-xs sm:text-sm">
                    {b.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 sm:pt-5 lg:pt-6 border-t border-slate-100 mt-auto">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/blog/${b.slug}`); }}
                      className="flex items-center gap-1.5 sm:gap-2 text-primary font-bold hover:gap-3 sm:hover:gap-4 transition-all
                        text-xs sm:text-sm"
                    >
                      Read Full Article
                      <ArrowRight size={14} className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Pagination ── */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center gap-2 sm:gap-3 flex-wrap">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`
                  flex items-center justify-center font-bold transition-all
                  w-9 h-9 rounded-xl
                  sm:w-11 sm:h-11 sm:rounded-2xl
                  lg:w-12 lg:h-12
                  text-sm sm:text-base
                  ${n === 1
                    ? "gradient-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }
                `}
              >
                {n}
              </button>
            ))}
            <button className="
              flex items-center justify-center font-bold transition-all
              bg-slate-100 text-slate-600 hover:bg-slate-200
              h-9 px-4 rounded-xl text-sm
              sm:h-11 sm:px-5 sm:rounded-2xl sm:text-base
              lg:h-12 lg:px-6
            ">
              Next
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Blog;