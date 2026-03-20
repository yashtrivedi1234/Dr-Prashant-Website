import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin,
  Send, MessageSquare, AlertCircle, CheckCircle2,
} from "lucide-react";
import { useSubmitContactMutation } from "../store/contactApi";

interface ValidationError {
  field: string;
  message: string;
  value?: string;
}

interface ErrorResponse {
  data?: {
    message?: string;
    errors?: ValidationError[];
  };
  message?: string;
}

const ALLOWED_SUBJECTS = [
  "ENT Consultation",
  "Vertigo Treatment",
  "Allergy Clinic",
  "Oral Immunotherapy",
  "Snoring Treatment",
  "General Check-up",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 80817 73201"],
    action: "tel:+918081773201",
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
  const [submitContact, { isLoading }] = useSubmitContactMutation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "ENT Consultation",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === "name") {
      filteredValue = value.replace(/[^a-zA-Z\s'-]/g, "");
    }

    if (name === "phone") {
      filteredValue = value.replace(/[^0-9]/g, "");
      if (filteredValue.length > 15) {
        filteredValue = filteredValue.slice(0, 15);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: filteredValue,
    }));
    setErrorMessage("");

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      errors.name = "Name must be between 2 and 100 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9,14}$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must start with 6-9 and contain only 10-15 digits";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please provide a valid email address";
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
    } else if (!ALLOWED_SUBJECTS.includes(formData.subject)) {
      errors.subject = `Subject must be one of: ${ALLOWED_SUBJECTS.join(", ")}`;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message must be between 10 and 1000 characters";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage("Please fix the validation errors below.");
      return;
    }

    try {
      const response = await submitContact(formData).unwrap();

      if (response.success) {
        setSuccessMessage(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "ENT Consultation",
          message: "",
        });
        setFieldErrors({});

        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      }
    } catch (err: unknown) {
      const error = err as ErrorResponse;
      console.error("Error submitting contact form:", error);

      if (error?.data?.errors && Array.isArray(error.data.errors)) {
        const fieldErrorMap: Record<string, string> = {};
        error.data.errors.forEach((fieldError: ValidationError) => {
          fieldErrorMap[fieldError.field] = fieldError.message;
        });
        setFieldErrors(fieldErrorMap);
        setErrorMessage("Please fix the validation errors below.");
      } else {
        setErrorMessage(
          error?.data?.message ||
            error?.message ||
            "Failed to send message. Please try again."
        );
      }
    }
  };

  return (
    <div className="bg-background">
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
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
            className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Schedule Your <span className="gradient-text">Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg"
          >
            Have questions about our ENT, Vertigo, or Allergy treatments, or
            want to book an appointment? Reach out to us through any of the
            channels below.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-20">
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
                className="bg-white border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-7 lg:p-10"
              >
                <div className={`${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform flex-shrink-0 w-12 h-12 sm:w-13 sm:h-13 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6`}>
                  <info.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-heading font-bold mb-2 sm:mb-3 lg:mb-4 text-base sm:text-lg lg:text-2xl">
                  {info.title}
                </h3>
                {info.details.map((d, id) => (
                  <p key={id} className="text-muted-foreground font-medium leading-relaxed text-xs sm:text-sm">
                    {d}
                  </p>
                ))}
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-50 shadow-2xl flex flex-col rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-5 sm:p-8 md:p-10 lg:p-16"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <MessageSquare className="text-primary-foreground" size={20} />
                </div>
                <h2 className="font-heading font-bold text-foreground text-xl sm:text-2xl lg:text-3xl">
                  Write to Us
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                {errorMessage && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-4 text-red-700">
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <p className="text-sm sm:text-base font-medium">{errorMessage}</p>
                  </div>
                )}

                {successMessage && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-4 text-green-700">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <p className="text-sm sm:text-base font-medium">
                      Thank you for contacting us! We will get back to you soon.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border focus:outline-none focus:ring-2 transition-all rounded-xl sm:rounded-2xl py-3 px-4 text-sm sm:py-3.5 sm:px-5 lg:py-4 lg:px-6 disabled:opacity-50 disabled:cursor-not-allowed ${fieldErrors.name ? "border-red-500 focus:ring-red-500/20" : "border-slate-100 focus:ring-primary/20"}`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs sm:text-sm text-red-600 ml-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="6000000000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className={`w-full bg-slate-50 border focus:outline-none focus:ring-2 transition-all rounded-xl sm:rounded-2xl py-3 px-4 text-sm sm:py-3.5 sm:px-5 lg:py-4 lg:px-6 disabled:opacity-50 disabled:cursor-not-allowed ${fieldErrors.phone ? "border-red-500 focus:ring-red-500/20" : "border-slate-100 focus:ring-primary/20"}`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs sm:text-sm text-red-600 ml-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className={`w-full bg-slate-50 border focus:outline-none focus:ring-2 transition-all rounded-xl sm:rounded-2xl py-3 px-4 text-sm sm:py-3.5 sm:px-5 lg:py-4 lg:px-6 disabled:opacity-50 disabled:cursor-not-allowed ${fieldErrors.email ? "border-red-500 focus:ring-red-500/20" : "border-slate-100 focus:ring-primary/20"}`}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs sm:text-sm text-red-600 ml-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className={`w-full bg-slate-50 border focus:outline-none focus:ring-2 transition-all appearance-none rounded-xl sm:rounded-2xl py-3 px-4 text-sm sm:py-3.5 sm:px-5 lg:py-4 lg:px-6 disabled:opacity-50 disabled:cursor-not-allowed ${fieldErrors.subject ? "border-red-500 focus:ring-red-500/20" : "border-slate-100 focus:ring-primary/20"}`}
                  >
                    <option>ENT Consultation</option>
                    <option>Vertigo Treatment</option>
                    <option>Allergy Clinic</option>
                    <option>Oral Immunotherapy</option>
                    <option>Snoring Treatment</option>
                    <option>General Check-up</option>
                    <option>Other</option>
                  </select>
                  {fieldErrors.subject && (
                    <p className="text-xs sm:text-sm text-red-600 ml-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {fieldErrors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className={`w-full bg-slate-50 border focus:outline-none focus:ring-2 transition-all resize-none rounded-xl sm:rounded-2xl py-3 px-4 text-sm sm:py-3.5 sm:px-5 lg:py-4 lg:px-6 disabled:opacity-50 disabled:cursor-not-allowed ${fieldErrors.message ? "border-red-500 focus:ring-red-500/20" : "border-slate-100 focus:ring-primary/20"}`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs sm:text-sm text-red-600 ml-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-primary text-white font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 sm:gap-3 py-3.5 text-sm sm:py-4 sm:text-base lg:py-5 lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send size={16} className="sm:w-5 sm:h-5" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 shadow-sm flex flex-col rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-3 sm:p-5 lg:p-8 min-h-[320px] sm:min-h-[440px] lg:min-h-[680px]"
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden flex-1 min-h-[280px] sm:min-h-[400px] lg:min-h-[620px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.434278218133!2d80.8862023!3d26.7942974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff6a3185bd5b%3A0x763a9089cd2e9e18!2sDr%20Prashant%20ENT%20Vertigo%20Allergy%20Clinic%20%7C%20ENT%20Doctor%20%7C%20Best%20Ear%20Nose%20Throat%20Specialists%20%7C%20Vertigo%20Doctor%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1773482943823!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
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
      </section>
    </div>
  );
};

export default Contact;
