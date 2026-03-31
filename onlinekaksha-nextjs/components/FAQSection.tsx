"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I attend a class before enrolling in a batch?",
      answer:
        "Yes. You can start with free live sessions and then choose a batch after reviewing the teaching style and schedule.",
    },
    {
      question: "Are recordings and notes included in the batch?",
      answer:
        "Yes. Recordings, class notes, assignments, and test support are included in the batch learning flow.",
    },
    {
      question: "Does Online Kaksha support multiple competitive exams?",
      answer:
        "Yes. The platform is positioned for major competitive exams including GATE, UPSC, SSC, and Banking programs.",
    },
  ];

  return (
    <section style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">FAQs</span>
          <h2>Key answers before you join</h2>
          <p>
            Common questions about free access, live classes, batch support, and
            recorded learning.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid var(--line)",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "24px 0",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--dark)",
                  fontSize: "1.08rem",
                  fontWeight: "700",
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                {faq.question}
                <i
                  className={`fa-solid fa-chevron-down`}
                  style={{
                    transform:
                      activeIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                ></i>
              </button>
              <div
                style={{
                  maxHeight: activeIndex === i ? "160px" : "0",
                  overflow: "hidden",
                  color: "var(--text-light)",
                  transition: "max-height 0.25s ease",
                }}
              >
                <p style={{ paddingBottom: "20px" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
