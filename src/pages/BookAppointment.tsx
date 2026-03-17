import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const services = [
  "ENT Consultation",
  "Vertigo Treatment",
  "Allergy Clinic",
  "Oral Immunotherapy",
  "Snoring Treatment",
  "General Check-up",
];

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-background">
      {/* ── Hero Section ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10 text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-primary text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            Book Your Appointment
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Schedule Your{" "}
            <span className="gradient-text">Consultation Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed
              text-sm sm:text-base md:text-lg"
          >
            Book an appointment with Dr. Prashant for expert ENT, Vertigo, and
            Allergy treatments. Quick, easy, and convenient appointment booking.
          </motion.p>
        </div>
      </section>

      {/* ── Booking Form Section ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* ── Main Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 
                bg-white border border-slate-50 shadow-2xl flex flex-col
                rounded-2xl sm:rounded-3xl lg:rounded-[3rem]
                p-5 sm:p-8 md:p-10 lg:p-12"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Calendar className="text-white" size={20} />
                </div>
                <h2 className="font-heading font-bold text-foreground
                  text-xl sm:text-2xl lg:text-3xl">
                  Appointment Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* ── Name & Phone ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
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
                      required
                      className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                        rounded-xl sm:rounded-2xl
                        py-3 px-4 text-sm
                        sm:py-3.5 sm:px-5
                        lg:py-4 lg:px-6"
                    />
                  </div>
                </div>

                {/* ── Email ── */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  />
                </div>

                {/* ── Service Selection ── */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Service/Department
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ── Date ── */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  />
                </div>

                {/* ── Time Slots ── */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all
                          ${selectedTime === time
                            ? "gradient-primary text-white shadow-lg"
                            : "bg-slate-50 border border-slate-100 text-slate-700 hover:border-primary hover:bg-primary/5"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Message ── */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific concerns or medical history we should know?"
                    className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none
                      rounded-xl sm:rounded-2xl
                      py-3 px-4 text-sm
                      sm:py-3.5 sm:px-5
                      lg:py-4 lg:px-6"
                  />
                </div>

                {/* ── Submit Button ── */}
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
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
                      Appointment Booked!
                    </>
                  ) : (
                    <>
                      <Calendar size={18} className="sm:w-5 sm:h-5" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* ── Sidebar ── */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {/* Info Card 1: Clinic Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="
                  bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden flex flex-col justify-between
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                  p-5 sm:p-6 lg:p-8
                  flex-1"
              >
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 bg-white opacity-10 blur-[80px] pointer-events-none" />

                <h3 className="font-heading font-bold relative z-10 flex items-center gap-2 sm:gap-3
                  text-base sm:text-lg lg:text-xl
                  mb-4 sm:mb-5 lg:mb-6">
                  <Clock className="text-white flex-shrink-0" size={20} />
                  Clinic Hours
                </h3>

                <div className="space-y-2 sm:space-y-3 relative z-10">
                  {[
                    { day: "Mon — Fri", hours: "10:00 AM – 8:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between text-xs sm:text-sm pb-2 sm:pb-3 ${i < 2 ? "border-b border-white/20" : ""}`}>
                      <span className="font-medium text-white/90">{row.day}</span>
                      <span className="font-bold">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Info Card 2: Location */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="
                  bg-white border border-slate-100 shadow-lg flex flex-col
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                  p-5 sm:p-6 lg:p-8"
              >
                <h3 className="font-heading font-bold flex items-center gap-2 sm:gap-3
                  text-base sm:text-lg lg:text-xl
                  text-foreground
                  mb-3 sm:mb-4 lg:mb-5">
                  <MapPin className="text-primary flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  Clinic Location
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Krishna Nagar: 560 V/161, Plot 3B, Vijay Nagar, Kanpur Road,
                  Lucknow, Uttar Pradesh
                </p>
              </motion.div>

              {/* Info Card 3: Emergency */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="
                  bg-slate-900 text-white relative overflow-hidden flex flex-col justify-between
                  rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]
                  p-5 sm:p-6 lg:p-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-primary opacity-20 blur-3xl pointer-events-none" />

                <h3 className="font-heading font-bold relative z-10 flex items-center gap-2 sm:gap-3
                  text-base sm:text-lg lg:text-xl
                  mb-2 sm:mb-3 lg:mb-4">
                  <PhoneCall className="text-primary flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  Emergency Support
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5 relative z-10">
                  Available for urgent medical consultations
                </p>

                <a
                  href="tel:+917658874707"
                  className="relative z-10 inline-flex items-center gap-2 sm:gap-3
                    bg-primary text-white font-bold
                    rounded-lg sm:rounded-xl
                    px-4 sm:px-5 py-2 sm:py-3
                    text-xs sm:text-sm
                    hover:bg-primary/90 transition-all"
                >
                  <Phone size={16} className="sm:w-5 sm:h-5" />
                  +91 76588 74707
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 lg:mb-16"
          >
            <h2 className="font-heading font-bold text-foreground
              text-2xl sm:text-3xl lg:text-4xl
              mb-3 sm:mb-4">
              Why Book With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Get expert care from a leading ENT specialist with years of
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[
              {
                icon: Calendar,
                title: "Easy Scheduling",
                desc: "Book appointments quickly and conveniently online",
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                desc: "Available Monday - Saturday with multiple time slots",
              },
              {
                icon: Phone,
                title: "Direct Support",
                desc: "Call us anytime for urgent consultation needs",
              },
              {
                icon: CheckCircle2,
                title: "Expert Care",
                desc: "Experienced specialists for all ENT concerns",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 sm:p-6 lg:p-7
                  hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="text-white" size={20} />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-foreground mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
