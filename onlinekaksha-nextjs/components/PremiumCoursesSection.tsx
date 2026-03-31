export default function PremiumCoursesSection() {
  const courses = [
    {
      title: "Complete Course Package with Test Series",
      description:
        "Master your exam with comprehensive video lectures, practice materials, and full-length test series.",
      videos: "150+ Videos",
      extra: "eBooks & Assignments",
      price: "₹2,999",
      instructor: "Expert Faculty",
      tag: "Most Popular",
    },
    {
      title: "Premium Test Series (All Exams)",
      description:
        "Practice with high-quality mock tests, detailed analytics, and performance tracking.",
      videos: "50+ Mock Tests",
      extra: "Performance Analytics",
      price: "₹1,499",
      instructor: "Test Team",
      tag: "Best Value",
    },
    {
      title: "Premium Study Material + Practice",
      description:
        "Comprehensive study materials with practice questions and detailed solutions.",
      videos: "Premium eBooks",
      extra: "Practice Assignments",
      price: "₹999",
      instructor: "Content Team",
      tag: "Essential",
    },
  ];

  return (
    <section
      id="premium"
      style={{ padding: "6rem 0", background: "var(--bg-surface)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              background: "var(--primary)",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            PREMIUM
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
            Premium Courses & Test Series
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Unlock complete access to premium video courses, eBooks,
            assignments, and comprehensive test series.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "1rem",
                border:
                  index === 0
                    ? "2px solid var(--primary)"
                    : "1px solid var(--border)",
                padding: "2.5rem",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.3s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--primary)",
                    color: "white",
                    padding: "0.375rem 1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {course.tag}
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                    color: "var(--text-main)",
                    lineHeight: 1.3,
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {course.description}
                </p>
              </div>

              <div
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Content:
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--text-main)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {course.videos}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Includes:
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--text-main)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {course.extra}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Instructor:
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--text-main)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {course.instructor}
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Price
                  </div>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      lineHeight: 1,
                    }}
                  >
                    {course.price}
                  </div>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  background:
                    index === 0 ? "var(--primary)" : "var(--secondary)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            All courses include lifetime access, regular updates, and dedicated
            support.
          </p>
        </div>
      </div>
    </section>
  );
}
