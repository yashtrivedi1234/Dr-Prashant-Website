// components/vertigo/VertigoSymptoms.tsx

import { symptoms } from "../../data/vertigoData";

const VertigoSymptoms = () => (
  <div className="vd-section">
    <div className="vd-section-label">Signs</div>
    <h2 className="vd-h2">Symptoms of Vertigo/Dizziness</h2>
    <p className="vd-lead">
      Patients suffering from persistent or intermittent vertigo usually describe their symptoms as:
    </p>

    <div className="vd-sym-grid">
      {symptoms.map((s) => (
        <div className="vd-sym-card" key={s.name}>
          <div className="icon">{s.icon}</div>
          <div className="name">{s.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default VertigoSymptoms;