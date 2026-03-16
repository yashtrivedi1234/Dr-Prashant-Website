// components/vertigo/VertigoVsDizziness.tsx

const VertigoVsDizziness = () => (
  <div className="vd-section">
    <div className="vd-section-label">Comparison</div>
    <h2 className="vd-h2">Vertigo vs. Dizziness: Key Differences</h2>
    <p className="vd-lead">
      Many people often use the terms vertigo and dizziness interchangeably, but they describe
      different sensations and have distinct underlying causes.
    </p>

    <div className="vd-def-grid">
      <div className="vd-def-card blue">
        <div className="tag">Vertigo</div>
        <h3>What is Vertigo?</h3>
        <p>
          Vertigo is a specific type of dizziness that gives the false sensation that you or your
          surroundings are spinning or moving.
        </p>
        <div
          style={{
            fontSize: ".8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "#888",
            marginBottom: 8,
          }}
        >
          Common Symptoms
        </div>
        <ul>
          <li>A spinning sensation</li>
          <li>Loss of balance or unsteadiness</li>
          <li>Nausea and vomiting</li>
          <li>Abnormal eye movements (nystagmus)</li>
          <li>Difficulty focusing</li>
        </ul>
      </div>

      <div className="vd-def-card teal">
        <div className="tag">Dizziness</div>
        <h3>What is Dizziness?</h3>
        <p>
          Dizziness is a broader term that refers to sensations like feeling lightheaded, faint,
          unsteady, or disoriented. It does not always involve spinning.
        </p>
        <div
          style={{
            fontSize: ".8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "#888",
            marginBottom: 8,
          }}
        >
          Common Causes
        </div>
        <ul>
          <li>Low blood pressure</li>
          <li>Dehydration</li>
          <li>Anemia</li>
          <li>Anxiety or panic attacks</li>
          <li>Heart problems</li>
        </ul>
      </div>
    </div>
  </div>
);

export default VertigoVsDizziness;