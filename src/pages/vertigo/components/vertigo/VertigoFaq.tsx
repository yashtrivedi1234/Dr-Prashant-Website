// components/vertigo/VertigoFaq.tsx

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/vertigoData";

const VertigoFaq = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="vd-section">
      <div className="vd-section-label">FAQ</div>
      <h2 className="vd-h2">Frequently Asked Questions</h2>

      <div className="vd-faq-list">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="vd-faq-item"
            onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
          >
            <div className="vd-faq-header">
              <div className="vd-faq-q">{faq.question}</div>
              <div className="vd-faq-chevron">
                {expanded === faq.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>
            {expanded === faq.id && (
              <div className="vd-faq-body">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VertigoFaq;