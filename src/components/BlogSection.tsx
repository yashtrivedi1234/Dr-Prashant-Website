import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  { 
    img: blog1, 
    date: "March 10, 2026", 
    title: "Understanding Vertigo: Causes and Advanced Treatments", 
    excerpt: "Explore the common triggers of dizziness and how state-of-the-art VNG testing helps in accurate diagnosis and management.", 
    color: "gradient-primary" 
  },
  { 
    img: blog2, 
    date: "March 5, 2026", 
    title: "Clinical Approaches to Seasonal Allergies", 
    excerpt: "Discover how precise Skin Prick Testing and customized immunotherapy can provide lasting relief from severe environmental allergies.", 
    color: "gradient-warm" 
  },
  { 
    img: blog3, 
    date: "Feb 28, 2026", 
    title: "The Importance of Sleep Studies for Sleep Apnea", 
    excerpt: "Learn how Drug-Induced Sleep Endoscopy (DISE) and comprehensive sleep studies can identify and effectively treat chronic snoring.", 
    color: "gradient-teal" 
  },
];

const BlogSection = () => (
  <section className="section-padding bg-section-alt overflow-hidden">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block gradient-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">Latest Updates</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Recent <span className="gradient-text">Blogs</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b, i) => (
          <motion.article
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-border/50"
          >
            <div className="overflow-hidden aspect-[16/10] relative">
              <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className={`absolute top-4 left-4 ${b.color} text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                <Calendar size={12} /> {b.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{b.excerpt}</p>
              <Link to="/blog" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
