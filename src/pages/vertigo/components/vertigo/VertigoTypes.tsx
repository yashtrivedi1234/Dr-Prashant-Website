// components/vertigo/VertigoTypes.tsx

const VertigoTypes = () => (
  <div className="vd-section">
    <div className="vd-section-label">Classification</div>
    <h2 className="vd-h2">Types of Vertigo</h2>

    <div className="vd-types-grid">
      <div className="vd-type-card peripheral">
        <h3>Peripheral Vertigo</h3>
        <p>This kind happens when there's a problem in your inner ear, which helps with balance.</p>
        <div className="sub-label">Common Causes</div>
        <ul>
          <li>BPPV (Benign Paroxysmal Positional Vertigo)</li>
          <li>Meniere's Disease</li>
          <li>Vestibular Neuritis</li>
        </ul>
        <div className="sub-label" style={{ marginTop: 14 }}>
          Symptoms
        </div>
        <p style={{ margin: 0, fontSize: ".87rem", color: "#555" }}>
          Spinning sensation, dizziness when moving head, ringing in ears, imbalance.
        </p>
      </div>

      <div className="vd-type-card central">
        <h3>Central Vertigo</h3>
        <p>
          This type is caused by problems in your brain, especially areas that control balance.
        </p>
        <div className="sub-label">Common Causes</div>
        <ul>
          <li>Stroke</li>
          <li>Brain tumors</li>
          <li>Multiple sclerosis (MS)</li>
        </ul>
        <div className="sub-label" style={{ marginTop: 14 }}>
          Symptoms
        </div>
        <p style={{ margin: 0, fontSize: ".87rem", color: "#555" }}>
          Dizziness with trouble speaking, weakness, or vision problems.
        </p>
      </div>
    </div>
  </div>
);

export default VertigoTypes;