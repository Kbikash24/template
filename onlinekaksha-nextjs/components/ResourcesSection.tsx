export default function ResourcesSection() {
  const resources = [
    {
      icon: "fa-file-pdf",
      title: "PDF Notes",
      description:
        "Clean class notes, formulas, short revision pages, and printable summaries for daily use.",
    },
    {
      icon: "fa-list-check",
      title: "Mock Tests",
      description:
        "Topic-wise and full-length tests with performance review and improvement suggestions.",
    },
    {
      icon: "fa-bell",
      title: "Exam Alerts",
      description:
        "Get updates for forms, results, answer keys, interviews, and admission-related notices.",
    },
    {
      icon: "fa-comments",
      title: "Doubt Support",
      description:
        "Raise questions after class, get support from mentors, and avoid gaps in understanding.",
    },
  ];

  return (
    <section id="resources" style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Study Resources</span>
          <h2>Beyond class videos, everything needed to prepare better</h2>
          <p>
            Notes, tests, alerts, and support resources are organized to keep
            the learning journey serious and efficient.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          {resources.map((resource, i) => (
            <article
              key={i}
              className="reveal"
              style={{
                padding: "24px",
                borderRadius: "24px",
                border: "1px solid var(--line)",
                background: "#ffffff",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <i
                className={`fa-solid ${resource.icon}`}
                style={{
                  width: "54px",
                  height: "54px",
                  marginBottom: "16px",
                  borderRadius: "18px",
                  background: "var(--primary-soft)",
                  color: "var(--primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              ></i>
              <h3 style={{ color: "var(--dark)", marginBottom: "8px" }}>
                {resource.title}
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "0.94rem" }}>
                {resource.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
