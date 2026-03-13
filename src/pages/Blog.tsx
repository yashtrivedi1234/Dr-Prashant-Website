import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, Search } from "lucide-react";
import CTASection from "@/components/CTASection";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  { 
    id: 1,
    img: blog1, 
    date: "March 10, 2026", 
    title: "Understanding Vertigo: Causes and Advanced Treatments", 
    excerpt: "Explore the common triggers of dizziness and how state-of-the-art VNG testing helps in accurate diagnosis and management.",
    category: "Vertigo",
    color: "gradient-primary" 
  },
  { 
    id: 2,
    img: blog2, 
    date: "March 5, 2026", 
    title: "Clinical Approaches to Seasonal Allergies", 
    excerpt: "Discover how precise Skin Prick Testing and customized immunotherapy can provide lasting relief from severe environmental allergies.",
    category: "Allergies",
    color: "gradient-warm" 
  },
  { 
    id: 3,
    img: blog3, 
    date: "Feb 28, 2026", 
    title: "The Importance of Sleep Studies for Sleep Apnea", 
    excerpt: "Learn how Drug-Induced Sleep Endoscopy (DISE) and comprehensive sleep studies can identify and effectively treat chronic snoring.",
    category: "Sleep Health",
    color: "gradient-teal" 
  },
  { 
    id: 4,
    img: blog1, 
    date: "Feb 15, 2026", 
    title: "Micro Ear Surgery: Restoring Your Hearing", 
    excerpt: "A deep dive into advanced micro ear surgeries like Tympanoplasty and Stapedectomy, and what patients can expect during recovery.",
    category: "Surgery",
    color: "gradient-primary" 
  },
  { 
    id: 5,
    img: blog2, 
    date: "Feb 10, 2026", 
    title: "Head & Neck Cancer: Recognizing Early Signs", 
    excerpt: "Early detection is critical. Understand the warning signs of head and neck tumors and the comprehensive surgical options available.",
    category: "Oncology",
    color: "gradient-warm" 
  },
  { 
    id: 6,
    img: blog3, 
    date: "Jan 25, 2026", 
    title: "Advanced Immunotherapy vs. Antihistamines", 
    excerpt: "Why covering up symptoms isn't enough. Learn how clinical immunotherapy targets the root cause of allergic reactions for long-term relief.",
    category: "Treatment",
    color: "gradient-teal" 
  },
];

const Blog = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
  </div>

  <div className="container-main relative z-10 text-center">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
    >
      Insights & Knowledge
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6"
    >
      The Health <span className="gradient-text">Journal</span>
    </motion.h1>

    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Stay informed with the latest research, health tips, and educational articles on homeopathic medicine and holistic wellness.
    </p>

    {/* Search */}
    <div className="mt-10 max-w-xl mx-auto relative group">
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
        size={20}
      />
      <input
        type="text"
        placeholder="Search health topics..."
        className="w-full bg-white border border-gray-200 rounded-full py-5 pl-14 pr-6 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>
  </div>
</section>

      {/* Blog Listing Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 left-6 ${b.color} text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest`}>
                    {b.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                    <Calendar size={14} /> {b.date}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                    {b.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                      Read Full Article <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-3">
            {[1, 2, 3].map((n) => (
              <button 
                key={n}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all ${
                  n === 1 ? "gradient-primary text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="px-6 h-12 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold transition-all">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      
      <CTASection />
    </div>
  );
};

export default Blog;
