// ── Data ──────────────────────────────────────────────────────────────────────

export interface Cause {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Symptom {
  name: string;
  icon: string;
}

export interface RiskFactor {
  label: string;
  detail: string;
}

export const causes: Cause[] = [
  {
    id: "bppv",
    title: "BPPV",
    shortDesc: "Benign Paroxysmal Positional Vertigo",
    fullDesc:
      "The unusual movements of carbonate crystals from their chamber into fluid-filled semicircular canals disturbs the way the balance nerve senses gravity and adjusts its movement. The result is vertigo or the sensation of spinning. BPPV is a common cause of vertigo. It is seen more frequently in the older population, after an ear infection, head injury, surgery or after prolonged rest. But often the trigger is unknown. The canalith repositioning exercises are the best method to cure dizziness caused by BPPV in which the offending particles are repositioned according to the type of BPPV by manoeuvres like Epley Manoeuvre, Semont Manoeuvre etc. BPPV is one of the most treatable dizziness causes and presents with classic vertigo symptoms.",
  },
  {
    id: "meniere",
    title: "Meniere's Disease",
    shortDesc: "Inner ear disorder with hearing loss",
    fullDesc:
      "It is a disorder of the inner ear, characterized by episodes of hearing loss and fullness in one ear, tinnitus, and vertigo. Meniere's Disease is caused by increased pressure of the inner ear fluid. If not treated timely, it can lead to progressive hearing loss. Vertigo symptoms in Meniere's are intense and recurring.",
  },
  {
    id: "vestibular",
    title: "Vestibular Neuritis",
    shortDesc: "Viral infection of vestibular nerve",
    fullDesc:
      "Vestibular Neuritis is caused by a viral infection leading to inflammation of the vestibular nerve. This disturbs the balance function and causes dizziness. The symptom is accompanied by blurred vision, nausea, vomiting, and difficulty focusing during head movement. Early vestibular rehabilitation helps ensure rapid recovery. It is one of the common dizziness causes in viral infections.",
  },
  {
    id: "labyrinthitis",
    title: "Labyrinthitis",
    shortDesc: "Inner ear infection",
    fullDesc:
      "The infection causes labyrinthitis in the labyrinth of the inner ear leading to vertigo, hearing loss and tinnitus. The difference between labyrinthitis and vestibular neuritis is; in labyrinthitis both vestibular and cochlear nerves are affected and cause dizziness, ringing in the ear and hearing loss. While in Vestibular neuritis only vestibular nerve is affected leading to vertigo but the hearing ability is not affected. Labyrinthitis causes severe vertigo symptoms that may last for days!",
  },
  {
    id: "migraine",
    title: "Vestibular Migraine",
    shortDesc: "Migraine-related dizziness",
    fullDesc:
      "10% of the population is affected by a migraine, most of them are women. The most common presentation of a migraine is headaches. But in a vestibular migraine, the patient has dizziness which may be associated with headaches. A severe headache coupled with dizziness indicates a vestibular migraine. Along with the spinning sensation associated with headaches, motion sickness and hypersensitivity to light and sound prominently show up in the patient.",
  },
  {
    id: "otolithic",
    title: "Otolithic Disorders",
    shortDesc: "Damage to otolith organs",
    fullDesc:
      "Damage to the otolith organs (utricle and saccule) cause disequilibrium of the body and affects visual stability. Until recently, there was no precise method to check the impairment of otolith organs. But now Otolith disorders can be diagnosed with the Subjective Visual Vertical test and VEMP. Otolith stimulation through vestibular rehabilitation therapy works well in treating the disorder.",
  },
  {
    id: "acoustic",
    title: "Acoustic Neuroma",
    shortDesc: "Noncancerous growth on balance nerve",
    fullDesc:
      "Acoustic neuroma is a noncancerous growth on the balance nerve which causes unsteadiness, dizziness, facial numbness or tingling sensation, change in taste etc. A tumour grows slowly, and hence the patient often does not notice the symptoms. However, it may prove life-threatening if a tumour grows big enough to press on the brain stem. Surgery and radiation are widely used methods to treat acoustic neuroma.",
  },
  {
    id: "ms",
    title: "Multiple Sclerosis",
    shortDesc: "Autoimmune neurological disorder",
    fullDesc:
      "Multiple sclerosis is an autoimmune disorder in which the protective myelin shield of the nerve cells get damaged hampering signal transmission to the brain. Difficulty in focusing, visual problems, vertigo spells and unsteadiness are some of the symptoms of multiple sclerosis. MS is a neurological condition with many complex dizziness causes, including central vertigo symptoms.",
  },
];

export const faqs: Faq[] = [
  {
    id: "faq1",
    question: "What can I take for dizziness?",
    answer:
      "What to take in case of dizziness relies on the cause. Non-prescription drugs, such as meclizine or dimenhydrinate, could be useful in case of dizziness during motion or inner ear dizziness. Mild symptoms may be alleviated by ginger tea or in the form of capsules. It is also important to be properly hydrated. When the dizziness is frequent, severe, or unexplained, one should inform a medical expert and then take medication.",
  },
  {
    id: "faq2",
    question: "How can I stop feeling dizzy?",
    answer:
      "Sit or lie down right away to prevent falls or injuries. Look at something that doesn't move, like a clock on the wall or a spot on the ceiling. It can help stop the spinning feeling. Drink water and stay hydrated. Keep calm and breathe slowly and stay as still as possible until it passes.",
  },
  {
    id: "faq3",
    question: "When is dizziness a sign of a more serious problem?",
    answer:
      "Seek immediate medical attention if dizziness is accompanied by: trouble speaking, weakness in hands or legs, double vision, or severe headache. These signs could indicate central vertigo or a neurological emergency.",
  },
];

export const symptoms: Symptom[] = [
  { name: "Spinning", icon: "🌀" },
  { name: "Dizziness", icon: "😵" },
  { name: "Headaches", icon: "🤕" },
  { name: "Imbalance", icon: "⚖️" },
  { name: "Falling", icon: "📉" },
  { name: "Swaying", icon: "🪷" },
];

export const riskFactors: RiskFactor[] = [
  { label: "Aging", detail: "As people get older, their inner ear functioning might decrease." },
  { label: "Stress & Anxiety", detail: "Can trigger or worsen vertigo." },
  { label: "Head Injuries", detail: "Like from sports or accidents." },
  { label: "Certain Medications", detail: "Especially some antibiotics that affect the ear." },
  { label: "Chronic Illnesses", detail: "Like diabetes or multiple sclerosis (MS)." },
];