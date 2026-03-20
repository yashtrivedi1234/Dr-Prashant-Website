import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowLeft, Phone, Calendar, Shield, HelpCircle,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";

const conditionsData = [
  {
    id: "allergic-rhinitis",
    title: "Allergic Rhinitis",
    category: "ENT and Eye Allergy",
    desc: "Treatment for seasonal and year-round nasal allergies.",
    longDesc: "Allergic Rhinitis causes sneezing, congestion, and nasal itching due to allergic reactions. Our clinic offers comprehensive testing and personalized treatment plans.",
    features: ["Allergy Testing", "Immunotherapy", "Medication Management", "Environmental Control"],
    fullContent: `Allergic Rhinitis is inflammation of the nasal passages due to allergen exposure.\n\nOur comprehensive approach includes:\n\n• Advanced allergy testing panels (up to 58 allergens)\n• Accurate diagnosis of trigger allergens\n• Immunotherapy (allergy shots or drops)\n• Antihistamines and nasal corticosteroids\n• Environmental allergen avoidance strategies\n• Seasonal allergy management\n\nOur goal is to provide lasting relief and reduce dependency on medications.`,
    benefits: ["Symptom relief", "Clear nasal passages", "Better sleep quality", "Improved productivity", "Long-term allergy control"],
    faqs: [
      { q: "What are the symptoms of allergic rhinitis?", a: "Symptoms include nasal congestion, sneezing, itching nose, postnasal drip, and sometimes headaches or fatigue." },
      { q: "Can allergic rhinitis be cured?", a: "While not curable, immunotherapy can provide long-term relief by desensitizing your immune system to specific allergens." },
      { q: "How long does allergy testing take?", a: "Allergy testing typically takes 90 minutes including consultation and results analysis." },
      { q: "Is immunotherapy safe?", a: "Yes, immunotherapy is very safe when administered by experienced allergists. Severe reactions are extremely rare." },
    ],
  },
  {
    id: "allergic-conjunctivitis",
    title: "Allergic Conjunctivitis",
    category: "ENT and Eye Allergy",
    desc: "Specialized treatment for eye allergies and itching.",
    longDesc: "Allergic Conjunctivitis causes red, itchy, watery eyes due to allergic reactions. We provide targeted treatments to relieve eye allergy symptoms.",
    features: ["Eye Examination", "Allergen Testing", "Topical Treatments", "Immunotherapy"],
    fullContent: `Allergic Conjunctivitis is the inflammation of the eye membrane due to allergic reactions.\n\nOur treatment includes:\n\n• Comprehensive eye examination\n• Identification of eye allergens\n• Antihistamine eye drops\n• Corticosteroid eye drops for acute symptoms\n• Immunotherapy when appropriate\n• Cool compress therapy guidance\n• Environmental allergen management\n\nThese treatments quickly relieve itching and redness.`,
    benefits: ["Red eye relief", "Reduced itching", "Clear vision", "Improved comfort", "Quick symptom resolution"],
    faqs: [
      { q: "What causes allergic conjunctivitis?", a: "It's caused by exposure to allergens like pollen, dust mites, pet dander, or mold that trigger an allergic reaction in the eyes." },
      { q: "Are eye allergy drops safe?", a: "Yes, prescribed antihistamine and corticosteroid eye drops are safe when used as directed by an ophthalmologist or allergist." },
      { q: "How long does it take to see relief?", a: "Most antihistamine eye drops provide relief within 15-20 minutes of application." },
      { q: "Can immunotherapy help eye allergies?", a: "Yes, immunotherapy can help reduce eye allergy symptoms by desensitizing your immune system to specific allergens." },
    ],
  },
  {
    id: "urticaria-hives",
    title: "Urticaria (Hives)",
    category: "Skin Allergy",
    desc: "Expert treatment for skin hives and reactions.",
    longDesc: "Urticaria is the development of red, itchy welts on the skin. Our allergists identify triggers and provide effective treatment strategies.",
    features: ["Trigger Identification", "Antihistaminics", "Immunotherapy", "Skin Care Guidance"],
    fullContent: `Urticaria (hives) is a common allergic reaction causing raised, itchy welts on the skin.\n\nOur management includes:\n\n• Detailed trigger history assessment\n• Allergy testing for common allergens\n• First and second-generation antihistamines\n• Corticosteroids for severe cases\n• Immunotherapy for chronic urticaria\n• Stress management strategies\n• Trigger avoidance education\n\nMost cases respond well to appropriate treatment.`,
    benefits: ["Immediate itch relief", "Reduced hive formation", "Improved skin appearance", "Better sleep", "Long-term symptom control"],
    faqs: [
      { q: "What causes urticaria?", a: "Hives can be triggered by food allergies, medication reactions, insect bites, pollen, pet dander, or sometimes stress." },
      { q: "How long do hives last?", a: "Acute urticaria usually resolves within 6 weeks. Chronic urticaria can persist for months or years." },
      { q: "Are hives dangerous?", a: "Usually harmless, but if accompanied by swelling of lips or difficulty breathing, seek emergency care immediately." },
      { q: "Can hives be prevented?", a: "Yes, by identifying and avoiding triggers through allergy testing and maintaining a trigger diary." },
    ],
  },
  {
    id: "eczema-atopic-dermatitis",
    title: "Eczema & Atopic Dermatitis",
    category: "Skin Allergy",
    desc: "Comprehensive treatment for chronic inflammatory skin conditions.",
    longDesc: "Eczema causes itchy, inflamed skin. Our integrated approach combines dermatological and allergological treatments for optimal results.",
    features: ["Skin Barrier Treatment", "Topical Therapy", "Trigger Avoidance", "Immunotherapy"],
    fullContent: `Atopic Dermatitis (Eczema) is a chronic inflammatory skin condition causing itching, redness, and dryness.\n\nOur comprehensive care includes:\n\n• Allergy testing to identify triggers\n• Skin barrier repair strategies\n• Moisturization protocols\n• Topical corticosteroids and immunomodulators\n• Oral antihistamines\n• Biological therapies for severe cases\n• Environmental trigger management\n• Lifestyle modification guidance\n\nWith proper treatment, most patients experience significant improvement.`,
    benefits: ["Reduced itching and inflammation", "Healthier skin appearance", "Improved sleep", "Better quality of life", "Reduced infection risk"],
    faqs: [
      { q: "Is eczema contagious?", a: "No, eczema is not contagious. It's a genetic and immunological condition." },
      { q: "What triggers eczema flare-ups?", a: "Common triggers include allergens, irritants, stress, weather changes, and certain foods." },
      { q: "Can eczema be cured?", a: "While not curable, eczema can be effectively managed through proper treatment and trigger avoidance." },
      { q: "Is it safe for children?", a: "Yes, eczema treatment is safe for children. Pediatric-specific approaches are used for age-appropriate care." },
    ],
  },
  {
    id: "food-allergy",
    title: "Food Allergy",
    category: "Gastrointestinal",
    desc: "Specialized diagnosis and management of food allergies.",
    longDesc: "Food allergies can range from mild to severe. Our allergists provide accurate testing and comprehensive management strategies.",
    features: ["Food Allergy Testing", "Oral Immunotherapy", "Dietary Guidance", "Emergency Planning"],
    fullContent: `Food Allergies are immune reactions to specific foods that can range from mild to life-threatening.\n\nOur services include:\n\n• Comprehensive allergy testing for common and uncommon food allergens\n• Oral food challenge testing in controlled settings\n• Oral Immunotherapy (OIT) for suitable candidates\n• Detailed dietary counseling\n• Emergency action plan development\n• EpiPen training and guidance\n• Cross-reactivity education\n• School and workplace accommodation advice\n\nOur goal is to safely expand your diet while preventing allergic reactions.`,
    benefits: ["Accurate allergy identification", "Expanded diet options", "Reduced anxiety", "Emergency preparedness", "Quality of life improvement"],
    faqs: [
      { q: "What's the difference between food allergy and intolerance?", a: "Allergies involve immune system reaction, while intolerances cause digestive symptoms without immune involvement." },
      { q: "Can food allergies be outgrown?", a: "Some allergies like milk and egg allergies may be outgrown, while peanut and shellfish allergies tend to persist." },
      { q: "Is oral immunotherapy effective?", a: "Yes, OIT can desensitize patients to food allergens. However, it requires strict medical supervision." },
      { q: "How should I prepare an emergency action plan?", a: "Our allergists help create personalized plans including medication use, emergency contacts, and when to seek help." },
    ],
  },
  {
    id: "allergic-asthma",
    title: "Allergic Asthma",
    category: "Lungs Allergy",
    desc: "Comprehensive management of allergy-triggered asthma.",
    longDesc: "Allergic asthma occurs when airway-irritating allergens trigger asthmatic symptoms. We provide integrated allergy and respiratory management.",
    features: ["Allergen Testing", "Asthma Control", "Immunotherapy", "Inhaler Therapy"],
    fullContent: `Allergic Asthma is triggered by allergen exposure causing airway inflammation and breathing difficulty.\n\nOur integrated approach includes:\n\n• Comprehensive allergy testing\n• Pulmonary function testing\n• Asthma control assessment\n• Immunotherapy for specific allergens\n• Inhaler technique training\n• Trigger avoidance strategies\n• Asthma action plan development\n• Regular monitoring and adjustments\n\nProper management significantly improves breathing and quality of life.`,
    benefits: ["Better breathing", "Reduced asthma attacks", "Improved exercise tolerance", "Better sleep", "Improved daily function"],
    faqs: [
      { q: "How is allergic asthma diagnosed?", a: "Through allergy testing, pulmonary function tests, and clinical evaluation of asthma symptoms triggered by specific allergens." },
      { q: "Can immunotherapy help asthma?", a: "Yes, immunotherapy can reduce allergen-triggered asthma symptoms and improve overall asthma control." },
      { q: "What's an asthma action plan?", a: "It's a personalized plan detailing daily management, asthma trigger avoidance, medication use, and emergency procedures." },
      { q: "Is allergic asthma serious?", a: "While manageable, severe allergic asthma can be serious. Proper treatment and monitoring are essential." },
    ],
  },
  {
    id: "seasonal-allergies",
    title: "Seasonal Allergies",
    category: "ENT and Eye Allergy",
    desc: "Expert management of seasonal allergy symptoms.",
    longDesc: "Seasonal allergies occur when specific pollen or environmental triggers cause allergic reactions during certain seasons.",
    features: ["Seasonal Testing", "Allergy Shots", "Allergy Drops", "Preventive Therapy"],
    fullContent: `Seasonal Allergies are triggered by specific pollens and environmental factors that appear during certain times of the year.\n\nOur comprehensive approach includes:\n\n• Identification of seasonal allergen triggers\n• Allergy testing for seasonal pollens\n• Immunotherapy for long-term relief\n• Medication management strategies\n• Environmental control measures\n• Seasonal preparation planning\n• Symptom monitoring and adjustment\n• Preventive therapy initiation\n\nWith proper management, seasonal allergies can be effectively controlled.`,
    benefits: ["Reduced seasonal symptoms", "Extended allergy season relief", "Improved outdoor enjoyment", "Better quality of life", "Reduced medication dependency"],
    faqs: [
      { q: "When do seasonal allergies typically occur?", a: "Seasonal allergies can occur in spring (tree/grass pollen), summer (grass pollen), or fall (ragweed). Winter rarely causes seasonal allergies." },
      { q: "Can I prevent seasonal allergies?", a: "Yes, through immunotherapy, seasonal medications, and preventive measures like keeping windows closed during high pollen days." },
      { q: "How long does immunotherapy take for seasonal allergies?", a: "Immunotherapy typically takes 3-5 years to provide lasting relief from seasonal allergies." },
      { q: "Is starting treatment before allergy season important?", a: "Yes, starting treatment 2-3 weeks before your allergy season begins provides better symptom control." },
    ],
  },
  {
    id: "fungus-allergy",
    title: "Fungus Allergy",
    category: "ENT and Eye Allergy",
    desc: "Specialized treatment for fungal allergy reactions.",
    longDesc: "Fungus allergies are immune reactions to fungal spores commonly found in environments.",
    features: ["Fungal Testing", "Environmental Control", "Antifungal Therapy", "Immunotherapy"],
    fullContent: `Fungus Allergies are triggered by exposure to fungal spores like Aspergillus, Alternaria, and Cladosporium.\n\nOur treatment includes:\n\n• Comprehensive fungal allergy testing\n• Environmental assessment for fungal sources\n• Moisture and humidity control\n• Antifungal preventive measures\n• Immunotherapy for fungal allergens\n• Home and workplace decontamination\n• Protective equipment recommendations\n• Regular monitoring and assessment\n\nProper environmental control significantly reduces symptoms.`,
    benefits: ["Reduced fungal exposure", "Symptom relief", "Better indoor air quality", "Improved breathing", "Prevention of fungal infections"],
    faqs: [
      { q: "Where are fungal allergens commonly found?", a: "Fungal spores are found in damp areas, basements, bathrooms, air conditioning systems, and outdoor soil." },
      { q: "How can I reduce fungal allergen exposure?", a: "Use dehumidifiers, improve ventilation, fix water leaks, clean air filters, and maintain low indoor humidity." },
      { q: "Is fungal allergy treatment available?", a: "Yes, we offer allergy testing, immunotherapy, and environmental management strategies for fungal allergies." },
      { q: "Can fungal allergies lead to infections?", a: "Fungal allergies don't cause infections, but may make lungs more susceptible to fungal infections in severe cases." },
    ],
  },
  {
    id: "dust-allergy",
    title: "Dust Allergy",
    category: "ENT and Eye Allergy",
    desc: "Effective management of dust mite and dust allergies.",
    longDesc: "Dust allergies are primarily caused by dust mites and their waste products found in homes.",
    features: ["Dust Mite Testing", "Environmental Control", "HEPA Filtration", "Immunotherapy"],
    fullContent: `Dust Allergies are mainly caused by dust mites and their allergens found in household dust.\n\nOur comprehensive management includes:\n\n• Dust mite allergy testing\n• HEPA filter recommendations\n• Mattress encasing and washing protocols\n• Regular cleaning schedules\n• Humidity control strategies\n• Immunotherapy when appropriate\n• Bedding replacement guidance\n• Home assessment for dust reduction\n\nEnvironmental modifications significantly reduce symptoms.`,
    benefits: ["Better breathing", "Reduced nighttime symptoms", "Improved sleep quality", "Cleaner home environment", "Long-term allergy relief"],
    faqs: [
      { q: "What causes dust allergies?", a: "Dust allergies are caused by dust mite feces and body fragments found in household dust, not dust itself." },
      { q: "How can I reduce dust mite allergens?", a: "Use hypoallergenic mattress covers, wash bedding weekly in hot water, use HEPA filters, and maintain low humidity." },
      { q: "Are dust allergies seasonal?", a: "No, dust allergies occur year-round, though symptoms may worsen in winter when homes are more sealed." },
      { q: "Can immunotherapy help dust allergies?", a: "Yes, dust mite immunotherapy can significantly reduce symptoms and medication dependence." },
    ],
  },
  {
    id: "non-allergic-rhinitis",
    title: "Non-Allergic Rhinitis",
    category: "ENT and Eye Allergy",
    desc: "Treatment for non-allergic nasal inflammation.",
    longDesc: "Non-allergic rhinitis causes nasal congestion and inflammation without an allergic trigger.",
    features: ["Nasal Examination", "Environmental Assessment", "Medication Therapy", "Trigger Identification"],
    fullContent: `Non-Allergic Rhinitis is nasal inflammation not caused by allergies but triggered by environmental or other factors.\n\nOur approach includes:\n\n• Comprehensive nasal examination\n• Allergy testing to rule out allergies\n• Trigger identification (irritants, temperature, humidity)\n• Nasal saline irrigation therapy\n• Topical nasal corticosteroids\n• Medication management\n• Environmental control strategies\n• Lifestyle modifications\n\nProper identification and management provide effective symptom relief.`,
    benefits: ["Clear nasal passages", "Reduced congestion", "Better breathing", "Improved sleep", "Reduced medication use"],
    faqs: [
      { q: "What causes non-allergic rhinitis?", a: "Triggers include irritants like smoke, pollution, strong odors, weather changes, hormonal changes, and spicy foods." },
      { q: "How is it different from allergic rhinitis?", a: "Non-allergic rhinitis doesn't involve immune system allergic reaction and has different triggers than allergic rhinitis." },
      { q: "Can non-allergic rhinitis be cured?", a: "While not curable, symptoms can be well-controlled through trigger avoidance and appropriate treatment." },
      { q: "Should I get allergy testing?", a: "Yes, allergy testing helps confirm non-allergic rhinitis by ruling out underlying allergies." },
    ],
  },
  {
    id: "sinusitis",
    title: "Sinusitis",
    category: "ENT and Eye Allergy",
    desc: "Comprehensive sinus infection and inflammation treatment.",
    longDesc: "Sinusitis involves inflammation of the sinus cavities causing congestion, pain, and drainage issues.",
    features: ["Sinus Endoscopy", "CT Assessment", "Antibiotic Therapy", "Minimally Invasive Surgery"],
    fullContent: `Sinusitis is inflammation of the sinus cavities often involving allergies or infections.\n\nOur treatment includes:\n\n• Detailed patient history and examination\n• Nasal endoscopy visualization\n• CT scans when necessary\n• Medical therapy (antibiotics, decongestants, steroids)\n• Allergy identification and treatment\n• Balloon sinuplasty for chronic cases\n• Endoscopic sinus surgery when needed\n• Post-operative care and monitoring\n\nOur goal is to resolve sinusitis and prevent recurrence.`,
    benefits: ["Relief from sinus pain", "Improved breathing", "Better drainage", "Reduced headaches", "Prevention of complications"],
    faqs: [
      { q: "What are common sinusitis symptoms?", a: "Symptoms include facial pain/pressure, nasal congestion, thick discharge, reduced smell, headache, and sometimes fever." },
      { q: "Is sinusitis always caused by infection?", a: "No, sinusitis can be caused by allergies, viral infections, anatomical issues, or a combination of factors." },
      { q: "How long does sinusitis treatment take?", a: "Acute sinusitis usually improves within 2-4 weeks with medication. Chronic sinusitis may require longer treatment or surgery." },
      { q: "Will I need sinus surgery?", a: "Most cases respond to medical therapy. Surgery is considered only after conservative treatment fails." },
    ],
  },
  {
    id: "angioedema",
    title: "Angioedema",
    category: "Skin Allergy",
    desc: "Treatment for deep tissue swelling reactions.",
    longDesc: "Angioedema is deep tissue swelling often accompanying urticaria or occurring alone.",
    features: ["Trigger Testing", "C1 Inhibitor Management", "Antihistaminics", "Emergency Preparedness"],
    fullContent: `Angioedema is swelling of deeper skin and tissue layers, sometimes accompanying hives.\n\nOur management includes:\n\n• Comprehensive allergy testing\n• Trigger identification and avoidance\n• Antihistamines and corticosteroids\n• C1-inhibitor therapy when indicated\n• Emergency plan development\n• Epinephrine administration training\n• Regular monitoring and follow-up\n• Lifestyle and dietary guidance\n\nProper treatment prevents severe episodes.`,
    benefits: ["Prevented swelling episodes", "Reduced severity", "Emergency preparedness", "Improved quality of life", "Confidence in management"],
    faqs: [
      { q: "Is angioedema dangerous?", a: "Yes, angioedema affecting the throat or tongue can be life-threatening and requires emergency treatment." },
      { q: "What triggers angioedema?", a: "Common triggers include allergens, medications (ACE inhibitors), insect stings, and sometimes food allergies." },
      { q: "How is angioedema diagnosed?", a: "Through clinical evaluation, allergy testing, and sometimes genetic testing for hereditary angioedema." },
      { q: "What should I do if angioedema involves the throat?", a: "Seek emergency medical care immediately. Use epinephrine if prescribed and call emergency services." },
    ],
  },
  {
    id: "latex-allergy",
    title: "Latex Allergy",
    category: "Skin Allergy",
    desc: "Specialized management of latex allergies.",
    longDesc: "Latex allergies are immune reactions to natural rubber latex proteins.",
    features: ["Latex Testing", "Alternative Products", "Cross-Reactivity Assessment", "Emergency Planning"],
    fullContent: `Latex Allergies are immune reactions to proteins in natural rubber latex.\n\nOur comprehensive approach includes:\n\n• Latex allergy testing and confirmation\n• Assessment of allergy severity\n• Cross-reactivity testing (banana, avocado, etc.)\n• Latex-free environment recommendations\n• Medical and workplace accommodation\n• Emergency action plan development\n• Epinephrine prescription and training\n• Regular monitoring and support\n\nWith proper precautions, latex allergies can be safely managed.`,
    benefits: ["Safe medical care", "Workplace accommodations", "Emergency preparedness", "Confidence in daily life", "Prevention of reactions"],
    faqs: [
      { q: "What products contain latex?", a: "Medical gloves, balloons, condoms, catheters, dental dams, and some shoe soles contain latex." },
      { q: "Can latex allergy be cured?", a: "No, latex allergies are permanent. Management focuses on avoidance and emergency preparedness." },
      { q: "Is there cross-reactivity with foods?", a: "Yes, latex can cross-react with banana, avocado, kiwi, and chestnut due to similar proteins." },
      { q: "How do I inform medical providers?", a: "Inform all healthcare providers verbally and ensure your allergy is clearly documented in your medical record." },
    ],
  },
  {
    id: "dermatographism",
    title: "Dermatographism",
    category: "Skin Allergy",
    desc: "Treatment for skin writing/scratching reactions.",
    longDesc: "Dermatographism is a condition where firm pressure on the skin causes raised welts.",
    features: ["Skin Testing", "Antihistamine Therapy", "Trigger Avoidance", "Symptom Management"],
    fullContent: `Dermatographism is a form of urticaria where firm scratching or pressure causes linear welts on the skin.\n\nOur management includes:\n\n• Clinical diagnosis through skin examination\n• Dermographometer testing for severity\n• First and second-generation antihistamines\n• Trigger identification (pressure, clothing)\n• Protective clothing recommendations\n• Stress management strategies\n• Regular monitoring and adjustment\n• Preventive therapy when needed\n\nMost cases respond well to antihistamines.`,
    benefits: ["Reduced welt formation", "Improved skin appearance", "Better comfort", "Prevention of infections", "Normalcy in daily activities"],
    faqs: [
      { q: "What causes dermatographism?", a: "The exact cause is unknown, but it's related to mast cell sensitivity to pressure and mechanical stimulation." },
      { q: "Is dermatographism permanent?", a: "Most cases improve over time. About 50% resolve spontaneously within 5 years." },
      { q: "Can dermatographism be cured?", a: "While not curable, antihistamines effectively manage symptoms and prevent welt formation." },
      { q: "What precautions should I take?", a: "Avoid tight clothing, vigorous scratching, and direct pressure on the skin. Use loose, soft clothing." },
    ],
  },
  {
    id: "cosmetic-allergy",
    title: "Cosmetic Allergy",
    category: "Skin Allergy",
    desc: "Management of allergic reactions to cosmetics.",
    longDesc: "Cosmetic allergies are immune reactions to ingredients in skincare, makeup, or beauty products.",
    features: ["Patch Testing", "Ingredient Analysis", "Safe Alternatives", "Preventive Guidance"],
    fullContent: `Cosmetic Allergies are allergic reactions to ingredients in beauty and personal care products.\n\nOur approach includes:\n\n• Detailed product and reaction history\n• Patch testing to identify allergens\n• Ingredient analysis and avoidance\n• Fragrance and preservative testing\n• Safe alternative product recommendations\n• Hypoallergenic product guidance\n• Occupational exposure assessment\n• Dermatological consultation when needed\n\nIdentifying the allergen prevents future reactions.`,
    benefits: ["Rash and irritation relief", "Safe product selection", "Improved skin health", "Confidence in beauty routines", "Prevented reactions"],
    faqs: [
      { q: "What cosmetic ingredients commonly cause allergies?", a: "Common allergens include fragrances, preservatives, parabens, lanolin, propylene glycol, and essential oils." },
      { q: "How long do cosmetic reactions last?", a: "Reactions usually resolve within 24-48 hours after discontinuing the product, though severe reactions may take longer." },
      { q: "How is cosmetic allergy diagnosed?", a: "Through detailed history, patch testing with cosmetic ingredients, and sometimes repeated open application testing." },
      { q: "Are natural cosmetics always safe?", a: "No, natural ingredients can also cause allergies. Patch testing is recommended for all new products." },
    ],
  },
  {
    id: "chronic-cough",
    title: "Chronic Cough",
    category: "Lungs Allergy",
    desc: "Diagnosis and treatment of persistent cough.",
    longDesc: "Chronic cough lasting more than 8 weeks can be caused by allergies or other respiratory conditions.",
    features: ["Allergy Testing", "Pulmonary Assessment", "Immunotherapy", "Trigger Management"],
    fullContent: `Chronic Cough lasting over 8 weeks can be triggered by allergies, post-nasal drip, or other conditions.\n\nOur diagnostic and treatment approach includes:\n\n• Detailed cough history and characteristics\n• Comprehensive allergy testing\n• Pulmonary function evaluation\n• Chest imaging when indicated\n• Identification of allergen triggers\n• Immunotherapy for allergic cough\n• Medication adjustment and optimization\n• Specialist consultation if needed\n\nFinding the underlying cause is key to relief.`,
    benefits: ["Identified cough cause", "Targeted treatment", "Symptom resolution", "Improved sleep", "Better quality of life"],
    faqs: [
      { q: "What causes allergic cough?", a: "Allergic cough results from post-nasal drip, throat irritation, and airway inflammation from allergen exposure." },
      { q: "How is allergic cough treated?", a: "Treatment includes nasal medications, immunotherapy, antihistamines, and trigger avoidance." },
      { q: "When should I see a specialist?", a: "If cough persists beyond 8 weeks or worsens despite treatment, specialist evaluation is recommended." },
      { q: "Can immunotherapy help chronic cough?", a: "Yes, if the cough is allergy-related, immunotherapy can provide long-term relief." },
    ],
  },
  {
    id: "food-intolerance",
    title: "Food Intolerance",
    category: "Gastrointestinal",
    desc: "Diagnosis and management of food intolerances.",
    longDesc: "Food intolerances cause digestive symptoms without involving the immune system like allergies do.",
    features: ["Elimination Diets", "Digestive Assessment", "Dietary Counseling", "Symptom Monitoring"],
    fullContent: `Food Intolerance causes digestive symptoms from specific foods without immune system involvement.\n\nOur comprehensive management includes:\n\n• Detailed dietary history and symptom tracking\n• Common food intolerance testing\n• Elimination diet protocols\n• Symptom monitoring and documentation\n• Nutritional counseling and guidance\n• Alternative food recommendations\n• Gradual reintroduction plans\n• Long-term dietary management\n\nIdentifying problem foods significantly improves quality of life.`,
    benefits: ["Reduced GI symptoms", "Improved digestion", "Better quality of life", "Identified trigger foods", "Nutritional guidance"],
    faqs: [
      { q: "What's the difference between intolerance and allergy?", a: "Allergies involve immune reactions; intolerances cause digestive symptoms without immune involvement." },
      { q: "What causes food intolerance?", a: "Causes include enzyme deficiencies (lactose intolerance), food additives, or digestive sensitivities." },
      { q: "How is food intolerance diagnosed?", a: "Through detailed history, elimination diets, and symptom monitoring rather than allergy testing." },
      { q: "Can I outgrow food intolerance?", a: "Some intolerances may improve with age or digestive system changes, while others persist." },
    ],
  },
  {
    id: "eosinophilic-esophagitis",
    title: "Eosinophilic Esophagitis",
    category: "Gastrointestinal",
    desc: "Treatment for allergic esophageal inflammation.",
    longDesc: "Eosinophilic esophagitis is chronic allergy-related inflammation of the esophagus.",
    features: ["Endoscopy with Biopsy", "Allergy Testing", "Dietary Management", "Immunotherapy"],
    fullContent: `Eosinophilic Esophagitis (EoE) is chronic immune-mediated inflammation of the esophagus.\n\nOur comprehensive approach includes:\n\n• Upper endoscopy with biopsies for diagnosis\n• Eosinophil count assessment\n• Comprehensive allergy testing\n• Elimination diet trials\n• Topical corticosteroid therapy\n• Immunotherapy when applicable\n• Dietary modification and counseling\n• Regular monitoring with repeat endoscopy\n\nProper management prevents esophageal damage.`,
    benefits: ["Reduced inflammation", "Improved swallowing", "Symptom relief", "Prevention of complications", "Better nutrition"],
    faqs: [
      { q: "What are EoE symptoms?", a: "Symptoms include difficulty swallowing, food impaction, chest pain, nausea, and sometimes vomiting." },
      { q: "Is EoE related to allergies?", a: "Yes, EoE is triggered by allergic responses to specific foods or environmental allergens." },
      { q: "How is EoE diagnosed?", a: "Through upper endoscopy with biopsy showing eosinophil infiltration and inflammation." },
      { q: "Can EoE be cured?", a: "While not curable, it can be effectively managed with dietary modifications and medical therapy." },
    ],
  },
  {
    id: "coeliac-disease",
    title: "Coeliac Disease",
    category: "Gastrointestinal",
    desc: "Management of gluten sensitivity and celiac disease.",
    longDesc: "Coeliac disease is an autoimmune disorder triggered by gluten in individuals with genetic predisposition.",
    features: ["Serological Testing", "Genetic Testing", "Endoscopic Diagnosis", "Gluten-Free Diet"],
    fullContent: `Coeliac Disease is an autoimmune condition triggered by gluten in genetically predisposed individuals.\n\nOur management approach includes:\n\n• Detailed clinical evaluation\n• Blood serological testing (TTG-IgA)\n• Genetic testing (HLA-DQ2/DQ8)\n• Upper endoscopy with intestinal biopsy\n• Strict gluten-free diet counseling\n• Nutritional assessment and supplementation\n• Monitoring for associated conditions\n• Regular follow-up and compliance support\n\nStrict gluten avoidance leads to complete remission.`,
    benefits: ["Intestinal healing", "Symptom resolution", "Improved nutrient absorption", "Reduced complication risk", "Better health outcomes"],
    faqs: [
      { q: "What foods contain gluten?", a: "Gluten is found in wheat, barley, rye, and products made from these grains. Oats may be problematic for some." },
      { q: "Is coeliac disease curable?", a: "Coeliac disease is not curable but completely manageable through strict lifelong gluten-free diet." },
      { q: "What happens if I eat gluten?", a: "Small intestine damage occurs even without immediate symptoms. Long-term consequences include malabsorption and complications." },
      { q: "How strictly must I avoid gluten?", a: "Complete gluten avoidance is necessary. Even small amounts (20 ppm) can damage the small intestine." },
    ],
  },
];

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const condition = conditionsData.find(c => c.id === slug);

  if (!condition) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Condition not found</h1>
        <button
          onClick={() => navigate("/conditions-treated")}
          className="gradient-primary text-primary-foreground font-bold rounded-xl px-6 py-3"
        >
          Back to Conditions
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* ── Hero Section ── */}
      <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10 px-4 sm:px-6">
          {/* Back button */}
        

          <div className="max-w-4xl">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block gradient-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-5 py-1 sm:py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
            >
              {condition.category}
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-foreground leading-tight mb-3 sm:mb-4
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            >
              {condition.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-3xl
                text-sm sm:text-base md:text-lg lg:text-xl"
            >
              {condition.longDesc}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6"
            >
              <button
                onClick={() => navigate("/contact")}
                className="gradient-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2
                  px-5 py-2.5 text-sm
                  sm:px-6 sm:py-3 sm:text-base"
              >
                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                Book Appointment
              </button>
              <a
                href="tel:+918081773201"
                className="bg-card border border-border font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2 text-foreground rounded-xl
                  px-5 py-2.5 text-sm
                  sm:px-6 sm:py-3 sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Overview card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl sm:rounded-2xl border border-border/50 shadow-sm
                  p-5 sm:p-6 lg:p-8"
              >
                <h2 className="font-heading font-bold text-foreground flex items-center gap-2 sm:gap-3
                  text-lg sm:text-xl md:text-2xl lg:text-3xl
                  mb-4 sm:mb-5 lg:mb-6">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0
                    w-7 h-7 sm:w-8 sm:h-8">
                    <Shield className="text-primary" size={14} />
                  </div>
                  Comprehensive Overview
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed
                  text-sm sm:text-[15px]">
                  {condition.fullContent}
                </div>
              </motion.div>

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4
                  text-base sm:text-lg lg:text-xl">
                  Our Treatment Approach
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {condition.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-border/80 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4
                  text-base sm:text-lg lg:text-xl">
                  Treatment Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {condition.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quick contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl border border-primary/20
                  p-5 sm:p-6 lg:p-7  top-20"
              >
                <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">
                  Get Expert Care
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule a consultation with our specialists for personalized treatment.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full gradient-primary text-primary-foreground font-bold rounded-lg py-2.5 text-sm sm:text-base hover:opacity-90 transition-opacity"
                  >
                    Book Appointment
                  </button>
                  <a
                    href="tel:+918081773201"
                    className="w-full bg-card border border-border text-foreground font-semibold rounded-lg py-2.5 text-sm sm:text-base hover:bg-muted transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone size={14} />
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl sm:rounded-2xl border border-border/50 p-5 sm:p-6"
              >
                <h4 className="font-heading font-bold text-foreground mb-3 text-sm sm:text-base">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2.5 text-muted-foreground text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    Expert allergists
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    Advanced diagnostics
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    Personalized treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    Ongoing support
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            <h2 className="font-heading font-bold text-foreground text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4
              flex items-center gap-2 sm:gap-3">
              <HelpCircle className="text-primary" size={24} />
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Find answers to common questions about {condition.title.toLowerCase()} and our treatment approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {condition.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border/50 rounded-lg px-4 sm:px-6 py-3 sm:py-4 bg-card hover:border-border/80 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline text-left font-semibold text-foreground text-sm sm:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base pt-2 sm:pt-3">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <CTASection />
    </div>
  );
};

export default TreatmentDetail;
