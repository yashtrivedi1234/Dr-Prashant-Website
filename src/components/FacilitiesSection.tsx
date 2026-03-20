import { motion } from "framer-motion";
import { CreditCard, Smartphone, Activity, Microscope, CalendarClock, ShieldPlus } from "lucide-react";

const facilities = [
  {
    title: "Card & UPI Payments",
    text: "Convenient digital payment support for routine consultations and follow-up visits.",
    icon: Smartphone,
    accent: "text-primary bg-primary/10",
  },
  {
    title: "Advanced Diagnostics",
    text: "VNG testing, allergy evaluation, and endoscopic ENT assessment where clinically required.",
    icon: Microscope,
    accent: "text-teal bg-teal/10",
  },
  {
    title: "Same-Day Consultation Requests",
    text: "Urgent appointment requests can be accommodated depending on schedule availability.",
    icon: CalendarClock,
    accent: "text-amber-700 bg-amber-500/10",
  },
  {
    title: "Procedure-Oriented Care",
    text: "Structured evaluation for vertigo, allergy, surgical ENT problems, and long-term follow-up.",
    icon: Activity,
    accent: "text-accent bg-accent/10",
  },
  {
    title: "Clinic Support Guidance",
    text: "Direct assistance for booking, reports, and treatment-path questions before your visit.",
    icon: ShieldPlus,
    accent: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Flexible Payment Desk",
    text: "Cash, card, and standard digital collection options are easier for patients and attendants.",
    icon: CreditCard,
    accent: "text-sky-600 bg-sky-500/10",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
              Facilities & Payments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Practical Care Support
              <span className="gradient-text"> Beyond Consultation</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            This block highlights the operational convenience patients usually want to confirm before visiting:
            payment methods, diagnostics, consultation flow, and urgent slot support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {facilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[26px] border border-border/70 bg-card p-6 shadow-lg shadow-slate-900/5"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.accent}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
