// components/vertigo/VertigoDiagnosis.tsx

const VertigoDiagnosis = () => (
  <div className="vd-section">
    <div className="vd-section-label">Diagnostics</div>
    <h2 className="vd-h2">Accurate Vertigo Diagnosis</h2>
    <p className="vd-lead">
      Various tests can help diagnose vertigo and its underlying cause. The doctor will look for
      abnormal eye movements and ascertain that the ability to follow objects is normal.
    </p>

    <div className="vd-diag-grid">
      <div className="vd-diag-card">
        <h4>Diagnostic Tests</h4>
        <ul>
          <li>Videonystagmography (VNG)</li>
          <li>Craniocorpography (CCG)</li>
          <li>Subjective Visual Vertical (SVV)</li>
          <li>Computerized Dynamic Visual Acuity (DVA)</li>
          <li>VEMP Test</li>
        </ul>
      </div>
      <div className="vd-diag-card">
        <h4>What We Evaluate</h4>
        <ul>
          <li>Source of balance disorder</li>
          <li>Frequency of episodes</li>
          <li>Severity of symptoms</li>
          <li>Associated symptoms</li>
          <li>Patient's medical history</li>
        </ul>
      </div>
    </div>
  </div>
);

export default VertigoDiagnosis;