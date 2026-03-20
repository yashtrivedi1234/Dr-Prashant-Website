import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "item-1",
    question: "What conditions does Dr. Prashant treat?",
    answer:
      "Dr. Prashant provides care for ENT problems such as sinus issues, ear infections, hearing concerns, allergy symptoms, snoring, sleep-related breathing issues, and vertigo or balance disorders.",
  },
  {
    value: "item-2",
    question: "How can I book an appointment?",
    answer:
      "You can book directly through the website appointment form or call the clinic for faster scheduling. If you are unsure which treatment category to choose, the team can guide you after a brief discussion of your symptoms.",
  },
  {
    value: "item-3",
    question: "Do I need prior reports before visiting?",
    answer:
      "Previous prescriptions, scans, hearing tests, allergy reports, or blood work are helpful if available, but they are not mandatory. You can still come in for a fresh evaluation and treatment plan.",
  },
  {
    value: "item-4",
    question: "Are advanced diagnostic tests available?",
    answer:
      "Yes. Depending on your symptoms, the clinic may recommend advanced investigations such as allergy testing, endoscopic evaluation, vertigo workup, or other specialised ENT diagnostics for accurate treatment planning.",
  },
  {
    value: "item-5",
    question: "When should I seek urgent ENT consultation?",
    answer:
      "You should seek prompt medical attention for severe ear pain, sudden hearing loss, persistent nosebleeds, breathing difficulty during sleep, intense dizziness, or rapidly worsening throat symptoms.",
  },
  {
    value: "item-6",
    question: "Is follow-up care available after treatment?",
    answer:
      "Yes. Follow-up consultations are part of the care process so recovery, symptom control, and treatment response can be monitored properly, especially for vertigo, allergy, and post-procedure patients.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)/0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="absolute -top-16 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start"
        >
          <div className="lg:sticky lg:top-24">
            <span
              className="inline-flex items-center gap-2 w-fit gradient-primary text-primary-foreground
                         text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              FAQ
            </span>

            <h2 className="font-heading font-bold text-foreground leading-tight text-3xl sm:text-4xl md:text-5xl mb-4">
              Answers to Common
              <span className="gradient-text"> Patient Questions</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-7">
              Clear information helps patients make faster decisions. Here are
              the most common questions people ask before booking an ENT,
              allergy, vertigo, or sleep consultation.
            </p>

            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground
                         font-semibold rounded-full px-7 py-3.5 text-sm shadow-lg shadow-primary/25
                         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 active:scale-95"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-[28px] border border-border bg-card/90 backdrop-blur-sm p-3 sm:p-4 lg:p-5 shadow-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.value}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <AccordionItem
                    value={faq.value}
                    className="border-border/70 rounded-2xl px-5 sm:px-6 mb-3 last:mb-0 bg-background/80"
                  >
                    <AccordionTrigger className="py-5 text-left font-heading text-sm sm:text-base text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
