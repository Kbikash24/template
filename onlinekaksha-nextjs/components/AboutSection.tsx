export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "6rem 0", background: "var(--bg-surface)" }}
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
              background: "var(--primary-light)",
              color: "var(--primary-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Who We Are
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
            About Online Kaksha
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Your trusted partner in competitive exam preparation and career
            success.
          </p>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              background: "white",
              padding: "3rem",
              borderRadius: "1.5rem",
              boxShadow: "var(--shadow-md)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "var(--primary-light)",
                borderRadius: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "var(--primary)",
                margin: "0 auto 2rem",
                border: "2px solid var(--primary)",
              }}
            >
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "var(--text-main)",
                marginBottom: "2rem",
              }}
            >
              <strong>Online Kaksha</strong> is dedicated to democratizing
              quality education for competitive exam aspirants across India. We
              provide a perfect blend of <strong>free resources</strong> for
              everyone and <strong>premium content</strong> for those who want
              comprehensive preparation.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                marginBottom: "2rem",
              }}
            >
              Founded by <strong>Chanakya</strong>, an experienced educator with
              a passion for helping students succeed, we've helped thousands of
              students achieve their career goals through UPSC, SSC, Banking,
              and other competitive exams. Our mission is to make quality
              education accessible and affordable for all.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                marginTop: "3rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  50k+
                </div>
                <div style={{ color: "var(--text-muted)" }}>
                  Active Students
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  5000+
                </div>
                <div style={{ color: "var(--text-muted)" }}>
                  Success Stories
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  100+
                </div>
                <div style={{ color: "var(--text-muted)" }}>
                  Premium Courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
