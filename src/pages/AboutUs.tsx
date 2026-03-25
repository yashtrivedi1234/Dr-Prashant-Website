import { motion } from "framer-motion";
import {
  Award,
  Building2,
  ClipboardList,
  Clock,
  Users,
  Heart,
  Target,
  Lightbulb,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  BookOpen,
  BriefcaseMedical,
  GraduationCap,
  Microscope,
} from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpeg";
import aboutVideo from "@/assets/about us.mp4";
import CTASection from "@/components/CTASection";
import { useRef } from "react";

const stats = [
  { icon: Award, value: "14+", label: "Years Experience", color: "bg-primary" },
  {
    icon: Users,
    value: "PGIMER",
    label: "Ex-Senior Resident",
    color: "gradient-warm",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Dedicated Care",
    color: "gradient-teal",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Treating every patient with dignity, respect, and deep empathy, ensuring personalized care for complex ENT conditions.",
  },
  {
    icon: Target,
    title: "Advanced Diagnostics",
    description:
      "Utilizing state-of-the-art Skin Prick Tests, VNG Tests, and Sleep Studies for accurate, root-cause assessments.",
  },
  {
    icon: Lightbulb,
    title: "Surgical Excellence",
    description:
      "Specialized in advanced Ear Surgery, Drug-Induced Sleep Endoscopy, and comprehensive Head & Neck Cancer management.",
  },
];

const expertise = [
  "Certified Allergy Expert providing advanced Skin Prick Tests & Immunotherapy.",
  "Certified in complete Vertigo, Vestibular, and Balance Assessment and Management.",
  "Proud Member of the Indian Society of Otology.",
  "Proud Member of the Indian Association of Sleep Apnea Surgeons.",
  "Specialized expertise in Drug-Induced Sleep Endoscopy and Sleep Studies.",
  "Over 5 years of dedicated focus on complex Head & Neck Cancer Surgeries.",
];

const conditions = [
  "Hearing Loss",
  "Sinusitis",
  "Throat Disorders",
  "Ear Infections",
  "Balance Disorders",
  "Voice Problems",
];

const trustBadges = [
  "14+ Years Experience",
  "PGIMER Chandigarh",
  "Advanced ENT Surgery",
  "Allergy & Vertigo Care",
];

const profileFacts = [
  { label: "Name", value: "Dr Prashant" },
  { label: "Nationality", value: "Indian" },
  { label: "Email", value: "drshiv707@gmail.com" },
];

const objectiveText =
  "Seeking a position to work as an assistant professor, consultant, academician and researcher in an institute or medical college while continuing to deliver high-quality patient care.";

const careerSummary = [
  "MS (Otorhinolaryngology) with strong surgical and communication skills.",
  "Worked on Eustachian tube dysfunction in allergic rhinitis patients and presented papers on the topic at national conferences.",
  "Good analytical, deductive, and reasoning ability for patient evaluation, teaching, and research activities.",
  "Strong oral, written, interpersonal, and patient-management skills.",
];

const professionalTimeline = [
  "May 2011 - May 2012: Junior Resident, Department of Casualty, SDDMASC, Govt. of NCT of Delhi, Dabri",
  "June 2012 - June 2015: Junior Resident (Academic), Department of ENT, Sir Sunder Lal Hospital, IMS, BHU, Varanasi",
  "July 2015 - July 2016: Senior Resident, ESI Hospital Rohini",
  "Sept 2016 - Sept 2017: Senior Resident, ESI Hospital Basaidarapur, New Delhi",
  "Sep 2017 - Dec 2017: Senior Resident, AIIMSR Bathinda",
  "January 2018 - Aug 2020: Senior Resident, PGIMER Chandigarh",
];

const surgeriesIndependentlyDone = [
  "Tympanoplasty",
  "Mastoid surgeries",
  "Septoplasty",
  "Polypectomy",
  "Endoscopic nasal surgery",
  "Tracheostomy",
  "Microlaryngeal surgery",
  "Excision of pre auricular sinus, branchial cyst/sinus, thyroglossal cyst/sinus and submandibular gland sialolith ranula",
  "Diagnostic procedures: nasal endoscopy, flexible nasopharyngoscopy, flexible and rigid laryngoscopy and biopsy",
  "Nasal and mandibular fracture repair",
  "Foreign body removal: nasal, aural and esophageal",
  "Cut throat repair",
  "Caldwell Luc's procedure",
  "Neck node biopsy",
  "Mandibular cyst, admentinoma, reconstruction plating",
  "Emergency and trauma surgery",
  "Tonsillectomy (coblation assisted)",
  "Maxillary and tripod fracture",
  "Hemiglossectomy",
  "Choanal atresia",
  "Parotidectomy",
  "Total/Hemithyroidectomy",
  "Total maxillectomy",
  "FESS",
];

const surgeriesAssisted = [
  "Stapedotomy",
  "Facial nerve decompression",
  "Lateral rhinotomy",
  "Maxillectomy",
  "Nasopharyngeal angiofibroma",
  "Endonasal-dacrocystorhinostomy",
  "Parotidectomy",
  "Thyroidectomy",
  "Laryngectomy",
  "Thyroplasty",
  "Bronchoscopy",
  "Neck dissection",
  "Cochlear implant (posterior tympanotomy method)",
  "Total laryngectomy with TEP insertion",
  "Radical neck dissection with mandibulectomy",
  "Transoral robotic surgery for radical tonsillectomy/tongue base procedure",
];

const clinicSkills = [
  "Allergy clinic with skin prick testing and immunoglobulin therapy for allergic patients",
  "Vertigo clinic with VNG, CCT, and ENoG-based evaluation",
  "Otology clinic follow-up for post-operated unsafe COM cases",
  "Tumour clinic support for final planning across stages of head and neck malignancy",
];


const thesisAndPublications = [
  'Thesis: "Study of Eustachian Tube dysfunction in allergic Rhinitis Patients."',
  "Oral paper presentation on Eustachian Tube dysfunction in allergic Rhinitis Patients",
  "Nasal Chondromesenchymal Hamartoma published in Springer, Head and Neck Pathology, 2020",
  "Isolated pediatric supraglottic stenosis managed using plasma ablation - case report published in Journal of PGIMER, Chandigarh, 2020",
];

const conferencesAndWorkshops = [
  "AIOCON 2017, Kolkata",
  "AIOCON 2016, Delhi",
  "EXPLORE ENT 2017, Agra Live Surgery Workshop",
  "SHIKHAR, Pune, 11th & 12th June 2016 Live Surgery Workshop",
  "CEMAST, Mumbai - Course on FESS Surgery",
  "First Head & Neck Cadaver Dissection Course, Department of ENT, AIIMS Delhi",
  "18th Micro Ear and Endoscopic Sinus Surgery Workshop, CME, Hands on Cadaver Dissection Course, 2016",
  "Patel Hospital, Jalandhar, Cadaver Dissection Workshop, 2016",
  "Otology Update & Surgical Workshop, AIIMS, 2015",
  "LHMC, New Delhi Hospital Infection Control and BMW Management Training Programme",
  "LHMC, New Delhi Workshop on effective communication and conflict resolution in healthcare settings",
  "Certificate of Participation, Department of ENT, MAMC, New Delhi in ENT Update 2015",
  "Certificate Be Lawgical Medicos - Medico legal aspects, SDN Hospital, Delhi",
  "ENT Live Surgery Workshop, Medanta Hospital, Gurgaon, 2016",
  "FESS Surgery Simplified, Sarvodaya Hospital, Faridabad",
  "Appreciation certificate from Mahesh Giri, M.P., East Delhi under Divyang Sashaktikaran Yojna",
  "Allergy workshop conducted in PGIMER in 2018",
  "Head and Neck and temporal bone workshop conducted in PGIMER in 2018",
];

const surgeryMilestones = [
  { year: "2020", activity: "Nasal Chondromesenchymal Hamartoma (Publication)" },
  { year: "2020", activity: "Isolated pediatric supraglottic stenosis (Publication)" },
  { year: "2018", activity: "Allergy workshop (PGIMER)" },
  { year: "2018", activity: "Head and Neck and temporal bone workshop (PGIMER)" },
  { year: "2017", activity: "AIOCON Kolkata" },
  { year: "2017", activity: "EXPLORE ENT Live surgery Workshop" },
  { year: "2016", activity: "AIOCON Delhi" },
  { year: "2016", activity: "SHIKHAR Live surgery Workshop" },
  { year: "2016", activity: "Advanced Course on FESS Surgery (CEMAST)" },
  { year: "2016", activity: "Micro Ear and Endoscopic Sinus Surgery workshop" },
  { year: "2016", activity: "Cadaver Dissection Workshop (Patel Hospital)" },
  { year: "2016", activity: "ENT Live Surgery Workshop (Medanta)" },
  { year: "2015", activity: "MS (ENT) – Institute of Medical Sciences, Varanasi" },
  { year: "2015", activity: "Otology Update & Surgical Workshop (AIIMS)" },
  { year: "2015", activity: "ENT Update (MAMC, New Delhi)" },
  { year: "2010", activity: "MBBS – Patna Medical College" },
];

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-10 sm:py-14 md:py-18 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/70">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent  rounded-full  translate-x-1/2  translate-y-1/2  blur-3xl" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,116,144,0.09) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block gradient-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
            >
              Our Story
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground mb-3 leading-tight
                text-xl sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Advanced Care for <span className="gradient-text">ENT &amp; Allergy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-3xl mx-auto
                text-sm sm:text-base md:text-lg"
            >
              Learn about Dr. Prashant's distinguished career, his exceptional
              surgical skills, and his commitment to comprehensive patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wide text-primary shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto flex flex-col items-center w-full"
          >
            <span className="absolute -top-4 -left-2 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl pointer-events-none z-10" />
            <span className="absolute -bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 border-b-[3px] border-r-[3px] border-accent rounded-br-xl pointer-events-none z-10 hidden sm:block" />

            <div className="relative w-full max-w-[320px] sm:max-w-[400px] rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={doctorImg}
                alt="Dr. Prashant"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

              <div
                className="absolute bottom-4 left-4 right-4 z-10
                flex items-center gap-3
                bg-white/10 backdrop-blur-md border border-white/25
                rounded-2xl px-4 py-3"
              >
                <div
                  className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center
                  font-heading text-lg font-bold text-white shrink-0"
                >
                  P
                </div>
                <div>
                  <p className="font-heading text-[15px] font-bold text-white leading-tight">
                    Dr. Prashant
                  </p>
                  <p className="text-[11px] text-white/75 mt-0.5">
                    ENT Specialist &amp; Surgeon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-6 sm:pt-10 lg:pt-0 text-center lg:text-left"
          >
            <h2
              className="font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight
              text-xl sm:text-2xl md:text-3xl"
            >
              A Legacy of{" "}
              <span className="gradient-text">Medical Excellence</span>
            </h2>

            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm lg:justify-start">
              {/* Mobile: single combined badge */}
              <span className="inline-flex sm:hidden items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 font-semibold text-primary whitespace-nowrap">
                <Building2 size={14} />
                Ex-Senior Resident, PGIMER, Chandigarh
              </span>
              {/* Desktop: two separate badges */}
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 font-semibold text-primary">
                <Building2 size={14} />
                Ex-Senior Resident, PGIMER
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-teal-50 px-3.5 py-2 font-semibold text-teal-700">
                <MapPin size={14} />
                Chandigarh
              </span>
            </div>

            <div
              className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed
              text-sm sm:text-base mb-6 sm:mb-7"
            >
              <p>
                Dr. Prashant did MBBS from Govt Medical College PMCH, Patna and
                MS (ENT) from IMS, BHU Varanasi. He did senior residency from
                PGIMER, Chandigarh. He had done advance course on allergy
                testing and immunotherapy from Baroda. He had done fellowship
                course on vertigo, imbalance and vestibular assessment and
                management from Yenelova University Mangalore. He had done
                certificate course in Sleep Medicine from Hind Medical Institute
                Barabanki.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white px-2 py-4 sm:px-4 sm:py-5 text-center shadow-sm"
                >
                  <div className="mx-auto mb-2 sm:mb-3 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <p className="font-bold text-foreground mb-0.5 text-base sm:text-2xl md:text-3xl">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-[8px] sm:text-xs leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container-main">
          {/* <div className="mt-12 sm:mt-14">
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
          </div> */}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ClipboardList size={20} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Professional Profile
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {profileFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Target size={20} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Objective
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {objectiveText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50/80">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BriefcaseMedical size={20} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Career Summary
                </h2>
              </div>
              <div className="space-y-3">
                {careerSummary.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Building2 size={20} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Professional Experience Timeline
                </h2>
              </div>
              <div className="space-y-4">
                {professionalTimeline.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="mt-1 h-3.5 w-3.5 rounded-full bg-primary" />
                      {index < professionalTimeline.length - 1 && (
                        <div className="mt-2 h-full w-px bg-primary/20" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}

      {/* ── Expertise + Video ── */}


      <section className="section-padding bg-slate-50/80">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Microscope size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Clinic-Based Skills
                </h3>
              </div>
              <div className="space-y-3">
                {clinicSkills.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Thesis & Publications
                </h3>
              </div>
              <div className="space-y-3">
                {thesisAndPublications.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-blue-50 px-4 py-4 ring-1 ring-blue-100"
                  >
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Surgical Expertise & Professional Affiliations
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Extensive operative exposure across ENT, head and neck, trauma,
              oncology, airway, and endoscopic procedures, backed by prestigious professional memberships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Left Column: Memberships & Surgeries Assisted */}
            <div className="flex flex-col gap-6">
              {/* Memberships */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-primary to-sky-700 p-6 text-white shadow-sm sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Users size={20} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Memberships
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Association of Otorhinolaryngology (AOI) India",
                    "Indian Society of Otology",
                    "AOI Delhi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Surgeries Assisted */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm sm:p-8 flex-1"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Surgeries Assisted
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {surgeriesAssisted.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-100"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal-700" />
                      <p className="text-sm font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Surgeries Independently Done */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full rounded-[28px] border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BriefcaseMedical size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Surgeries Independently Done
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {surgeriesIndependentlyDone.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-100"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Conferences & Workshops Section (Repositioned) */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Conferences & Workshops
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {conferencesAndWorkshops.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50/50">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Year | Surgery Name
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A chronological overview of surgical milestones, advanced training, and expert contributions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {surgeryMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100 transition-all hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1 inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    {milestone.year}
                  </span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {milestone.activity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutUs;
