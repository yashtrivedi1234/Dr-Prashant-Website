// components/vertigo/VertigoCauses.tsx

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { causes } from "../../data/vertigoData";

const VertigoCauses = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="vd-section">
      <div className="vd-section-label">Etiology</div>
      <h2 className="vd-h2">Causes of Vertigo/Dizziness</h2>

      <div className="vd-cause-list">
        {causes.map((cause, i) => (
          <div
            key={cause.id}
            className={`vd-cause-item${expanded === cause.id ? " open" : ""}`}
            onClick={() => setExpanded(expanded === cause.id ? null : cause.id)}
          >
            <div className="vd-cause-header">
              <div className="vd-cause-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="vd-cause-title-wrap">
                <div className="vd-cause-title">{cause.title}</div>
                <div className="vd-cause-sub">{cause.shortDesc}</div>
              </div>
              <div className="vd-cause-chevron">
                {expanded === cause.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>
            {expanded === cause.id && (
              <div className="vd-cause-body">{cause.fullDesc}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VertigoCauses;