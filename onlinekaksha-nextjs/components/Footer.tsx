export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 0 32px",
        borderTop: "1px solid var(--line)",
        background: "#ffffff",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "36px",
            marginBottom: "44px",
          }}
        >
          <div className="footer-brand">
            <h2 style={{ color: "var(--dark)", marginBottom: "16px" }}>
              Online Kaksha.
            </h2>
            <p style={{ color: "var(--text-light)", marginBottom: "18px" }}>
              A modern EdTech landing experience for competitive exam
              preparation with live faculty, clean design, and focused batch
              journeys.
            </p>
            <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
              <a
                href="#"
                style={{
                  color: "var(--text-light)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-light)")
                }
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="#"
                style={{
                  color: "var(--text-light)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-light)")
                }
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                style={{
                  color: "var(--text-light)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-light)")
                }
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="#"
                style={{
                  color: "var(--text-light)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-light)")
                }
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--dark)", marginBottom: "16px" }}>
              Programs
            </h4>
            <ul>
              {["GATE & PSU", "UPSC", "SSC", "Banking"].map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  <a href="#courses" style={{ color: "var(--text-light)" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--dark)", marginBottom: "16px" }}>
              Resources
            </h4>
            <ul>
              {["Notes", "Mock Tests", "Toppers Wall", "Why Us"].map(
                (item, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ color: "var(--text-light)" }}>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--dark)", marginBottom: "16px" }}>
              Support
            </h4>
            <ul>
              {[
                "Contact Us",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "var(--text-light)" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            paddingTop: "26px",
            borderTop: "1px solid var(--line)",
            textAlign: "center",
            fontSize: "0.92rem",
            color: "var(--text-light)",
          }}
        >
          <p>&copy; 2026 Online Kaksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
