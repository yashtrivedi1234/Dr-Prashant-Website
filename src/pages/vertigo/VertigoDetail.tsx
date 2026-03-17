// pages/VertigoDetail.tsx
// Main page — assembles all vertigo section components.

import "./components/vertigo/vertigo.css";
import CTASection from "@/components/CTASection";

import {
  VertigoHero,
  VertigoMeaning,
  VertigoDefinition,
  VertigoVsDizziness,
  VertigoSymptoms,
  VertigoCauses,
  VertigoTypes,
  VertigoRiskFactors,
  VertigoAttackGuide,
  VertigoDiagnosis,
  VertigoTreatment,
  VertigoPrevention,
  VertigoFaq,
  VertigoSummary,
  VertigoCta,
} from "./components/vertigo";

const VertigoDetail = () => (
  <div className="vertigo-page">
    <VertigoHero />
       
    <div className="vd-body">
      <VertigoMeaning />
      <VertigoDefinition />
      <VertigoVsDizziness />
      <VertigoSymptoms />
      <VertigoCauses />
      <VertigoTypes />
      <VertigoRiskFactors />
      <VertigoAttackGuide />
      <VertigoDiagnosis />
      <VertigoTreatment />
      <VertigoPrevention />
      <VertigoFaq />
      <VertigoSummary />
      {/* <VertigoCta /> */}
    </div>

    <CTASection />
  </div>
);

export default VertigoDetail;