import { motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Phone,
  PhoneCall,
  Lock,
  X,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useCreateAppointmentMutation, useGetAvailableSlotsQuery } from "../store";

interface ValidationError {
  field: string;
  message: string;
  value?: string;
}

interface AppointmentResult {
  success?: boolean;
}

interface ErrorResponse {
  data?: {
    message?: string;
    errors?: ValidationError[];
  };
  message?: string;
}

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
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "02:00 PM",
  "02:15 PM",
  "02:30 PM",
  "02:45 PM",
  "03:00 PM",
  "03:15 PM",
  "03:30 PM",
  "03:45 PM",
];

// Helper function to format date as YYYY-MM-DD
const formatDateForInput = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Get date range for appointment booking (today to 6 months from today)
const getTodayDate = () => new Date();
const getMaxDate = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  return maxDate;
};

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();

  // Fetch available slots when date changes
  const { data: availableSlotsData, isLoading: slotsLoading } = useGetAvailableSlotsQuery(
    formData.date,
    {
      skip: !formData.date,
    }
  );

  useEffect(() => {
    if (availableSlotsData) {
      setBookedSlots(availableSlotsData.bookedSlots || []);
    }
  }, [availableSlotsData]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      // Reset time when date changes
      ...(name === "date" && { time: "" }),
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

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({
      ...prev,
      time,
    }));

    if (fieldErrors.time) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.time;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 6);

    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setFieldErrors({
        date: "Cannot book appointments for past dates",
      });
      return;
    }

    if (selectedDate > maxDate) {
      setFieldErrors({
        date: "Appointments can only be booked up to 6 months in advance",
      });
      return;
    }

    try {
      const result = (await createAppointment(formData).unwrap()) as AppointmentResult;

      if (result.success) {
        setSuccessMessage(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        });

        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      }
    } catch (err) {
      const apiError = err as ErrorResponse;

      if (apiError?.data?.errors && Array.isArray(apiError.data.errors)) {
        const nextFieldErrors: Record<string, string> = {};
        const generalErrors: string[] = [];

        apiError.data.errors.forEach((fieldError) => {
          if (fieldError.field) {
            nextFieldErrors[fieldError.field] = fieldError.message;
            return;
          }

          if (fieldError.message?.toLowerCase().includes("6 months")) {
            nextFieldErrors.date = fieldError.message;
            return;
          }

          generalErrors.push(fieldError.message);
        });

        setFieldErrors(nextFieldErrors);
        setErrorMessage(
          generalErrors.length > 0 ? generalErrors.join(", ") : ""
        );
        return;
      }

      setErrorMessage(
        apiError?.data?.message ||
          apiError?.message ||
          "Something went wrong while booking the appointment"
      );
    }
  };

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-slate-50 py-8 sm:py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
          <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent blur-3xl sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
        </div>

        <div className="container-main relative z-10 px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-primary mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            Book Your Appointment
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 font-heading text-2xl font-bold leading-tight text-foreground sm:mb-4 sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Schedule Your{" "}
            <span className="gradient-text">Consultation Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl px-1 text-sm leading-relaxed text-muted-foreground sm:px-0 sm:text-base md:text-lg"
          >
            Book an appointment with Dr. Prashant for expert ENT, Vertigo, and
            Allergy treatments. Quick, easy, and convenient appointment booking.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-slate-50 bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-8 md:p-10 lg:col-span-2 lg:rounded-[3rem] lg:p-12"
            >
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4 lg:mb-10">
                <div className="gradient-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl shadow-lg sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                  <Calendar className="text-white" size={20} />
                </div>
                <h2 className="font-heading text-lg font-bold leading-tight text-foreground sm:text-2xl lg:text-3xl">
                  Appointment Details
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="space-y-4 sm:space-y-5 lg:space-y-6"
              >
                {errorMessage && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 sm:items-center sm:rounded-xl sm:p-4">
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <p className="text-sm font-medium sm:text-base">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {successMessage && (
                  <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 text-green-700 sm:items-center sm:rounded-xl sm:p-4">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <p className="text-sm font-medium sm:text-base">
                      Appointment booked successfully! Check your email for
                      confirmation.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                        fieldErrors.name
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-100 focus:ring-primary/20"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                        <AlertCircle size={14} /> {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="6000000000"
                      required
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                        fieldErrors.phone
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-100 focus:ring-primary/20"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                        <AlertCircle size={14} /> {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                      fieldErrors.email
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-100 focus:ring-primary/20"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                      <AlertCircle size={14} /> {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                    Service/Department *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={`w-full appearance-none rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                      fieldErrors.service
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-100 focus:ring-primary/20"
                    }`}
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.service && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                      <AlertCircle size={14} /> {fieldErrors.service}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={formatDateForInput(getTodayDate())}
                    max={formatDateForInput(getMaxDate())}
                    required
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                      fieldErrors.date
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-100 focus:ring-primary/20"
                    }`}
                  />
                  {fieldErrors.date && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                      <AlertCircle size={14} /> {fieldErrors.date}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.includes(time);
                      const isSelected = formData.time === time;
                      const isDisabled = !formData.date || slotsLoading;

                      return (
                        <motion.button
                          key={time}
                          type="button"
                          onClick={() => !isBooked && !isDisabled && handleTimeSelect(time)}
                          disabled={isBooked || isDisabled}
                          whileHover={!isBooked && !isDisabled ? { scale: 1.05 } : {}}
                          whileTap={!isBooked && !isDisabled ? { scale: 0.98 } : {}}
                          className={`min-h-[44px] rounded-lg px-2.5 py-2 text-xs font-medium transition-all relative sm:px-3 sm:text-sm lg:min-h-[48px] ${
                            isDisabled && !isSelected
                              ? "border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed opacity-50"
                              : isBooked
                              ? "border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100 text-red-600 cursor-not-allowed shadow-sm hover:shadow-md"
                              : isSelected
                              ? "gradient-primary text-white shadow-lg scale-105"
                              : "border border-slate-200 bg-white text-slate-700 hover:border-primary hover:bg-primary/5 hover:shadow-sm"
                          }`}
                          title={
                            isDisabled && !isSelected
                              ? "Select a date first"
                              : isBooked
                              ? "This slot is already booked"
                              : ""
                          }
                        >
                          <div className="flex items-center justify-center gap-1">
                            <span>{time}</span>
                            {isBooked && (
                              <Lock size={12} className="flex-shrink-0 text-red-500" />
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                  {slotsLoading && formData.date && (
                    <div className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 text-xs text-blue-700 sm:text-sm">
                      <Loader2 size={14} className="animate-spin flex-shrink-0" />
                      <span>Loading available slots...</span>
                    </div>
                  )}
                  {!formData.date && (
                    <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-600 sm:text-sm">
                      📅 Select a date to see available time slots
                    </div>
                  )}
                  {formData.date && bookedSlots.length > 0 && !slotsLoading && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700 sm:text-sm flex items-center gap-2">
                      <Lock size={14} className="flex-shrink-0" />
                      <span><strong>{bookedSlots.length}</strong> slot{bookedSlots.length !== 1 ? 's' : ''} already booked on this date</span>
                    </div>
                  )}
                  {formData.date && bookedSlots.length === 0 && !slotsLoading && (
                    <div className="rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-xs text-green-700 sm:text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="flex-shrink-0" />
                      <span>All time slots are available!</span>
                    </div>
                  )}
                  {fieldErrors.time && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                      <AlertCircle size={14} /> {fieldErrors.time}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="ml-1 text-xs font-bold text-slate-700 sm:text-sm">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any specific concerns or medical history we should know?"
                    className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 sm:rounded-2xl sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
                      fieldErrors.notes
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-100 focus:ring-primary/20"
                    }`}
                  />
                  {fieldErrors.notes && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-600 sm:text-sm">
                      <AlertCircle size={14} /> {fieldErrors.notes}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || successMessage}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 sm:gap-3 sm:rounded-2xl sm:py-4 sm:text-base lg:py-5 gradient-primary"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin sm:h-5 sm:w-5" />
                      Booking...
                    </>
                  ) : successMessage ? (
                    <>
                      <CheckCircle2 size={18} className="sm:h-5 sm:w-5" />
                      Appointment Booked!
                    </>
                  ) : (
                    <>
                      <Calendar size={18} className="sm:h-5 sm:w-5" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-5 text-white sm:rounded-3xl sm:p-6 lg:rounded-[2.5rem] lg:p-8"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-white opacity-10 blur-[80px] sm:h-48 sm:w-48" />

                <h3 className="relative z-10 mb-4 flex items-center gap-2 font-heading text-base font-bold sm:mb-5 sm:gap-3 sm:text-lg lg:mb-6 lg:text-xl">
                  <Clock className="flex-shrink-0 text-white" size={20} />
                  Clinic Hours
                </h3>

                <div className="relative z-10 space-y-2 sm:space-y-3">
                  {[
                    { day: "Mon - Fri", hours: "10:00 AM - 8:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((row, i) => (
                    <div
                      key={row.day}
                      className={`flex justify-between pb-2 text-xs sm:pb-3 sm:text-sm ${
                        i < 2 ? "border-b border-white/20" : ""
                      }`}
                    >
                      <span className="font-medium text-white/90">{row.day}</span>
                      <span className="font-bold">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 lg:rounded-[2.5rem] lg:p-8"
              >
                <h3 className="mb-3 flex items-center gap-2 font-heading text-base font-bold text-foreground sm:mb-4 sm:gap-3 sm:text-lg lg:mb-5 lg:text-xl">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary sm:h-6 sm:w-6" />
                  Clinic Location
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Krishna Nagar: 560 V/161, Plot 3B, Vijay Nagar, Kanpur Road,
                  Lucknow, Uttar Pradesh
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-5 text-white sm:rounded-3xl sm:p-6 lg:rounded-[2.5rem] lg:p-8"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-primary opacity-20 blur-3xl sm:h-40 sm:w-40" />

                <h3 className="relative z-10 mb-2 flex items-center gap-2 font-heading text-base font-bold sm:mb-3 sm:gap-3 sm:text-lg lg:mb-4 lg:text-xl">
                  <PhoneCall className="h-5 w-5 flex-shrink-0 text-primary sm:h-6 sm:w-6" />
                  Emergency Support
                </h3>

                <p className="relative z-10 mb-4 text-xs text-slate-300 sm:mb-5 sm:text-sm">
                  Available for urgent medical consultations
                </p>

                <a
                  href="tel:+918081773201"
                  className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition-all hover:bg-primary/90 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
                >
                  <Phone size={16} className="sm:h-5 sm:w-5" />
                  +91 80817 73201
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center sm:mb-14 lg:mb-16"
          >
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl lg:text-4xl">
              Why Book With Us?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
              Get expert care from a leading ENT specialist with years of
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
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
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6 sm:text-left lg:p-7"
              >
                <div className="gradient-primary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mx-0 sm:mb-4 sm:h-12 sm:w-12">
                  <item.icon className="text-white" size={20} />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold text-foreground sm:mb-3 sm:text-base lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
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
