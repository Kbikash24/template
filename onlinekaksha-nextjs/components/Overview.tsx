export default function Overview() {
  return (
    <section id="overview" style={{ padding: "0 0 90px" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Why Online Kaksha</span>
          <h2>A sharper learning system for competitive exams</h2>
          <p>
            From structured teaching and notes to tests and mentor follow-up,
            the platform is designed to make preparation more consistent.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              icon: "fa-video",
              number: "900+",
              text: "high-quality recorded and live sessions",
            },
            {
              icon: "fa-file-circle-check",
              number: "450+",
              text: "practice sheets, notes, and topic tests",
            },
            {
              icon: "fa-users-gear",
              number: "180+",
              text: "weekly faculty and mentor interactions",
            },
            {
              icon: "fa-trophy",
              number: "8k+",
              text: "student success stories and score jumps",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "26px",
                borderRadius: "24px",
                background: "#ffffff",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
                textAlign: "center",
              }}
            >
              <i
                className={`fa-solid ${item.icon}`}
                style={{
                  width: "56px",
                  height: "56px",
                  margin: "0 auto 16px",
                  borderRadius: "18px",
                  background: "var(--primary-soft)",
                  color: "var(--primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                }}
              ></i>
              <strong
                style={{
                  display: "block",
                  color: "var(--dark)",
                  fontSize: "2rem",
                  marginBottom: "6px",
                }}
              >
                {item.number}
              </strong>
              <span style={{ color: "var(--text-light)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
