// components/vertigo/VertigoTreatment.tsx

const treatmentPrinciples = [
  { title: "Diagnosis First", body: "Identify the underlying cause using diagnostic tests" },
  { title: "Short-Term Medication", body: "Use only as needed, not long-term" },
  { title: "Vestibular Rehabilitation", body: "Physical therapy for balance restoration" },
  { title: "Cause-Specific Treatment", body: "Different conditions require different approaches" },
  { title: "Surgery When Needed", body: "Only for rare or severe cases" },
];

const treatmentExamples = [
  { cond: "BPPV", tx: "Canalith repositioning (Epley)" },
  { cond: "Vestibular Neuritis", tx: "Short-term medicines + rehabilitation" },
  { cond: "Migraine-related", tx: "Diet modif + lifestyle + migraine control" },
  { cond: "Anxiety-related", tx: "Balance therapy + anxiety management" },
];

const lifestyleItems = [
  { icon: "🐢", title: "Move Slowly", desc: "Avoid quick head movements that might trigger dizziness." },
  { icon: "🥗", title: "Eat Smart", desc: "Reduce salt intake for conditions like Meniere's disease." },
  { icon: "🧘", title: "Manage Stress", desc: "Practice yoga, meditation, or breathing exercises." },
  { icon: "😴", title: "Sleep Well", desc: "Good sleep helps your body stay balanced." },
];

const VertigoTreatment = () => (
  <div className="vd-section">
    <div className="vd-section-label">Treatment</div>
    <h2 className="vd-h2">Treatment for Vertigo/Dizziness</h2>
    <p className="vd-lead">
      Most people do not believe that their condition of imbalance can be cured. But fortunately,
      vertigo is curable. It is essential to get timely vertigo treatment to return to a healthy
      life as soon as possible.
    </p>

    <div className="vd-treat-principles">
      <h4>Key Treatment Principles</h4>
      {treatmentPrinciples.map((p, i) => (
        <div className="vd-treat-row" key={i}>
          <div className="vd-treat-check">✓</div>
          <div>
            <div className="vd-treat-title">{p.title}</div>
            <div className="vd-treat-body">{p.body}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="vd-treat-grid">
      <div className="vd-treat-card">
        <h4>Common Treatment Examples</h4>
        {treatmentExamples.map((ex, i) => (
          <div className="vd-example-item" key={i}>
            <div className="vd-example-line" />
            <div>
              <div className="vd-example-condition">{ex.cond}</div>
              <div className="vd-example-tx">{ex.tx}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="vd-treat-card">
        <h4>Lifestyle Modifications</h4>
        {lifestyleItems.map((item, i) => (
          <div className="vd-lifestyle-item" key={i}>
            <div className="vd-lifestyle-icon">{item.icon}</div>
            <div>
              <div className="vd-lifestyle-title">{item.title}</div>
              <div className="vd-lifestyle-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VertigoTreatment;