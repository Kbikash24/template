"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  onOpenModal: (title: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const revealRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ padding: "60px 0 88px" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.04fr) minmax(360px, 0.96fr)",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <div className="reveal" style={{ maxWidth: "620px" }}>
            <span
              className="section-kicker"
              style={{
                padding: "10px 14px",
                border: "1px solid var(--line)",
                borderRadius: "999px",
                background: "#f8fbff",
              }}
            >
              India-focused exam preparation platform
            </span>
            <h1
              style={{
                color: "var(--dark)",
                fontSize: "clamp(3.1rem, 6vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.08em",
                marginBottom: "20px",
              }}
            >
              Learn from strong mentors. Prepare with rank-level clarity.
            </h1>
            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-light)",
                marginBottom: "28px",
              }}
            >
              Online Kaksha brings live classes, structured batches, tests,
              notes, and guided revision into one clean learning experience for
              serious aspirants across major competitive exams.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => onOpenModal("Join for Free")}
              >
                Join for Free
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("courses")}
              >
                Explore Popular Batches
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: "20px",
                  border: "1px solid var(--line)",
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    color: "var(--dark)",
                    fontSize: "1.2rem",
                    marginBottom: "4px",
                  }}
                >
                  12M+
                </strong>
                <span
                  style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                >
                  students reached through online learning
                </span>
              </div>
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: "20px",
                  border: "1px solid var(--line)",
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    color: "var(--dark)",
                    fontSize: "1.2rem",
                    marginBottom: "4px",
                  }}
                >
                  180+
                </strong>
                <span
                  style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                >
                  educators and mentor support sessions
                </span>
              </div>
              <div
                style={{
                  padding: "18px 16px",
                  borderRadius: "20px",
                  border: "1px solid var(--line)",
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    color: "var(--dark)",
                    fontSize: "1.2rem",
                    marginBottom: "4px",
                  }}
                >
                  4.8/5
                </strong>
                <span
                  style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                >
                  average learner satisfaction across batches
                </span>
              </div>
            </div>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 240px",
              gap: "18px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-lg)",
                background: "linear-gradient(180deg, #f4f8ff 0%, #e7efff 100%)",
                border: "1px solid #d8e2f2",
                boxShadow: "var(--shadow-lg)",
                minHeight: "640px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "22px",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.96)",
                  color: "var(--primary-dark)",
                  fontSize: "0.84rem",
                  fontWeight: "800",
                  zIndex: 1,
                }}
              >
                Top Faculty • Live Today
              </span>
              <img
                src="https://picsum.photos/seed/onk-teacher/560/640"
                alt="Lead educator"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "22px",
                  left: "22px",
                  bottom: "22px",
                  padding: "18px 20px",
                  borderRadius: "24px",
                  background: "rgba(12, 45, 103, 0.92)",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  zIndex: 1,
                }}
              >
                <div>
                  <strong>Lead Mentor</strong>
                  <br />
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.72)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Strategy-driven online teaching for exam preparation and
                    score improvement
                  </span>
                </div>
                <strong>10+ yrs</strong>
              </div>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              <div
                style={{
                  padding: "22px",
                  borderRadius: "24px",
                  background: "#ffffff",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <h3
                  style={{
                    color: "var(--dark)",
                    fontSize: "1.2rem",
                    marginBottom: "8px",
                  }}
                >
                  Live Classes
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    fontSize: "0.93rem",
                    marginBottom: "18px",
                  }}
                >
                  Join fast-moving sessions with teacher interaction, concept
                  clearing, and daily study momentum.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: "999px",
                      background: "#fff8dc",
                      color: "#8a6500",
                      fontSize: "0.8rem",
                      fontWeight: "800",
                    }}
                  >
                    Today 7:00 PM
                  </span>
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: "999px",
                      background: "#fff8dc",
                      color: "#8a6500",
                      fontSize: "0.8rem",
                      fontWeight: "800",
                    }}
                  >
                    Free access
                  </span>
                </div>
                <div
                  style={{ display: "grid", gap: "12px", marginBottom: "18px" }}
                >
                  <div
                    style={{
                      padding: "14px 16px",
                      borderRadius: "18px",
                      background: "var(--surface-soft)",
                      border: "1px solid #dce5ff",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "6px",
                        color: "var(--primary-dark)",
                        fontSize: "0.82rem",
                        fontWeight: "800",
                      }}
                    >
                      6:00 PM
                    </span>
                    <strong style={{ display: "block", color: "var(--dark)" }}>
                      Electrostatics Revision Sprint
                    </strong>
                    <span
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.88rem",
                      }}
                    >
                      GATE Physics
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "14px 16px",
                      borderRadius: "18px",
                      background: "var(--surface-soft)",
                      border: "1px solid #dce5ff",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "6px",
                        color: "var(--primary-dark)",
                        fontSize: "0.82rem",
                        fontWeight: "800",
                      }}
                    >
                      7:30 PM
                    </span>
                    <strong style={{ display: "block", color: "var(--dark)" }}>
                      Polity Quick Revision
                    </strong>
                    <span
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.88rem",
                      }}
                    >
                      UPSC GS Foundation
                    </span>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenModal("Join Live Classes")}
                  style={{ width: "100%" }}
                >
                  Join Live Classes
                </button>
              </div>

              <div
                style={{
                  padding: "22px",
                  borderRadius: "24px",
                  background: "#ffffff",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <h3
                  style={{
                    color: "var(--dark)",
                    fontSize: "1.2rem",
                    marginBottom: "8px",
                  }}
                >
                  Built for trust
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    fontSize: "0.93rem",
                    marginBottom: "18px",
                  }}
                >
                  Clean UI, focused content flow, and serious exam-prep support
                  across desktop and mobile screens.
                </p>
                <div style={{ display: "grid", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "var(--success)", marginTop: "4px" }}
                    ></i>
                    <span>Recorded backup for every session</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "var(--success)", marginTop: "4px" }}
                    ></i>
                    <span>Mock tests and performance tracking</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "var(--success)", marginTop: "4px" }}
                    ></i>
                    <span>Doubt-solving and mentor guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
