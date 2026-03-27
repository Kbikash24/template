export default function TrustCompliance() {
  return (
    <section
      style={{
        background: "#f5f4f2",
        padding: "80px 80px 90px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: '"Google Sans", sans-serif',
          fontWeight: 800,
          fontSize: "clamp(32px, 5vw, 60px)",
          color: "#111",
          letterSpacing: "-0.02em",
          marginBottom: "56px",
        }}
      >
        Trust and compliance
      </h2>

      {/* Top Row: Industry, Media, Compliance */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto 16px",
          textAlign: "left",
        }}
      >
        {/* Industry Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 2px 16px rgba(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 800,
              fontSize: "24px",
              color: "#111",
            }}
          >
            Industry
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: '"Google Sans", sans-serif',
              lineHeight: 1.6,
            }}
          >
            We&apos;ve earned 40+ badges and hold a 4.8/5 rating on G2.
          </p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, #ff4820, #ff6a00)",
                  borderRadius: "6px",
                  padding: "6px 8px",
                  fontSize: "8px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: '"Google Sans", sans-serif',
                  textAlign: "center",
                  width: "52px",
                }}
              >
                <div style={{ fontSize: "6px", opacity: 0.8 }}>
                  BEST SOFTWARE
                </div>
                <div style={{ fontSize: "9px", fontWeight: 800 }}>Top 50</div>
                <div style={{ fontSize: "5px", opacity: 0.7 }}>2026</div>
              </div>
            ))}
          </div>
          <div
            style={{
              border: "1.5px solid #e8e0ff",
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px" }}>🏅</span>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#888",
                  fontFamily: '"Google Sans", sans-serif',
                }}
              >
                PRODUCT HUNT
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#e8600a",
                  fontFamily: '"Google Sans", sans-serif',
                }}
              >
                #1 Product of the Day
              </div>
            </div>
          </div>
          <a
            href="#"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--purple)",
              fontFamily: '"Google Sans", sans-serif',
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "auto",
            }}
          >
            LEARN MORE →
          </a>
        </div>

        {/* Media Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 2px 16px rgba(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 800,
              fontSize: "24px",
              color: "#111",
            }}
          >
            Media
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: '"Google Sans", sans-serif',
              lineHeight: 1.6,
            }}
          >
            We&apos;ve been featured and recognized by leading publications like
            Fast Company, Bloomberg, and TechCrunch.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "#111",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "Georgia, serif",
              }}
            >
              FC
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 800,
                color: "#0aaf3b",
                fontFamily: '"Google Sans", sans-serif',
                letterSpacing: "-0.01em",
              }}
            >
              TC
            </div>
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "#111",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "Georgia, serif",
              }}
            >
              B
            </div>
          </div>
          <a
            href="#"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--purple)",
              fontFamily: '"Google Sans", sans-serif',
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "auto",
            }}
          >
            LEARN MORE →
          </a>
        </div>

        {/* Compliance Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 2px 16px rgba(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 800,
              fontSize: "24px",
              color: "#111",
            }}
          >
            Compliance
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: '"Google Sans", sans-serif',
              lineHeight: 1.6,
            }}
          >
            Enterprise-grade security and compliance — including{" "}
            <strong>SOC 2 Type II</strong>. Your data stays protected and under
            your control.
          </p>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "linear-gradient(135deg, #6c47ff, #9c27b0)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: '"Google Sans", sans-serif',
                  lineHeight: 1.1,
                }}
              >
                SOC 2
              </div>
              <svg
                viewBox="0 0 16 16"
                style={{
                  width: "12px",
                  height: "12px",
                  fill: "#fff",
                  marginTop: "2px",
                }}
              >
                <path d="M8 1L10 6H15L11 9L13 14L8 11L3 14L5 9L1 6H6Z" />
              </svg>
            </div>
          </div>
          <a
            href="#"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--purple)",
              fontFamily: '"Google Sans", sans-serif',
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            DOWNLOAD
          </a>
        </div>
      </div>

      {/* Bottom Row: Platforms + Investors */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Compatible with Platforms */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 2px 16px rgba(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 800,
              fontSize: "22px",
              color: "#111",
            }}
          >
            Compatible with Platforms
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: '"Google Sans", sans-serif',
              lineHeight: 1.6,
            }}
          >
            Works with Meta, TikTok, Youtube, Snap, Amazon and more.
          </p>
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#1877f2",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              📘
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#010101",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🎵
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#ff0000",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ▶️
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#fffc00",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              👻
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#ff9900",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                color: "#111",
                fontFamily: '"Google Sans", sans-serif',
              }}
            >
              amzn
            </div>
          </div>
        </div>

        {/* Investors */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 2px 16px rgba(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 800,
              fontSize: "22px",
              color: "#111",
            }}
          >
            Investors
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              fontFamily: '"Google Sans", sans-serif',
              lineHeight: 1.6,
            }}
          >
            We&apos;ve raised $24M from the best in the industry such as WndrCo,
            Kindred Ventures, NFDG, and Comcast Ventures.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {["WndrCo", "Kindred", "NFDG", "Comcast Ventures"].map(
              (investor) => (
                <div
                  key={investor}
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#111",
                    fontFamily: '"Google Sans", sans-serif',
                    background: "#f0ecff",
                    padding: "8px 14px",
                    borderRadius: "8px",
                  }}
                >
                  {investor}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
