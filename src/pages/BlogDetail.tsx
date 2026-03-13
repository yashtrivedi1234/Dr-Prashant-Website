import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, Tag, User } from "lucide-react";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

// Blog data - same as in Blog.tsx with full content
const blogs = [
  { 
    id: 1,
    slug: "understanding-vertigo-causes-and-advanced-treatments",
    img: blog1, 
    date: "March 10, 2026", 
    title: "Understanding Vertigo: Causes and Advanced Treatments", 
    excerpt: "Explore the common triggers of dizziness and how state-of-the-art VNG testing helps in accurate diagnosis and management.",
    category: "Vertigo",
    author: "Dr. Prashant",
    readTime: "5 min read",
    color: "gradient-primary",
    content: `Vertigo is a sensation of spinning or dizziness that can be disabling for those who experience it. It's not a disease itself but a symptom of an underlying condition. Understanding the causes and available treatments can help patients manage their condition effectively.

## What Causes Vertigo?

Vertigo typically results from problems in the inner ear or vestibular system. The most common causes include:

**Benign Paroxysmal Positional Vertigo (BPPV)**
BPPV occurs when calcium carbonate crystals (called otoliths) become dislodged in the inner ear canals. This can cause brief episodes of mild to intense dizziness triggered by specific head movements.

**Vestibular Neuritis**
This condition involves inflammation of the vestibular nerve, often following a viral infection. It can cause severe vertigo that gradually improves over weeks to months.

**Meniere's Disease**
Characterized by fluctuating hearing loss, tinnitus, fullness in the ear, and episodic vertigo, Meniere's disease results from abnormal fluid accumulation in the inner ear.

**Central Vertigo**
Less common but more serious, central vertigo originates from the brain, brain stem, or cerebellum and may indicate stroke or neurological conditions.

## Advanced Diagnostic Techniques

Our clinic uses state-of-the-art technology for accurate diagnosis:

**Video Nystagmography (VNG) Testing**
VNG tracks eye movements using infrared cameras to detect nystagmus (involuntary eye movements) that indicate vestibular dysfunction. This is the gold standard for vestibular testing.

**Dix-Hallpike Maneuver**
This diagnostic test can reproduce BPPV symptoms and help confirm diagnosis while providing therapeutic relief.

**Imaging Studies**
MRI and CT scans help rule out serious neurological causes of vertigo.

## Treatment Options

Treatment depends on the underlying cause:

**Conservative Management**
- Vestibular rehabilitation exercises
- Canalith repositioning procedures (Epley maneuver)
- Lifestyle modifications and dietary changes
- Medication for symptom management

**Specialized Procedures**
- Canalith repositioning therapy
- Vestibular physical therapy
- Tympanic membrane injection for Meniere's disease

Most cases of vertigo respond well to treatment, with patients experiencing significant improvement within weeks to months.`,
    tags: ["Inner Ear", "VNG Testing", "Dizziness", "Balance Disorders"]
  },
  { 
    id: 2,
    slug: "clinical-approaches-to-seasonal-allergies",
    img: blog2, 
    date: "March 5, 2026", 
    title: "Clinical Approaches to Seasonal Allergies", 
    excerpt: "Discover how precise Skin Prick Testing and customized immunotherapy can provide lasting relief from severe environmental allergies.",
    category: "Allergies",
    author: "Dr. Prashant",
    readTime: "6 min read",
    color: "gradient-warm",
    content: `Seasonal allergies affect millions of people worldwide, causing discomfort and impacting quality of life. While over-the-counter antihistamines provide temporary relief, understanding clinical approaches can help achieve long-term solutions.

## Understanding Seasonal Allergies

Seasonal allergies occur when the immune system overreacts to environmental allergens like pollen, mold spores, and dust mites. This triggers the release of histamine, causing symptoms such as:

- Nasal congestion and post-nasal drip
- Sneezing and itchy nose
- Watery, itchy eyes
- Coughing and throat irritation
- Asthma exacerbation in some patients

## Diagnostic Testing

**Skin Prick Testing (SPT)**
Our clinic uses precise skin prick testing to identify specific allergen triggers. Small amounts of allergen extracts are introduced into the skin, and reactions are observed. This non-invasive test provides results in 15-20 minutes and helps create personalized treatment plans.

**Specific IgE Blood Testing**
For patients who cannot undergo skin testing, specific IgE testing measures immune response to individual allergens.

## Advanced Treatment Options

**Subcutaneous Immunotherapy (SCIT)**
Also known as allergy shots, SCIT involves regular injections of increasing allergen doses. This gradually desensitizes the immune system, often providing long-term relief.

**Sublingual Immunotherapy (SLIT)**
Tablets placed under the tongue offer an alternative to injections, particularly effective for pollen allergies.

**Intranasal Corticosteroids**
These medications reduce nasal inflammation and are highly effective for nasal symptoms.

## Long-term Management

With proper diagnosis and treatment, most patients experience:
- Reduced symptom severity
- Decreased medication dependence
- Improved quality of life
- Prevention of complications like sinusitis and asthma

Early intervention and personalized treatment plans lead to the best outcomes.`,
    tags: ["Allergies", "Immunotherapy", "SPT Testing", "Seasonal Relief"]
  },
  { 
    id: 3,
    slug: "the-importance-of-sleep-studies-for-sleep-apnea",
    img: blog3, 
    date: "Feb 28, 2026", 
    title: "The Importance of Sleep Studies for Sleep Apnea", 
    excerpt: "Learn how Drug-Induced Sleep Endoscopy (DISE) and comprehensive sleep studies can identify and effectively treat chronic snoring.",
    category: "Sleep Health",
    author: "Dr. Prashant",
    readTime: "7 min read",
    color: "gradient-teal",
    content: `Sleep apnea is a serious condition affecting millions, yet many remain undiagnosed. Comprehensive sleep studies and advanced diagnostic techniques are crucial for accurate diagnosis and effective treatment planning.

## Understanding Sleep Apnea

Sleep apnea occurs when breathing repeatedly stops and starts during sleep. This can lead to:

- Daytime sleepiness and fatigue
- Morning headaches
- Difficulty concentrating
- Increased risk of heart disease and stroke
- Sudden cardiac death in severe cases

## The Sleep Study Process

**Polysomnography (PSG)**
This overnight sleep study records multiple physiological parameters:
- Brain waves (EEG)
- Eye movement (EOG)
- Muscle activity (EMG)
- Heart rate and rhythm
- Respiratory effort
- Oxygen saturation levels

The study determines the Apnea-Hypopnea Index (AHI), which classifies severity:
- Mild: 5-14 events per hour
- Moderate: 15-29 events per hour
- Severe: 30+ events per hour

**Drug-Induced Sleep Endoscopy (DISE)**
This innovative procedure allows visualization of the upper airway during sleep. We administer sedatives to simulate sleep while examining the exact site of airway collapse. This helps guide surgical planning for optimal outcomes.

## Treatment Options

**Conservative Measures**
- Weight loss and exercise
- Sleep position changes
- Avoiding alcohol and sedatives
- Treating allergies and nasal congestion

**Positive Airway Pressure (PAP) Therapy**
CPAP, BiPAP, and APAP devices deliver pressurized air to keep airways open during sleep.

**Surgical Interventions**
Based on DISE findings, we offer:
- Uvulopalatopharyngoplasty (UPPP)
- Genioglossus advancement
- Hyoid suspension
- Tongue base reduction
- Nasal surgery for obstruction

Early diagnosis through sleep studies prevents serious complications and significantly improves quality of life.`,
    tags: ["Sleep Apnea", "DISE", "Snoring", "Sleep Medicine"]
  },
  { 
    id: 4,
    slug: "micro-ear-surgery-restoring-your-hearing",
    img: blog1, 
    date: "Feb 15, 2026", 
    title: "Micro Ear Surgery: Restoring Your Hearing", 
    excerpt: "A deep dive into advanced micro ear surgeries like Tympanoplasty and Stapedectomy, and what patients can expect during recovery.",
    category: "Surgery",
    author: "Dr. Prashant",
    readTime: "8 min read",
    color: "gradient-primary",
    content: `Hearing loss due to structural ear problems can be devastating, but advances in micro ear surgery offer hope for many patients. This article explores the latest surgical techniques and what to expect.

## Common Ear Problems Requiring Surgery

**Tympanic Membrane Perforation**
A hole in the eardrum can result from infection, trauma, or barotrauma. While some perforations heal spontaneously, others require surgical repair.

**Ossicular Chain Damage**
The tiny bones in the middle ear (ossicles) can be damaged by infection, trauma, or otosclerosis, affecting sound transmission.

**Otosclerosis**
Abnormal bone growth in the middle ear fixes the stapes bone, preventing sound transmission and causing progressive hearing loss.

## Surgical Techniques

**Tympanoplasty (Eardrum Repair)**
Using an operating microscope and specialized instruments, we carefully place a tissue graft (usually fascia or cartilage) to repair the eardrum perforation. Success rates exceed 90%, with most patients experiencing improved hearing and reduced risk of infection.

**Ossiculoplasty (Bone Reconstruction)**
Damaged or missing ossicles can be replaced with prosthetic implants or the patient's own bone, restoring the sound transmission chain.

**Stapes Surgery (Stapedectomy)**
For otosclerosis, we remove the fixed stapes bone and insert a prosthetic stapes, restoring normal middle ear mechanics. This procedure often dramatically improves hearing.

## Recovery and Outcomes

**Immediate Post-Operative Period**
- Ear packing remains in place for 1-2 weeks
- Protect ear from water
- Limited activity for 1-2 weeks
- Pain is typically minimal

**Recovery Timeline**
- Weeks 1-2: Initial healing
- Weeks 2-4: Gradual return to normal activity
- Weeks 4-12: Complete healing, final hearing assessment

**Success Rates**
Most patients experience:
- Improved hearing within weeks
- Reduced ear infections (for perforation repair)
- Return to normal activities
- Long-term hearing stability

Modern micro ear surgery combined with advanced imaging and magnification offers patients excellent chances for hearing restoration and improved quality of life.`,
    tags: ["Ear Surgery", "Hearing Restoration", "Tympanoplasty", "Stapedectomy"]
  },
  { 
    id: 5,
    slug: "head-and-neck-cancer-recognizing-early-signs",
    img: blog2, 
    date: "Feb 10, 2026", 
    title: "Head & Neck Cancer: Recognizing Early Signs", 
    excerpt: "Early detection is critical. Understand the warning signs of head and neck tumors and the comprehensive surgical options available.",
    category: "Oncology",
    author: "Dr. Prashant",
    readTime: "9 min read",
    color: "gradient-warm",
    content: `Head and neck cancer represents about 4% of all cancers. Early detection significantly improves treatment outcomes and survival rates. Awareness of warning signs is crucial for timely intervention.

## Types of Head & Neck Cancer

Head and neck cancers can originate in:
- Larynx (voice box)
- Pharynx (throat)
- Oral cavity (mouth)
- Salivary glands
- Thyroid
- Paranasal sinuses

The most common type is squamous cell carcinoma, accounting for about 90% of cases.

## Warning Signs and Symptoms

**Early Detection is Key:**
- Persistent hoarseness lasting more than 2-3 weeks
- Difficulty swallowing or throat pain
- Unexplained neck lump or swelling
- Chronic cough or coughing blood
- Ear pain
- Weight loss or loss of appetite
- Numbness in the mouth or lip

## Risk Factors

- Tobacco use (cigarettes, cigars, chewing tobacco)
- Heavy alcohol consumption
- HPV infection
- Family history of cancer
- Poor oral hygiene
- Occupational exposures

## Diagnostic Procedures

**Physical Examination**
Thorough examination of the head, neck, and oral cavity helps identify abnormalities.

**Flexible Endoscopy**
Allows direct visualization of the larynx, pharynx, and upper esophagus.

**Biopsy**
Tissue samples are taken for definitive diagnosis and pathological analysis.

**Imaging Studies**
CT and MRI help determine tumor size, location, and potential spread.

## Treatment Options

Treatment depends on cancer stage, location, and patient factors:

**Early-Stage Cancers**
- Radiation therapy
- Transoral laser microsurgery
- Targeted therapy

**Advanced Cancers**
- Combination chemotherapy and radiation
- Surgical resection with reconstruction
- Immunotherapy options

## Prevention Tips

- Quit tobacco and limit alcohol
- Maintain good oral hygiene
- Get HPV vaccine if eligible
- Protect yourself from sun exposure
- Regular screening if high-risk

Regular vigilance and prompt medical attention for any persistent symptoms can lead to early detection and excellent treatment outcomes.`,
    tags: ["Cancer Screening", "Head & Neck Cancer", "Early Detection", "Oncology"]
  },
  { 
    id: 6,
    slug: "advanced-immunotherapy-vs-antihistamines",
    img: blog3, 
    date: "Jan 25, 2026", 
    title: "Advanced Immunotherapy vs. Antihistamines", 
    excerpt: "Why covering up symptoms isn't enough. Learn how clinical immunotherapy targets the root cause of allergic reactions for long-term relief.",
    category: "Treatment",
    author: "Dr. Prashant",
    readTime: "6 min read",
    color: "gradient-teal",
    content: `Millions of allergy sufferers rely on antihistamines for symptom relief, but these medications only mask symptoms. Advanced immunotherapy addresses the root cause, offering long-term solutions for allergic diseases.

## How Antihistamines Work

Antihistamines block the action of histamine, a chemical released during allergic reactions. While effective for symptom relief, they don't prevent histamine release or address the underlying immune dysfunction.

**Limitations of Antihistamines:**
- Only symptomatic relief
- Require continuous use during allergy season
- Tolerance can develop
- May cause drowsiness or other side effects
- Don't reduce disease severity over time

## Understanding Immunotherapy

Immunotherapy, or hyposensitization, works by gradually retraining the immune system to tolerate allergens. This involves repeated exposure to increasing amounts of allergen.

### Types of Immunotherapy

**Subcutaneous Immunotherapy (SCIT - Allergy Shots)**
- Regular injections over 3-5 years
- Builds gradually from low to therapeutic doses
- Most established and widely used method
- Effective for environmental and some food allergies

**Sublingual Immunotherapy (SLIT - Allergy Tablets)**
- Tablets dissolve under the tongue
- Daily administration
- Particularly effective for pollen allergies
- More convenient than injections

**Oral Immunotherapy (OIT)**
- Gradually increasing doses of allergen (typically food)
- Useful for food allergy desensitization
- More specialized and less commonly used

## Benefits of Immunotherapy

**Long-Term Symptom Reduction**
- 60-90% of patients experience significant improvement
- Benefits persist even after discontinuing treatment
- Reduced need for rescue medications

**Prevention of Disease Progression**
- Prevents development of new allergies
- Reduces risk of allergic asthma development
- Prevents anaphylaxis in food-allergic individuals

**Quality of Life Improvement**
- Fewer days with restricted activity
- Better sleep quality
- Improved concentration and productivity

## Treatment Timeline

**Initial Phase (Buildup Phase): 3-6 months**
- Frequent visits (1-2 per week)
- Gradually increasing allergen doses
- Monitoring for adverse reactions

**Maintenance Phase: 3-5 years**
- Monthly visits for maintenance injections/tablets
- Stable allergen dose
- Continued symptom improvement

**Post-Treatment Phase**
- Treatment typically continued 3-5 years
- Many patients experience long-term benefit
- Annual monitoring recommended

## Side Effects and Safety

While immunotherapy is generally safe when administered properly, potential side effects include:
- Local reactions at injection site
- Mild systemic reactions (sneezing, itching)
- Rare but serious anaphylaxis (requiring emergency treatment)

Our clinic has emergency equipment and trained staff to manage any adverse reactions.

## Who Is a Candidate?

Immunotherapy is ideal for patients with:
- Allergic rhinitis uncontrolled by medications
- Allergic asthma
- Documented allergen sensitivities
- Motivation for long-term treatment
- No severe uncontrolled asthma

## Conclusion

While antihistamines provide quick symptom relief, immunotherapy offers a path to long-term freedom from allergies. For many patients, immunotherapy represents a life-changing treatment that addresses the root cause of allergic disease rather than just masking symptoms.

If you're struggling with allergies despite using antihistamines, ask your doctor about whether immunotherapy might be right for you.`,
    tags: ["Immunotherapy", "Allergies", "Treatment Options", "Long-term Relief"]
  },
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")} className="gap-2">
            <ArrowLeft size={18} /> Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts (other posts in same category)
  const relatedPosts = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="bg-background">
  
     

      {/* Featured Image */}
      <section className="relative w-full h-96 overflow-hidden bg-slate-200">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-6 left-6">
          <span className={`${blog.color} text-primary-foreground text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest`}>
            {blog.category}
          </span>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-main py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User size={16} /> {blog.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} /> {blog.date}
              </div>
              <div>{blog.readTime}</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-white border border-slate-200 text-xs px-3 py-1 rounded-full text-muted-foreground hover:border-primary transition-colors cursor-pointer"
                >
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-6"
          >
            <span className="font-semibold text-foreground">Share this article:</span>
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Share2 size={18} /> Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-main">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-6 left-6 ${post.color} text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest`}>
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogDetail;
