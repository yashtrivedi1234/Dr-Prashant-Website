import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const credentials = [
  {
    title: "MBBS",
    subtitle: "Govt. Medical College PMCH, Patna",
    icon: GraduationCap,
  },
  {
    title: "MS (ENT)",
    subtitle: "IMS, BHU Varanasi",
    icon: GraduationCap,
  },
  {
    title: "Senior Residency",
    subtitle: "PGIMER, Chandigarh",
    icon: MapPin,
  },
  {
    title: "Vertigo Fellowship",
    subtitle: "Yenelova University, Mangalore",
    icon: Stethoscope,
  },
  {
    title: "Sleep Medicine Certification",
    subtitle: "Hind Medical Institute, Barabanki",
    icon: Award,
  },
];

const CredentialsStrip = () => {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)/0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            Awards, Certifications & Training
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Credentials That Reinforce
            <span className="gradient-text"> Clinical Trust</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Verified training highlights displayed on the website. This section is designed to signal expertise
            clearly without overloading the homepage.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {credentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group h-full rounded-[24px] border border-border/70 bg-white/90 p-5 text-left shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-bold leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsStrip;
