import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, Award, Heart, Zap } from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";

const conditions = [
  "Hearing Loss",
  "Sinusitis",
  "Throat Disorders",
  "Ear Infections",
  "Balance Disorders",
  "Voice Problems",
];

const ClinicAbout = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-400 rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>

        <div className="container-main relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 sm:mb-4"
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase">
                About Our Clinic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Best{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                ENT Speciality Clinic
              </span>{" "}
              in Lucknow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-3xl mx-auto
                text-sm sm:text-base md:text-lg"
            >
              Discover Exceptional ENT Care at Lucknow's Premier Clinic. Welcome
              to the leading ENT clinic in Lucknow, where your hearing, balance,
              and overall ear, nose, and throat health are our top priorities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding">
        <div className="container-main">

          {/* Image + Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center mb-12 sm:mb-16">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-full"
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl opacity-20 blur-2xl pointer-events-none" />
              <img
                src={clinicImg}
                alt="Tanu ENT Clinic"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />

              {/* Rating badge */}
              <div className="
                absolute z-10 bg-white rounded-xl sm:rounded-2xl shadow-xl
                p-3 sm:p-4 lg:p-6
                -bottom-4 -right-2
                sm:-bottom-5 sm:-right-4
                lg:-bottom-6 lg:-right-6
                max-w-[150px] sm:max-w-[180px] lg:max-w-xs
              ">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Star className="fill-amber-400 text-amber-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-bold text-base sm:text-lg">5.0</span>
                </div>
                <p className="text-muted-foreground leading-snug
                  text-[10px] sm:text-xs lg:text-sm">
                  Trusted by hundreds of satisfied patients
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-6 sm:pt-8 lg:pt-0"
            >
              <h2 className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
                text-2xl sm:text-3xl md:text-4xl">
                Your Trusted ENT Healthcare Partner
              </h2>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8
                text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Our expert team of otolaryngologists is dedicated to providing
                  the highest quality care using the latest advancements in
                  medical technology and techniques.
                </p>
                <p>
                  At our state-of-the-art facility, we offer comprehensive
                  services for a wide range of ENT conditions. Whether you're
                  experiencing discomfort, seeking preventive care, or exploring
                  treatment options, our compassionate specialists are here to
                  guide you.
                </p>
                <p>
                  Our clinic prides itself on patient-centered care, ensuring
                  that each individual receives personalized attention and
                  tailored treatment plans to meet their unique needs.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow
                    px-6 py-2.5 text-sm
                    sm:px-8 sm:py-3 sm:text-base"
                >
                  Schedule Your Appointment
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* Conditions We Treat */}
          <div className="mb-8 sm:mb-10 mt-8 sm:mt-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-center text-foreground mb-6 sm:mb-8
                text-2xl sm:text-3xl"
            >
              Comprehensive Services for ENT Conditions
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-lg
                    p-3 sm:p-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    {condition}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Commitment banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center
              rounded-2xl sm:rounded-3xl
              px-5 py-8
              sm:px-8 sm:py-10
              md:px-12 md:py-12"
          >
            <h3 className="font-heading font-bold mb-3 sm:mb-4 leading-tight
              text-xl sm:text-2xl md:text-3xl">
              Our Commitment to Your Health
            </h3>
            <p className="leading-relaxed opacity-95 max-w-2xl mx-auto mb-4 sm:mb-6
              text-sm sm:text-base md:text-lg">
              From thorough evaluations and accurate diagnoses to advanced
              surgical interventions and ongoing support, we are committed to
              delivering excellence in ENT care. Conveniently located in
              Lucknow, our clinic provides easy access to top-notch medical care
              in a comfortable and welcoming environment.
            </p>
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              Experience the difference that compassionate expertise can make in
              your ENT health.
            </p>
          </motion.div>

        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ClinicAbout;