export default function ToppersSection() {
  const toppers = [
    {
      rank: "AIR 12",
      quote:
        "The concept clarity and problem practice helped me convert weak areas into scoring topics within a few months.",
      name: "Anjali Verma",
      exam: "GATE 2026 • Score 79.3",
      initials: "AV",
    },
    {
      rank: "AIR 38",
      quote:
        "Daily writing tasks and mentor review created the discipline I needed for UPSC preparation.",
      name: "Vikram Singh",
      exam: "UPSC CSE • 1041 marks",
      initials: "VS",
    },
    {
      rank: "AIR 07",
      quote:
        "Short quizzes, fast revision classes, and careful test review improved both speed and accuracy.",
      name: "Priya Das",
      exam: "SBI PO • Final selection",
      initials: "PD",
    },
    {
      rank: "Top 1%",
      quote:
        "The mock environment felt realistic and helped me become calm, fast, and exam-ready on the final day.",
      name: "Rahul Jha",
      exam: "SSC CGL • Final shortlist",
      initials: "RJ",
    },
  ];

  return (
    <section id="toppers" style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Toppers Wall</span>
          <h2>Student outcomes backed by consistency</h2>
          <p>
            Top results from learners who used structured classes, tests, and
            mentor-led revision to improve rank and confidence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {toppers.map((topper, i) => (
            <article
              key={i}
              className="reveal"
              style={{
                padding: "24px",
                borderRadius: "24px",
                border: "1px solid var(--line)",
                background: "#ffffff",
                boxShadow: "var(--shadow-sm)",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "82px",
                  height: "36px",
                  borderRadius: "999px",
                  background: "var(--primary-soft)",
                  color: "var(--primary-dark)",
                  fontSize: "0.82rem",
                  fontWeight: "800",
                  marginBottom: "16px",
                }}
              >
                {topper.rank}
              </span>
              <p style={{ color: "var(--text-main)", marginBottom: "20px" }}>
                "{topper.quote}"
              </p>
              <div
                style={{ display: "flex", gap: "14px", alignItems: "center" }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: "var(--primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                  }}
                >
                  {topper.initials}
                </div>
                <div>
                  <strong style={{ color: "var(--dark)" }}>
                    {topper.name}
                  </strong>
                  <br />
                  <span
                    style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                  >
                    {topper.exam}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
