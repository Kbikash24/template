export default function FreeResourcesSection() {
  const resources = [
    {
      icon: "fa-file-lines",
      title: "Free PYQs",
      description:
        "Previous Year Questions from top exams. Practice with authentic question papers and boost your preparation.",
      link: "#pyqs",
      linkText: "Access PYQs",
      primary: true,
    },
    {
      icon: "fa-clipboard-question",
      title: "Daily Quizzes",
      description:
        "Fresh quizzes every day across all subjects. Test your knowledge and track your progress daily.",
      link: "#quizzes",
      linkText: "Take Quiz",
      secondary: true,
    },
    {
      icon: "fa-book",
      title: "Study Notes",
      description:
        "Comprehensive notes covering all topics. Well-organized, easy to understand, and completely free.",
      link: "#notes",
      linkText: "Download Notes",
      primary: true,
    },
    {
      icon: "fa-youtube",
      title: "Video Lectures",
      description:
        "Free video content on our YouTube channel. Subscribe to Chanakya's channel for regular updates.",
      link: "https://youtube.com/@chanakya",
      linkText: "Watch Now",
      youtube: true,
    },
  ];

  return (
    <section
      id="free-resources"
      style={{ padding: "6rem 0", background: "white", position: "relative" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              background: "var(--secondary-light)",
              color: "var(--secondary-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            💯 100% Free
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--text-main)",
              marginTop: "1rem",
            }}
          >
            Free Learning Resources
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Access our extensive collection of free study materials, practice
            tests, and daily quizzes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {resources.map((resource, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                border: "2px solid #e2e8f0",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: resource.primary
                      ? "var(--primary-light)"
                      : resource.secondary
                        ? "var(--secondary-light)"
                        : "var(--primary-light)",
                    borderRadius: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: resource.primary
                      ? "var(--primary)"
                      : resource.secondary
                        ? "var(--secondary)"
                        : "#ff0000",
                    border: `2px solid ${resource.primary ? "var(--primary)" : resource.secondary ? "var(--secondary)" : "#ff0000"}`,
                  }}
                >
                  <i
                    className={`fa-${resource.youtube ? "brands" : "solid"} ${resource.icon}`}
                  ></i>
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: "var(--text-main)",
                }}
              >
                {resource.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {resource.description}
              </p>

              <a
                href={resource.link}
                target={resource.youtube ? "_blank" : undefined}
                rel={resource.youtube ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--primary)",
                  fontWeight: 600,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.5rem")}
              >
                {resource.linkText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
