export default function Blog() {
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
          marginBottom: "14px",
        }}
      >
        Read the latest
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#666",
          fontFamily: '"Google Sans", sans-serif',
          marginBottom: "56px",
        }}
      >
        Ideas, insights, and creative tips from the Pepperazy team.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Blog Card 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #f0a030 0%, #e8702a 40%, #d44820 70%, #c83010 100%)",
              minHeight: "240px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              padding: "24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                opacity: 0.9,
              }}
            >
              <svg
                viewBox="0 0 28 20"
                fill="none"
                style={{ width: "28px", height: "20px" }}
              >
                <path
                  d="M2 10L8 4M8 4L14 10M8 4V16"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L17 7M17 7L22 2"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"Google Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: "22px",
                  color: "#fff",
                  lineHeight: 1.15,
                  marginBottom: "8px",
                }}
              >
                Dropshipping
                <br />
                in 2026
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontFamily: '"Google Sans", sans-serif',
                  lineHeight: 1.4,
                }}
              >
                the one bottleneck
                <br />
                that automation still
                <br />
                hasn&apos;t touched
              </div>
            </div>
          </div>
          <div
            style={{
              background: "var(--purple)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "20px",
              display: "inline-block",
              fontFamily: '"Google Sans", sans-serif',
              alignSelf: "flex-start",
            }}
          >
            VIDEO MARKETING
          </div>
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 700,
              fontSize: "18px",
              color: "#111",
              lineHeight: 1.25,
            }}
          >
            Dropshipping in 2026: The One Thing Automation Misses
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#ddd",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            ></div>
            <span
              style={{
                fontSize: "13px",
                color: "#888",
                fontFamily: '"Google Sans", sans-serif',
              }}
            >
              Mar 19, 2026
            </span>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #f0a030 0%, #e87030 40%, #c84820 100%)",
              minHeight: "240px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              padding: "24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                opacity: 0.9,
              }}
            >
              <svg
                viewBox="0 0 28 20"
                fill="none"
                style={{ width: "28px", height: "20px" }}
              >
                <path
                  d="M2 10L8 4M8 4L14 10M8 4V16"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L17 7M17 7L22 2"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                fontFamily: '"Google Sans", sans-serif',
                fontWeight: 800,
                fontSize: "20px",
                color: "#fff",
                lineHeight: 1.15,
                maxWidth: "55%",
              }}
            >
              What is UGC content? Meaning, examples, and tips for marketers
            </div>
          </div>
          <div
            style={{
              background: "var(--purple)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "20px",
              display: "inline-block",
              fontFamily: '"Google Sans", sans-serif',
              alignSelf: "flex-start",
            }}
          >
            VIDEO MARKETING
          </div>
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 700,
              fontSize: "18px",
              color: "#111",
              lineHeight: 1.25,
            }}
          >
            What is UGC content? Meaning, examples, and tips for marketers
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#ddd",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            ></div>
            <span
              style={{
                fontSize: "13px",
                color: "#888",
                fontFamily: '"Google Sans", sans-serif',
              }}
            >
              Mar 17, 2026
            </span>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #f0a030 0%, #e06090 50%, #c040c0 100%)",
              minHeight: "240px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              padding: "24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                opacity: 0.9,
              }}
            >
              <svg
                viewBox="0 0 28 20"
                fill="none"
                style={{ width: "28px", height: "20px" }}
              >
                <path
                  d="M2 10L8 4M8 4L14 10M8 4V16"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L17 7M17 7L22 2"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                fontFamily: '"Google Sans", sans-serif',
                fontWeight: 800,
                fontSize: "20px",
                color: "#fff",
                lineHeight: 1.15,
                maxWidth: "50%",
              }}
            >
              10 best ai video generators we tested for 2026
            </div>
          </div>
          <div
            style={{
              background: "var(--purple)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "20px",
              display: "inline-block",
              fontFamily: '"Google Sans", sans-serif',
              alignSelf: "flex-start",
            }}
          >
            VIDEO MARKETING
          </div>
          <div
            style={{
              fontFamily: '"Google Sans", sans-serif',
              fontWeight: 700,
              fontSize: "18px",
              color: "#111",
              lineHeight: 1.25,
            }}
          >
            10 best AI video generators we tested for 2026
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#ddd",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            ></div>
            <span
              style={{
                fontSize: "13px",
                color: "#888",
                fontFamily: '"Google Sans", sans-serif',
              }}
            >
              Mar 14, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
