import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Star, Users, MapPin, Award, Heart, Zap } from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";

const clinicFeatures = [
  {
    icon: Award,
    title: "State-of-the-Art Facility",
    description: "Equipped with the latest advancements in medical technology and techniques for accurate diagnoses."
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Personalized attention and tailored treatment plans to meet each patient's unique needs."
  },
  {
    icon: Zap,
    title: "Specialized Expertise",
    description: "Expert team of otolaryngologists dedicated to exceptional ENT care and comprehensive services."
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Easily accessible in Lucknow with a comfortable and welcoming environment for all patients."
  }
];

const conditions = [
  "Hearing Loss",
  "Sinusitis",
  "Throat Disorders",
  "Ear Infections",
  "Balance Disorders",
  "Voice Problems"
];

const ClinicAbout = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-5 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
            
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                About Our Clinic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center leading-tight"
            >
              Best <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">ENT Speciality Clinic</span> in Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto"
            >
              Discover Exceptional ENT Care at Lucknow's Premier Clinic. Welcome to the leading ENT clinic in Lucknow, where your hearing, balance, and overall ear, nose, and throat health are our top priorities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
            {/* Left - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={clinicImg} 
                alt="Tanu ENT Clinic" 
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-lg">5.0</span>
                </div>
                <p className="text-sm text-muted-foreground">Trusted by hundreds of satisfied patients</p>
              </div>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Trusted ENT Healthcare Partner
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Our expert team of otolaryngologists is dedicated to providing the highest quality care using the latest advancements in medical technology and techniques.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  At our state-of-the-art facility, we offer comprehensive services for a wide range of ENT conditions. Whether you're experiencing discomfort, seeking preventive care, or exploring treatment options, our compassionate specialists are here to guide you.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our clinic prides itself on patient-centered care, ensuring that each individual receives personalized attention and tailored treatment plans to meet their unique needs.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Schedule Your Appointment
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Grid */}
          
          <WhyChooseUs/>
          

          {/* Conditions We Treat */}
          <div className="mb-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl font-bold text-center mb-4 text-foreground"
            >
              Comprehensive Services for ENT Conditions
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-100"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
                  <span className="font-medium text-foreground">{condition}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-white text-center"
          >
            <h3 className="font-heading text-3xl font-bold mb-4">
              Our Commitment to Your Health
            </h3>
            <p className="text-lg leading-relaxed opacity-95 max-w-2xl mx-auto">
              From thorough evaluations and accurate diagnoses to advanced surgical interventions and ongoing support, we are committed to delivering excellence in ENT care. Conveniently located in Lucknow, our clinic provides easy access to top-notch medical care in a comfortable and welcoming environment.
            </p>
            <p className="text-lg font-semibold mt-6">
              Experience the difference that compassionate expertise can make in your ENT health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ClinicAbout;
