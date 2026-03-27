export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0d0d14",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 20% 100%, #e8735a22 0%, transparent 55%), radial-gradient(ellipse 70% 70% at 80% 100%, #c45fbb22 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 80px 40px",
          display: "flex",
          gap: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>
            Pepperazy
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "320px",
              lineHeight: 1.6,
            }}
          >
            The #1 AI Ad Platform for creating, testing, and optimizing video
            ads at scale.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
        >
          <div>
            <h4
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Platform
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Create
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Launch
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Optimize
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Analytics
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Resources
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Blog
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Case Studies
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Help Center
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                API Docs
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Company
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                About
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Careers
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Contact
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Press
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Legal
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Privacy
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Terms
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "28px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
          Pepperazy Lab • Copyright © 2026
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Terms of service
          </a>
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
