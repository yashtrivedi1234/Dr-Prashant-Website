import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LocalSeoSection = () => {
  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16) 0, transparent 28%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.25) 0, transparent 30%)",
      }} />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/90 mb-5">
            Local SEO
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Trusted ENT, Vertigo, Allergy & Snoring Care in
            <span className="text-sky-300"> Lucknow</span>
          </h2>

          <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-white/75 max-w-3xl">
            <p>
              Dr. Prashant ENT Vertigo Allergy Clinic serves patients across Krishna Nagar, Kanpur Road, and wider Lucknow
              with focused care for ear, nose, throat, allergy, vertigo, snoring, and hearing-related concerns.
            </p>
            <p>
              Patients looking for an ENT specialist in Lucknow often need both precise diagnosis and practical treatment planning.
              The clinic emphasizes structured consultations, advanced diagnostics where required, and specialist follow-up for
              conditions like sinusitis, dizziness, allergic rhinitis, ear pain, sleep-disordered breathing, and hearing problems.
            </p>
            <p>
              If you are searching for a vertigo doctor in Lucknow, allergy specialist near Kanpur Road, or an ENT clinic in Krishna Nagar,
              this homepage section supports local relevance while keeping the messaging patient-focused and readable.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Visit or Contact the Clinic
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalSeoSection;
