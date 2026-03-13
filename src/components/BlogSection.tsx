import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  { img: blog1, date: "March 10, 2026", title: "Understanding Homeopathic Principles", excerpt: "Explore the fundamental principles that make homeopathy a unique and effective healing system." },
  { img: blog2, date: "March 5, 2026", title: "Natural Remedies for Seasonal Allergies", excerpt: "Discover how homeopathic remedies can help manage and prevent seasonal allergy symptoms naturally." },
  { img: blog3, date: "Feb 28, 2026", title: "Boosting Immunity the Holistic Way", excerpt: "Learn about natural ways to strengthen your immune system through diet, lifestyle, and homeopathy." },
];

const BlogSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-main">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Latest Updates</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Recent Blogs</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b, i) => (
          <motion.article
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-border/50"
          >
            <div className="overflow-hidden aspect-[16/10]">
              <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-xs flex items-center gap-1.5 mb-3">
                <Calendar size={14} /> {b.date}
              </p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{b.excerpt}</p>
              <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
