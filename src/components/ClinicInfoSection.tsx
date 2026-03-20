import { motion } from "framer-motion";
import { Clock3, MapPin, CarFront, Navigation, PhoneCall } from "lucide-react";

const timings = [
  { day: "Monday - Friday", hours: "10:00 AM - 08:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 04:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
];

const infoPoints = [
  {
    title: "Clinic Address",
    text: "560 V/161, Plot 3B, Vijay Nagar, Kanpur Road, Krishna Nagar, Lucknow, Uttar Pradesh 226023",
    icon: MapPin,
  },
  {
    title: "Landmark",
    text: "Located on Kanpur Road in Krishna Nagar for easier access from central Lucknow.",
    icon: Navigation,
  },
  {
    title: "Parking",
    text: "Nearby local parking convenience is available for routine patient visits.",
    icon: CarFront,
  },
];

const ClinicInfoSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--primary)/0.05) 0px, hsl(var(--primary)/0.05) 1px, transparent 1px, transparent 72px)",
      }} />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[30px] border border-border bg-card p-6 sm:p-7 lg:p-8 shadow-xl"
          >
            <span className="inline-flex items-center gap-2 gradient-teal text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
              <Clock3 className="w-3.5 h-3.5" />
              Clinic Timings & Location
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.7rem] font-bold leading-tight text-foreground">
              Practical Visit Details
              <span className="gradient-text"> Before You Arrive</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
              Quick access to OPD timings, clinic location, landmark guidance, and direct contact.
              This reduces friction for first-time patients and urgent consultations.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {timings.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/70 bg-background p-4 sm:min-h-[108px]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.day}</p>
                  <p className="mt-2 font-heading text-base font-bold text-foreground">{item.hours}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 space-y-3">
              {infoPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background px-4 py-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="tel:+918081773201"
              className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40"
            >
              <PhoneCall className="w-4 h-4" />
              Call for Directions or Booking
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[30px] overflow-hidden border border-border bg-card shadow-xl min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.434278218133!2d80.8862023!3d26.7942974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff6a3185bd5b%3A0x763a9089cd2e9e18!2sDr%20Prashant%20ENT%20Vertigo%20Allergy%20Clinic%20%7C%20ENT%20Doctor%20%7C%20Best%20Ear%20Nose%20Throat%20Specialists%20%7C%20Vertigo%20Doctor%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1773482943823!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Prashant Clinic Map"
              className="w-full h-[280px] sm:h-[360px] lg:h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfoSection;
