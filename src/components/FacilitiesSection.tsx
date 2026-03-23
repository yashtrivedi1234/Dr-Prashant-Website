import { motion } from "framer-motion";
import { CreditCard, Smartphone, Activity, Microscope, CalendarClock, ShieldPlus } from "lucide-react";

const facilities = [
  {
    title: "Smooth Payment Options",
    text: "Convenient card, cash, and UPI payment support makes consultations and follow-up visits easier for patients and attendants.",
    icon: Smartphone,
    accent: "text-primary bg-primary/10 border-primary/20",
    gradient: "from-primary/10 via-sky/10 to-transparent",
    accentBar: "gradient-primary",
    badge: "Easy Payments",
    textColor: "text-primary",
  },
  {
    title: "Advanced Diagnostics",
    text: "VNG testing, allergy evaluation, and endoscopic ENT assessment support more precise clinical decisions when required.",
    icon: Microscope,
    accent: "text-teal bg-teal/10 border-teal/20",
    gradient: "from-teal/10 via-accent/10 to-transparent",
    accentBar: "gradient-teal",
    badge: "Precision Care",
    textColor: "text-teal",
  },
  {
    title: "Urgent Slot Requests",
    text: "Same-day consultation requests can be considered based on clinical need and schedule availability.",
    icon: CalendarClock,
    accent: "text-amber-700 bg-amber-500/10 border-amber-400/20",
    gradient: "from-amber-500/10 via-orange-500/10 to-transparent",
    accentBar: "gradient-warm",
    badge: "Fast Access",
    textColor: "text-amber-700",
  },
  {
    title: "Structured Treatment Flow",
    text: "Patients benefit from organised evaluation, diagnosis, treatment planning, and follow-up across ENT, vertigo, and allergy care.",
    icon: Activity,
    accent: "text-accent bg-accent/10 border-accent/20",
    gradient: "from-accent/10 via-primary/5 to-transparent",
    accentBar: "gradient-purple",
    badge: "Clear Process",
    textColor: "text-accent",
  },
  {
    title: "Clear Patient Guidance",
    text: "Booking support, report review direction, and consultation guidance help reduce confusion before the visit.",
    icon: ShieldPlus,
    accent: "text-violet-600 bg-violet-500/10 border-violet-200",
    gradient: "from-violet-500/10 via-primary/5 to-transparent",
    accentBar: "gradient-purple",
    badge: "Patient Support",
    textColor: "text-violet-600",
  },
  {
    title: "Flexible Payment Desk",
    text: "Cash, card, and standard digital collection options improve convenience for routine clinic visits.",
    icon: CreditCard,
    accent: "text-sky-600 bg-sky-500/10 border-sky-200",
    gradient: "from-sky-500/10 via-primary/10 to-transparent",
    accentBar: "gradient-primary",
    badge: "Clinic Convenience",
    textColor: "text-sky-600",
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
          className="text-center mb-10 sm:mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Practical Reasons Patients
              <span className="gradient-text"> Prefer This Clinic</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {facilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative"
            >
              <div
                className={`relative h-full flex flex-col rounded-[26px] border border-border/60
                           bg-gradient-to-br ${item.gradient} overflow-hidden p-6
                           shadow-lg shadow-slate-900/5 transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl hover:border-border`}
              >
                <span
                  className={`absolute top-0 left-0 right-0 h-[3px] ${item.accentBar} opacity-80
                             group-hover:opacity-100 transition-opacity duration-300`}
                />

                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase
                                 bg-foreground/5 border border-border/50 text-muted-foreground
                                 rounded-full px-2.5 py-1">
                  {item.badge}
                </span>

                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.accent}`}>
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className={`mt-2 text-xs font-semibold tracking-wide uppercase ${item.textColor}`}>
                  Why Patients Notice This
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;