// components/vertigo/VertigoRiskFactors.tsx

import { riskFactors } from "../../data/vertigoData";

const VertigoRiskFactors = () => (
  <div className="vd-section">
    <div className="vd-section-label">Risk Factors</div>
    <h2 className="vd-h2">Risk Factors for Vertigo</h2>
    <p className="vd-lead">Some things can make you more likely to get vertigo:</p>

    <div className="vd-risk-grid">
      {riskFactors.map((r, i) => (
        <div className="vd-risk-card" key={i}>
          <div className="vd-risk-dot" />
          <div>
            <div className="vd-risk-label">{r.label}</div>
            <div className="vd-risk-detail">{r.detail}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default VertigoRiskFactors;