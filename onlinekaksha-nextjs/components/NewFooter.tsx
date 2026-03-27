export default function NewFooter() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        padding: "4rem 0 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid-responsive"
        >
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <img
                src="/Online Kaksha (Website Logo).png"
                alt="Online Kaksha"
                style={{
                  height: "50px",
                  width: "auto",
                }}
              />
            </div>
            <p
              style={{
                marginTop: "1rem",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Your trusted partner in competitive exam preparation. Free
              resources for everyone, premium content for serious learners.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "var(--text-main)",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>
                <a
                  href="#about"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#free-resources"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Free Resources
                </a>
              </li>
              <li>
                <a
                  href="#premium"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Premium Courses
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "var(--text-main)",
              }}
            >
              Resources
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  PYQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Daily Quizzes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Study Notes
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@chanakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "var(--text-main)",
              }}
            >
              Connect
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            color: "var(--text-muted)",
            fontSize: "0.875rem",
          }}
        >
          <p>&copy; 2026 Online Kaksha. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
