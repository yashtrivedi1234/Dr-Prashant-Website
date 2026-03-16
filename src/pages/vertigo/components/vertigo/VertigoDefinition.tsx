// components/vertigo/VertigoDefinition.tsx

const VertigoDefinition = () => (
  <div className="vd-section">
    <div className="vd-section-label">Definition</div>
    <h2 className="vd-h2">Vertigo Meaning</h2>
    <p className="vd-lead">
      A false feeling of rotation or movement when you are actually not moving. It is not a disease
      per se, but a symptom of a disease in the inner ear or the brain. Individuals who have vertigo
      may say that it feels like the room is spinning, leaning, or swinging around them.
    </p>
    <p className="vd-lead" style={{ marginTop: 12 }}>
      Your brain receives conflicting signals from your inner ear, eyes, and body. This creates an
      illusion that you are moving when you are not.{" "}
      <em style={{ color: "#777", fontStyle: "italic" }}>
        For example, your inner ear may be telling you that you are spinning but your eyes and
        muscles are telling you not to move, causing the brain to interpret this as vertigo.
      </em>
    </p>
  </div>
);

export default VertigoDefinition;