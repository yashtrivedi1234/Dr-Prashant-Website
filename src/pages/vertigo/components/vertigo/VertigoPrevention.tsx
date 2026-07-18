// components/vertigo/VertigoPrevention.tsx

const preventionItems = [
  { icon: "🏃", text: "Do regular vestibular (balance) exercises to improve stability." },
  { icon: "💊", text: "Treat ear infections early to prevent inner ear complications." },
  { icon: "🛡️", text: "Use protective gear like helmets during sports or activities with head injury risk." },
];

const VertigoPrevention = () => (
  <div className="vd-section">
    <div className="vd-section-label">Prevention</div>
    <h2 className="vd-h2">Prevention Strategies</h2>

    <div className="vd-prevention">
      {preventionItems.map((p, i) => (
        <div className="vd-prev-item" key={i}>
          <div className="vd-prev-icon">{p.icon}</div>
          <div className="vd-prev-text">{p.text}</div>
        </div>
      ))}
    </div>
  </div>
);

export default VertigoPrevention;