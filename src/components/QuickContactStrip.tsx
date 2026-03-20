import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall, CalendarCheck, MessageCircleMore, ArrowRight } from "lucide-react";

const actions = [
  {
    title: "Call Now",
    description: "Speak with the clinic directly for urgent guidance.",
    href: "tel:+918081773201",
    icon: PhoneCall,
    className:
      "bg-white text-foreground border border-border hover:border-primary/30 hover:shadow-xl",
    iconClassName: "bg-primary/10 text-primary",
    external: true,
    newTab: false,
  },
  {
    title: "WhatsApp",
    description: "Chat quickly for appointments and basic queries.",
    href: "https://wa.me/918081773201",
    icon: MessageCircleMore,
    className:
      "bg-emerald-50 text-foreground border border-emerald-200/70 hover:border-emerald-400 hover:shadow-xl",
    iconClassName: "bg-emerald-500/10 text-emerald-600",
    external: true,
    newTab: true,
  },
  {
    title: "Book Appointment",
    description: "Reserve your consultation online in a few steps.",
    href: "/book-appointment",
    icon: CalendarCheck,
    className:
      "gradient-primary text-primary-foreground border border-primary/20 shadow-lg shadow-primary/20 hover:shadow-primary/35",
    iconClassName: "bg-white/15 text-white",
    external: false,
  },
];

const QuickContactStrip = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 px-4 sm:px-6 md:px-8">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] bg-background/95 backdrop-blur-xl border border-white/70 shadow-2xl shadow-slate-900/10 p-3 sm:p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {actions.map((action) => {
              const Icon = action.icon;

              const content = (
                <div
                  className={`group relative overflow-hidden rounded-[24px] px-5 py-5 sm:px-6 sm:py-6 transition-all duration-300 hover:-translate-y-1 ${action.className}`}
                >
                  <div className="absolute inset-0 pointer-events-none opacity-60">
                    <div className="absolute -top-10 right-0 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${action.iconClassName}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-heading text-base sm:text-lg font-bold leading-tight">
                        {action.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed opacity-80">
                        {action.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Take Action
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );

              if (action.external) {
                return (
                  <a
                    key={action.title}
                    href={action.href}
                    target={action.newTab ? "_blank" : undefined}
                    rel={action.newTab ? "noreferrer" : undefined}
                    aria-label={action.title}
                    className="block h-full"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={action.title} to={action.href} aria-label={action.title} className="block h-full">
                  {content}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContactStrip;
