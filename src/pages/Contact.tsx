import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, PhoneCall, Globe, ExternalLink } from "lucide-react";

const contactInfo = [
  { 
    icon: Phone, 
    title: "Call Us", 
    details: ["+91 76588 74707", "+91 80817 73201"],
    action: "tel:+917658874707",
    color: "gradient-primary"
  },
  { 
    icon: Mail, 
    title: "Email Us", 
    details: ["info@entvertigoallergy.in"],
    action: "mailto:info@entvertigoallergy.in",
    color: "gradient-warm"
  },
{ 
  icon: MapPin, 
  title: "Visit Clinic (Lucknow)", 
  details: [
    "Krishna Nagar: 560 V/161, Plot 3B, Vijay Nagar, Kanpur Road, Lucknow, Uttar Pradesh"
  ],
  action: "https://www.google.com/maps/search/?api=1&query=560+V/161+Plot+3B+Vijay+Nagar+Kanpur+Road+Lucknow",
  color: "gradient-teal"
},
];

const Contact = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-5 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container-main relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gradient-teal text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full  tracking-wider uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground"
          >
            Schedule Your <span className="gradient-text">Consultation</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our ENT, Vertigo, or Allergy treatments, or want to book an appointment? Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform`}>
                  <info.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{info.title}</h3>
                {info.details.map((d, id) => (
                  <p key={id} className="text-muted-foreground text-sm font-medium leading-relaxed mb-1">{d}</p>
                ))}
              </motion.a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-50"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="text-primary-foreground" size={24} />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">Write to Us</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Book Appointment</option>
                    <option>Surgery Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea rows={5} placeholder="How can we help you today?" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
                </div>
                <button className="w-full gradient-primary text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white p-10 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-20 blur-[80px]" />
                <h3 className="font-heading text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  <Clock className="text-primary" size={24} /> Clinic Hours
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Monday — Friday</span>
                    <span className="font-bold">10:00 AM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Saturday</span>
                    <span className="font-bold">10:00 AM – 04:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Sunday</span>
                    <span className="text-primary font-bold">Emergency Only</span>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 relative z-10">
                  <PhoneCall className="text-primary" size={28} />
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Emergency Help</p>
                    <p className="text-xl font-bold">+91 76588 74707</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100"
              >
                <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative group cursor-pointer">
                  {/* Updated map center to Lucknow */}
                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lucknow&zoom=12&size=600x300&key=YOUR_API_KEY')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[2000ms]" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-30 group-hover:opacity-10 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 gradient-teal rounded-full flex items-center justify-center shadow-xl">
                      <Globe className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-lg">
                    <span className="text-sm font-bold text-slate-800">Get Directions on Maps</span>
                    <ExternalLink size={18} className="text-primary" />
                  </div>
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