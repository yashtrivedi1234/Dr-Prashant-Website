// components/vertigo/VertigoAttackGuide.tsx

const attackSteps = [
  {
    title: "Sit or lie down right away",
    desc: "This helps prevent falls or injuries.",
  },
  {
    title: "Look at something that doesn't move",
    desc: "Like a clock or a spot on the ceiling. It can help stop the spinning feeling.",
  },
  {
    title: "Drink water",
    desc: "Being dehydrated can make vertigo worse, so stay hydrated.",
  },
  {
    title: "Keep calm",
    desc: "Panic can make symptoms feel worse. Breathe slowly and stay still.",
  },
];

const VertigoAttackGuide = () => (
  <div className="vd-section">
    <div className="vd-section-label">Emergency Guide</div>
    <h2 className="vd-h2">What to Do During a Vertigo Attack</h2>

    <div className="vd-attack-box">
      <h3>Stay Calm — Follow These Steps</h3>
      <div className="vd-attack-steps">
        {attackSteps.map((step, i) => (
          <div className="vd-attack-step" key={i}>
            <div className="vd-attack-step-num">{i + 1}</div>
            <div>
              <div className="vd-attack-step-title">{step.title}</div>
              <div className="vd-attack-step-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VertigoAttackGuide;