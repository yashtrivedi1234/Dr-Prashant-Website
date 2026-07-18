// components/vertigo/VertigoMeaning.tsx

const VertigoMeaning = () => (
  <div className="vd-section">
    <div className="vd-section-label">Overview</div>
    <h2 className="vd-h2">Meaning of Vertigo / Dizziness</h2>
    <p className="vd-lead">
      The word vertigo is derived from the Latin phrase <strong>verto</strong>, which means "to
      revolve." Vertigo is a false sense of motion, spinning, or feeling of imbalance. Sufferers
      often call it dizziness, imbalance, light-headedness, or "chakkar aana" in Hindi. Vertigo
      symptoms often include nausea, vomiting, difficulty in focusing on moving objects, headaches,
      changes in hearing or ringing in the ears, and difficulty in concentration or unsteadiness
      while walking.
    </p>
    <p className="vd-lead" style={{ marginTop: 12 }}>
      Understanding the dizziness causes is essential to manage and treat the condition effectively.
    </p>

    <div className="vd-highlight">
      💡 Vertigo is <strong>not a disease</strong>; it's only a symptom. Therefore, suppressing
      the symptom is not the solution. Proper diagnosis of what is causing vertigo/dizziness is
      essential.
    </div>

    <div className="vd-quickfacts">
      <div className="vd-qf">
        <div className="vd-qf-label">Medical Definition</div>
        <div className="vd-qf-val">
          Dizziness or balance disorder caused by imbalance in inner ear, vestibular nerves, or
          brain pathways.
        </div>
      </div>
      <div className="vd-qf">
        <div className="vd-qf-label">Key Causes</div>
        <div className="vd-qf-val">
          BPPV, Meniere's disease, vestibular neuritis, or neurological conditions.
        </div>
      </div>
      <div className="vd-qf">
        <div className="vd-qf-label">Duration</div>
        <div className="vd-qf-val">
          Episodes can last several seconds to hours, sometimes even longer.
        </div>
      </div>
    </div>
  </div>
);

export default VertigoMeaning;