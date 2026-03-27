"use client";

export default function NewHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "140px",
        paddingBottom: "100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid-responsive"
        >
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                background: "var(--primary-light)",
                color: "var(--primary-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.5rem",
              }}
            >
              🎓 Online Learning Platform
            </span>

            <h1
              style={{
                fontSize: "4rem",
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Welcome to{" "}
              <span style={{ color: "var(--primary)" }}>Online Kaksha</span>
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                maxWidth: "500px",
              }}
            >
              Your trusted partner in competitive exam preparation. Free
              resources for everyone, premium content for serious learners.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("free-resources")}
              >
                Explore Free Resources
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection("premium")}
              >
                View Premium Courses
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "3rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
              className="hero-stats-responsive"
            >
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  50k+
                </strong>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
                >
                  Active Students
                </span>
              </div>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  5000+
                </strong>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
                >
                  Success Stories
                </span>
              </div>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  100+
                </strong>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
                >
                  Premium Courses
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "500px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/profile.png"
              alt="Online Kaksha"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                animation: "float-profile 6s ease-in-out infinite",
                filter: "drop-shadow(0 20px 60px rgba(220, 95, 0, 0.3))",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-profile {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          .hero-stats-responsive {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
