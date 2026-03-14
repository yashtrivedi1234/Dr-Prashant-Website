import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock,
  Send, MessageSquare, PhoneCall,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 76588 74707", "+91 80817 73201"],
    action: "tel:+917658874707",
    color: "gradient-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@drprashantent.com"],
    action: "mailto:info@drprashantent.com",
    color: "gradient-warm",
  },
  {
    icon: MapPin,
    title: "Visit Clinic (Lucknow)",
    details: [
      "Krishna Nagar: 560 V/161, Plot 3B, Vijay Nagar, Kanpur Road, Lucknow, Uttar Pradesh",
    ],
    action: "https://maps.app.goo.gl/s9a6NZh9pwnTVoiF6",
    color: "gradient-teal",
  },
];

const Contact = () => {
  return (
    <div className="bg-background">

      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-accent  rounded-full -translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-teal text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Schedule Your{" "}
            <span className="gradient-text">Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed
              text-sm sm:text-base md:text-lg"
          >
            Have questions about our ENT, Vertigo, or Allergy treatments, or
            want to book an appointment? Reach out to us through any of the
            channels below.
          </motion.p>
        </div>
      </section>

      {/* ── Info + Form ── */}
      <section className="section-padding">
        <div className="container-main">

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8
            mb-10 sm:mb-14 lg:mb-20">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.action}
                target={info.action.startsWith("http") ? "_blank" : undefined}
                rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white border border-border/50 shadow-sm
                  hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                  group flex flex-col
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                  p-6 sm:p-7 lg:p-10
                "
              >
                <div className={`
                  ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center
                  shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform flex-shrink-0
                  w-12 h-12 sm:w-13 sm:h-13 lg:w-16 lg:h-16
                  mb-4 sm:mb-5 lg:mb-6
                `}>
                  <info.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-heading font-bold mb-2 sm:mb-3 lg:mb-4
                  text-base sm:text-lg lg:text-2xl">
                  {info.title}
                </h3>
                {info.details.map((d, id) => (
                  <p key={id} className="text-muted-foreground font-medium leading-relaxed
                    text-xs sm:text-sm">
                    {d}
                  </p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-stretch">

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                bg-white border border-slate-50 shadow-2xl flex flex-col
                rounded-2xl sm:rounded-3xl lg:rounded-[3rem]
                p-5 sm:p-8 md:p-10 lg:p-16
              "
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <MessageSquare className="text-primary-foreground" size={20} />
                </div>
                <h2 className="font-heading font-bold text-foreground
                  text-xl sm:text-2xl lg:text-3xl">
                  Write to Us
                </h2>
              </div>

              <form className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                        rounded-xl sm:rounded-2xl
                        py-3 px-4 text-sm
                        sm:py-3.5 sm:px-5
                        lg:py-4 lg:px-6"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                        rounded-xl sm:rounded-2xl
                        py-3 px-4 text-sm
                        sm:py-3.5 sm:px-5
                        lg:py-4 lg:px-6"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Subject
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  >
                    <option>General Inquiry</option>
                    <option>Book Appointment</option>
                    <option>Surgery Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you today?"
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full gradient-primary text-white font-bold
                    rounded-xl sm:rounded-2xl
                    shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all
                    flex items-center justify-center gap-2 sm:gap-3
                    py-3.5 text-sm
                    sm:py-4 sm:text-base
                    lg:py-5 lg:text-base
                  "
                >
                  Send Message <Send size={16} className="sm:w-5 sm:h-5" />
                </button>
              </form>
            </motion.div>

            {/* ── Sidebar ── */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">

              {/* Clinic Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="
                  bg-slate-900 text-white relative overflow-hidden flex flex-col justify-between
                  rounded-2xl sm:rounded-3xl lg:rounded-[3rem]
                  p-5 sm:p-8 lg:p-12
                  flex-1
                "
              >
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 gradient-primary opacity-20 blur-[80px] pointer-events-none" />

                <h3 className="font-heading font-bold relative z-10 flex items-center gap-2 sm:gap-3
                  text-lg sm:text-xl lg:text-2xl
                  mb-5 sm:mb-6 lg:mb-8">
                  <Clock className="text-primary flex-shrink-0" size={20} />
                  Clinic Hours
                </h3>

                <div className="space-y-3 sm:space-y-4 relative z-10">
                  {[
                    { day: "Monday — Friday", hours: "10:00 AM – 08:00 PM", highlight: false },
                    { day: "Saturday",        hours: "10:00 AM – 04:00 PM", highlight: false },
                    { day: "Sunday",          hours: "Emergency Only",      highlight: true  },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center pb-3 sm:pb-4 ${i < 2 ? "border-b border-white/10" : ""}`}
                    >
                      <span className="text-slate-400 font-medium text-xs sm:text-sm">{row.day}</span>
                      <span className={`font-bold text-xs sm:text-sm ${row.highlight ? "text-primary" : ""}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Emergency call */}
                <div className="mt-5 sm:mt-8 lg:mt-12 p-3 sm:p-4 lg:p-6 bg-white/5 border border-white/10 flex items-center gap-3 sm:gap-4 relative z-10
                  rounded-xl sm:rounded-2xl">
                  <PhoneCall className="text-primary flex-shrink-0" size={22} />
                  <div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest mb-0.5
                      text-[9px] sm:text-xs">
                      Emergency Help
                    </p>
                    <p className="font-bold text-base sm:text-lg lg:text-xl">
                      +91 76588 74707
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  bg-white border border-slate-100 shadow-sm flex flex-col
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                  p-3 sm:p-5 lg:p-8
                  min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]
                "
              >
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden flex-1 min-h-[180px] sm:min-h-[220px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.434278218133!2d80.8862023!3d26.7942974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff6a3185bd5b%3A0x763a9089cd2e9e18!2sDr%20Prashant%20ENT%20Vertigo%20Allergy%20Clinic%20%7C%20ENT%20Doctor%20%7C%20Best%20Ear%20Nose%20Throat%20Specialists%20%7C%20Vertigo%20Doctor%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1773482943823!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "180px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Clinic Location Map"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;